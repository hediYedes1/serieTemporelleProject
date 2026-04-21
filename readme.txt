====================================================================
  SYSTEME D'ANALYSE DE SERIES TEMPORELLES - PROJET
====================================================================

Application de presentation web + rapports d'analyse R
pour deux projets de series temporelles.


------------------------------
  TABLE DES MATIERES
------------------------------
1. Apercu du projet
2. Fichiers principaux
3. Pre-requis
4. Execution rapide (sans installation)
5. Execution recommandee (serveur local)
6. Consultation des rapports complets
7. Modifier les analyses R (optionnel)
8. Depannage rapide
9. Resume des commandes utiles


====================================================================
1) APERCU DU PROJET
====================================================================

Ce dossier contient:
- Un site web principal pour presenter les 2 projets.
- Deux pages projet dediees.
- Deux rapports HTML complets exportes depuis R Markdown.
- Les fichiers sources Rmd et les jeux de donnees Excel.


====================================================================
2) FICHIERS PRINCIPAUX
====================================================================

[Site web]
- index.html
  Page d'accueil du site.

- projet1-page.html
  Page detaillee du Projet 1 (rapport complet en iframe).

- projet2-page.html
  Page detaillee du Projet 2 (rapport complet en iframe).

[Rapports]
- ProjetSerieTemporelleCopie.html
  Rapport complet du Projet 1.

- Projet2SerieTemporelle.html
  Rapport complet du Projet 2.

[Sources]
- projet1.rmd / projet2.rmd
  Sources R Markdown des analyses.

- USA.xlsx / IndustrialProduction.xlsx
  Donnees des deux projets.

[Front-end]
- style.css / script.js / project-data.js
  Styles, logique front-end et donnees pour mini-graphiques.


====================================================================
3) PRE-REQUIS
====================================================================

Execution du site:
- Aucun prerequis obligatoire si tu ouvres les fichiers HTML directement.
- Recommande: Python 3.x pour lancer un serveur local.

Execution/modification des analyses R:
- R (4.x recommande)
- RStudio recommande pour "Knit" vers HTML
- Packages R:
  readxl, forecast, tseries, stats, knitr, rmarkdown


====================================================================
4) EXECUTION RAPIDE (SANS INSTALLATION)
====================================================================

Option A - Ouvrir directement le site:
1. Ouvre le dossier du projet.
2. Double-clique sur index.html.
3. Depuis la page d'accueil, clique sur:
   - "Ouvrir la page du projet" (projet1-page.html / projet2-page.html)
   - ou "Consulter le rapport complet".


====================================================================
5) EXECUTION RECOMMANDEE (SERVEUR LOCAL)
====================================================================

Option B - Lancer un serveur HTTP local (Windows PowerShell):

Etape 1 - Ouvrir PowerShell dans le dossier:
  cd C:\Users\MSI\Desktop\projet

Etape 2 - Lancer le serveur:
  python -m http.server 8000

Etape 3 - Ouvrir le navigateur:
  http://localhost:8000/index.html

Etape 4 - Arreter le serveur:
  Ctrl + C

Si la commande python ne fonctionne pas:
  C:\Users\MSI\AppData\Local\Programs\Python\Python313\python.exe -m http.server 8000


====================================================================
6) COMMENT CONSULTER LES RAPPORTS COMPLETS
====================================================================

Rapport Projet 1:
- ProjetSerieTemporelleCopie.html

Rapport Projet 2:
- Projet2SerieTemporelle.html

Depuis index.html, les boutons sont deja connectes vers ces rapports.


====================================================================
7) MODIFIER LES ANALYSES R (OPTIONNEL)
====================================================================

Si tu veux modifier projet1.rmd ou projet2.rmd:

1. Ouvre le fichier dans RStudio.
2. Clique sur "Knit" (Knit to HTML).
3. Sauvegarde la sortie HTML en gardant ces noms:
   - ProjetSerieTemporelleCopie.html
   - Projet2SerieTemporelle.html

Remarque:
- Le rendu en ligne de commande R peut demander Pandoc.
- Avec RStudio, le rendu est generalement plus simple.


====================================================================
8) DEPANNAGE RAPIDE
====================================================================

Probleme: la page n'affiche pas les changements
- Fais un rechargement force du navigateur: Ctrl + F5.

Probleme: le rapport ne s'affiche pas dans la page projet
- Clique sur "Ouvrir le rapport dans un nouvel onglet".

Probleme: erreur "python non reconnu"
- Verifie l'installation de Python.
- Ou utilise le chemin complet indique dans la section 5.


====================================================================
9) RESUME DES COMMANDES UTILES
====================================================================

Lancer le site local:
  cd C:\Users\MSI\Desktop\projet
  python -m http.server 8000

URL du site:
  http://localhost:8000/index.html

Arret du serveur:
  Ctrl + C

====================================================================
FIN
====================================================================
