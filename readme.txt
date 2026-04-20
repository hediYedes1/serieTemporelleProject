SYSTEME D'ANALYSE DE SERIES TEMPORELLES (PROJET)

Application de presentation web + rapports d'analyse R pour deux projets de series temporelles.

1) APERCU DU PROJET

Ce dossier contient:
- Un site web principal pour presenter les 2 projets.
- Deux pages projet dediees.
- Deux rapports HTML complets exportes depuis R Markdown.
- Les fichiers sources Rmd et les jeux de donnees Excel.

2) FICHIERS PRINCIPAUX

- index.html
  Page d'accueil du site.

- projet1-page.html
  Page detaillee du Projet 1 (inclut le rapport HTML complet en iframe).

- projet2-page.html
  Page detaillee du Projet 2 (inclut le rapport HTML complet en iframe).

- ProjetSerieTemporelleCopie.html
  Rapport complet du Projet 1.

- Projet2SerieTemporelle.html
  Rapport complet du Projet 2.

- projet1.rmd / projet2.rmd
  Sources R Markdown des analyses.

- USA.xlsx / IndustrialProduction.xlsx
  Donnees des 2 projets.

- style.css / script.js / project-data.js
  Styles, logique front-end, donnees des mini-graphiques de la page d'accueil.

3) PRE-REQUIS

Execution du site:
- Aucun prerequis obligatoire si tu ouvres les fichiers HTML directement.
- Recommande: Python 3.x pour lancer un serveur local (plus propre et plus stable).

Execution/modification des analyses R:
- R (4.x recommande)
- RStudio recommande pour "Knit" vers HTML
- Packages R:
  readxl, forecast, tseries, stats, knitr, rmarkdown

4) EXECUTION RAPIDE (SANS INSTALLATION)

Option A: ouvrir directement le site
1. Ouvre le dossier du projet.
2. Double-clique sur index.html.
3. Depuis la page d'accueil, clique sur:
   - "Ouvrir la page du projet" (projet1-page.html / projet2-page.html)
   - ou "Consulter le rapport complet".

5) EXECUTION RECOMMANDEE (SERVEUR LOCAL)

Option B: lancer un serveur HTTP local (Windows PowerShell)

1. Ouvre PowerShell dans le dossier du projet:
   cd C:\Users\MSI\Desktop\projet

2. Lance le serveur:
   python -m http.server 8000

3. Ouvre le navigateur sur:
   http://localhost:8000/index.html

4. Arreter le serveur:
   Ctrl + C dans PowerShell.

Si la commande python ne fonctionne pas, utilise le chemin complet:
C:\Users\MSI\AppData\Local\Programs\Python\Python313\python.exe -m http.server 8000

6) COMMENT CONSULTER LES RAPPORTS COMPLETS

Rapport Projet 1:
- ProjetSerieTemporelleCopie.html

Rapport Projet 2:
- Projet2SerieTemporelle.html

Depuis index.html, les boutons sont deja connectes vers ces rapports.

7) MODIFIER LES ANALYSES R (OPTIONNEL)

Si tu veux modifier projet1.rmd ou projet2.rmd:

1. Ouvre le fichier dans RStudio.
2. Clique sur "Knit" (Knit to HTML).
3. Sauvegarde la sortie HTML en gardant les noms utilises par le site:
   - ProjetSerieTemporelleCopie.html
   - Projet2SerieTemporelle.html

Remarque:
- Le rendu en ligne de commande R peut demander Pandoc.
- Avec RStudio, le rendu est generalement plus simple.

8) DEPANNAGE RAPIDE

Probleme: la page n'affiche pas les changements
- Fais un rechargement force du navigateur: Ctrl + F5.

Probleme: le rapport ne s'affiche pas dans la page projet
- Clique sur "Ouvrir le rapport dans un nouvel onglet".

Probleme: erreur python non reconnu
- Verifie l'installation Python ou utilise le chemin complet indique plus haut.

9) RESUME DES COMMANDES UTILES

Lancer le site local:
- cd C:\Users\MSI\Desktop\projet
- python -m http.server 8000

URL du site:
- http://localhost:8000/index.html

Arret:
- Ctrl + C

Fin.
