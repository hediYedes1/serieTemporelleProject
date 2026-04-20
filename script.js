const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.9;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('load', () => {
  revealOnScroll();
  renderCharts();
});

window.addEventListener('scroll', revealOnScroll);

window.addEventListener('resize', () => {
  renderCharts();
});

function renderCharts() {
  if (!window.projectData) {
    return;
  }

  drawSeriesChart({
    canvasId: 'chart-project1',
    statsId: 'stats-project1',
    series: window.projectData.project1,
    stroke: '#ffbf69',
    fill: 'rgba(255, 191, 105, 0.18)'
  });

  drawSeriesChart({
    canvasId: 'chart-project2',
    statsId: 'stats-project2',
    series: window.projectData.project2,
    stroke: '#2dd4bf',
    fill: 'rgba(45, 212, 191, 0.18)'
  });
}

function drawSeriesChart({ canvasId, statsId, series, stroke, fill }) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !series || !Array.isArray(series.values) || series.values.length < 2) {
    return;
  }

  const parentWidth = canvas.clientWidth;
  const parentHeight = canvas.clientHeight;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(parentWidth * dpr));
  canvas.height = Math.max(1, Math.floor(parentHeight * dpr));

  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, parentWidth, parentHeight);

  const values = series.values;
  const labels = series.labels;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1e-6);

  const padLeft = 38;
  const padRight = 16;
  const padTop = 16;
  const padBottom = 28;

  const plotW = parentWidth - padLeft - padRight;
  const plotH = parentHeight - padTop - padBottom;

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padLeft, padTop);
  ctx.lineTo(padLeft, padTop + plotH);
  ctx.lineTo(padLeft + plotW, padTop + plotH);
  ctx.stroke();

  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.beginPath();

  values.forEach((value, index) => {
    const x = padLeft + (index / (values.length - 1)) * plotW;
    const y = padTop + (1 - (value - min) / range) * plotH;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.fillStyle = fill;
  ctx.beginPath();
  values.forEach((value, index) => {
    const x = padLeft + (index / (values.length - 1)) * plotW;
    const y = padTop + (1 - (value - min) / range) * plotH;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.lineTo(padLeft + plotW, padTop + plotH);
  ctx.lineTo(padLeft, padTop + plotH);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'rgba(237, 248, 247, 0.9)';
  ctx.font = '12px Space Grotesk, Segoe UI, sans-serif';
  ctx.fillText(String(max.toFixed(2)), 4, padTop + 2);
  ctx.fillText(String(min.toFixed(2)), 4, padTop + plotH - 2);
  ctx.fillText(labels[0], padLeft, parentHeight - 6);

  const endText = labels[labels.length - 1];
  const endTextWidth = ctx.measureText(endText).width;
  ctx.fillText(endText, padLeft + plotW - endTextWidth, parentHeight - 6);

  const statsElement = document.getElementById(statsId);
  if (statsElement) {
    const startValue = values[0];
    const endValue = values[values.length - 1];
    const variation = ((endValue - startValue) / startValue) * 100;
    const trend = variation >= 0 ? 'hausse' : 'baisse';
    statsElement.textContent =
      'Periode: ' + labels[0] + ' -> ' + labels[labels.length - 1] +
      ' | Min: ' + min.toFixed(2) +
      ' | Max: ' + max.toFixed(2) +
      ' | Tendance globale: ' + trend + ' (' + variation.toFixed(1) + '%)';
  }
}
