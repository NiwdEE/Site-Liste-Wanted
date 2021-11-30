# CY DATING, Le site web ;)

Project généré via le [Angular CLI](https://github.com/angular/angular-cli) en version 13.0.3.

**/!\\** Ce repository sert uniquement à la partie Front-end du site, pour le Back-end consultez le FTP

## Récuperer le code

### I. Synchroniser le code source

1. Télécharger et installer [GitHub Desktop](https://desktop.github.com/)
2. Créer un nouveau dossier (où tu veux mais **vide**)
3. Github Desktop -> Files -> Clone repository (ou *ctrl + shift + o*, ou *alt -> f -> n*)
4. Pour le repository, choisir `NiwdEE/cd` (S'il n'apparrait pas, rafraichir la liste).
5. Pour le dossier, coller le chemin d'accès du nouveau dossier (le selecteur de dossier marche pas).

### II. Télecharger les modules node

1. Télécharger et installer [NodeJS](https://nodejs.org/en/download/)
2. Depuis un terminal, se placer dans le répertoire principal du projet
3. Lancer la commande `npm install`

### III. Télécharger le CLI Angular

1. Télécharger et installer [NodeJS](https://nodejs.org/en/download/)
2. Ouvrir un terminal, en tant qu'administrateur (depuis n'importe quel repertoire)
3. Lancer la commande: `npm install -g @angular/cli`
3. Verifier, via `ng version`, que le CLI est bien installé et en version 11 minimum 

## Serveur local de développement

Utiliser la commande `ng serve` dans le répertoire principal pour démarrer le serveur de développement en local. Naviguer vers `http://localhost:4200/` pour voir le rendu. Le fait de modifier un fichier vas automatiquement recharger la page, pas besoin de spam F5 !

## Ajouter du code

**Merci de créer des branches avant de commecer à coder !!!**

Utiliser la commande `ng generate component $Nom_component` (ou `ng g c $Nom_component`) pour créer un nouveau component.
Ou alors, `ng generate directive|pipe|service|class|guard|interface|enum|module $Nom` pour les autres types de structures.

## Build

**Lors de la mise en ligne du site, NE SURTOUT PAS toucher ou supprimer le fichier `.htaccess` et le dossier `api/`**

La commande par défaut est `ng build` pour génerer un site (plus ou moins) fonctionnel via Apache.

Pour génerer en mode production, rajouter le paramètre `--configuration production`

Pour génerer dans un sous-dossier du domaine, rajouter les paramètres `--deployUrl="/$folder/" --base-href="/$folder/"`

En cas d'erreur bizarre, vider le dossier `dist/` avant de build
