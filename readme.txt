# 📈 Systeme d'Analyse de Series Temporelles

![R](https://img.shields.io/badge/R-4.x-276DC3.svg)
![R Markdown](https://img.shields.io/badge/R%20Markdown-Reports-75AADB.svg)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-0A1F1F.svg)
![Python](https://img.shields.io/badge/Python-Optional%20(server)-3776AB.svg)

Portfolio web local pour presenter deux projets complets de series temporelles, avec rapports HTML, sources R Markdown et donnees Excel.

---

## 📋 Table des Matieres

- [Apercu du Projet](#apercu-du-projet)
- [Fonctionnalites Principales](#fonctionnalites-principales)
- [Architecture Technique](#architecture-technique)
- [Projets Inclus](#projets-inclus)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Technologies Utilisees](#technologies-utilisees)
- [Depannage Rapide](#depannage-rapide)

---

## 🎯 Apercu du Projet

Ce dossier contient:

- Un site principal: [index.html](index.html)
- Deux pages projet dediees:
  - [projet1-page.html](projet1-page.html)
  - [projet2-page.html](projet2-page.html)
- Deux rapports complets exportes:
  - [ProjetSerieTemporelleCopie.html](ProjetSerieTemporelleCopie.html)
  - [Projet2SerieTemporelle.html](Projet2SerieTemporelle.html)
- Les sources R Markdown:
  - [projet1.rmd](projet1.rmd)
  - [projet2.rmd](projet2.rmd)
- Les donnees:
  - [USA.xlsx](USA.xlsx)
  - [IndustrialProduction.xlsx](IndustrialProduction.xlsx)

---

## 🚀 Fonctionnalites Principales

### 1. Presentation Web Complete
- Navigation entre Accueil, Projets, Fichiers, A propos
- Boutons d'acces rapide vers les rapports et les sources
- Retour arriere avec fleche de navigation sur les pages

### 2. Visualisation des Projets
- Mini-graphiques integres sur la page d'accueil
- Resume des statistiques (min, max, tendance)
- Affichage complet des sorties analytiques dans les rapports HTML

### 3. Double Niveau de Consultation
- Niveau 1: vue portfolio rapide depuis [index.html](index.html)
- Niveau 2: vue detaillee par projet avec iframe sur:
  - [projet1-page.html](projet1-page.html)
  - [projet2-page.html](projet2-page.html)

---

## 🏗️ Architecture Technique

### Stack
- Analyse: R / R Markdown
- Frontend: HTML, CSS, JavaScript
- Donnees: Excel
- Execution locale: navigateur direct ou serveur HTTP Python

### Schema Global

```text
Browser
  |
  +--> index.html
        |
        +--> projet1-page.html --> ProjetSerieTemporelleCopie.html
        +--> projet2-page.html --> Projet2SerieTemporelle.html
        +--> USA.xlsx / IndustrialProduction.xlsx
        +--> projet1.rmd / projet2.rmd
```

---

## 📦 Projets Inclus

### Projet 1 - Production pharmaceutique USA
- Serie mensuelle (frequence 12)
- Decomposition, tendance, saisonnalite, puis modelisation ARIMA
- Rapport complet: [ProjetSerieTemporelleCopie.html](ProjetSerieTemporelleCopie.html)

### Projet 2 - Industrial Production Semiconductors
- Serie mensuelle FRED IPB53122N
- Decomposition additive, ajustements tendance/saisonnalite, modelisation ARMA
- Rapport complet: [Projet2SerieTemporelle.html](Projet2SerieTemporelle.html)

---

## 🛠️ Installation

### Prerequis minimum
- Aucun prerequis pour ouvrir les pages HTML directement

### Prerequis recommandes
- Python 3.x (pour serveur local)
- R 4.x + RStudio (pour modifier/regenerer les rapports)
- Packages R: readxl, forecast, tseries, stats, knitr, rmarkdown

Installation des packages R (optionnel):

```r
install.packages(c("readxl", "forecast", "tseries", "knitr", "rmarkdown"))
```

---

## 🎮 Utilisation

### Option A - Ouverture directe
1. Ouvrir [index.html](index.html) dans le navigateur.
2. Utiliser les boutons Projets/Fichiers/A propos.
3. Ouvrir les rapports complets via les liens dedies.

### Option B - Serveur local (recommande)

```powershell
cd C:\Users\MSI\Desktop\projet
python -m http.server 8000
```

Puis ouvrir:

```text
http://localhost:8000/index.html
```

Arret serveur:

```text
Ctrl + C
```

Si `python` n'est pas reconnu:

```powershell
C:\Users\MSI\AppData\Local\Programs\Python\Python313\python.exe -m http.server 8000
```

### Regenerer les rapports R (optionnel)
1. Ouvrir [projet1.rmd](projet1.rmd) ou [projet2.rmd](projet2.rmd) dans RStudio.
2. Cliquer sur Knit to HTML.
3. Conserver les noms de sortie utilises par le site:
   - `ProjetSerieTemporelleCopie.html`
   - `Projet2SerieTemporelle.html`

---

## 📁 Structure du Projet

```text
projet/
|-- index.html
|-- style.css
|-- script.js
|-- project-data.js
|-- projet1-page.html
|-- projet2-page.html
|-- ProjetSerieTemporelleCopie.html
|-- Projet2SerieTemporelle.html
|-- projet1.rmd
|-- projet2.rmd
|-- USA.xlsx
|-- IndustrialProduction.xlsx
|-- desc.txt
|-- IndustrialProduction.txt
`-- Activite Controle Continu 4DS.pdf
```

---

## 🔧 Technologies Utilisees

- R / R Markdown
- HTML5 / CSS3 / JavaScript
- Python (serveur local HTTP)
- Excel (sources de donnees)

---

## 🆘 Depannage Rapide

Probleme: les changements n'apparaissent pas
- Faire un hard refresh: `Ctrl + F5`

Probleme: rapport non visible dans l'iframe
- Utiliser le bouton "Ouvrir le rapport dans un nouvel onglet"

Probleme: python non reconnu
- Utiliser le chemin complet Python indique plus haut

---

## 👤 Auteur

Projet portfolio de series temporelles de `mohamedhediyedes`.
