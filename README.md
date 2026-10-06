# Portail Foyer

Page d'accueil de la tablette murale : une grille de grandes tuiles tactiles qui
ouvrent les applis du foyer, avec l'heure et la date en direct. Thème sombre, lisible
de loin, pensé pour rester affiché en permanence en plein écran (paysage).

Sixième projet du foyer, à côté de `lol-results`, `foot-results`, `tennis-results`,
`budget-foyer` et `calendrier-foyer`. Pas de backend ni de base de données pour
l'instant : uniquement un frontend Vue 3 + Vite.

## Tuiles

| Tuile | Taille | Lien |
|---|---|---|
| Budget | grande | https://serveur-foyer.tail0af124.ts.net:8283 |
| Calendrier | grande | https://serveur-foyer.tail0af124.ts.net:8284 |
| Tennis | petite | https://serveur-foyer.tail0af124.ts.net:8282 |
| Football | petite | https://serveur-foyer.tail0af124.ts.net:8281 |
| LoL | petite | https://serveur-foyer.tail0af124.ts.net:8280 |
| Photo, Spotify, Vocal, Frigo & recettes | réservées | grisées, badge « Bientôt disponible » |

**Pour changer un lien, un libellé ou l'ordre des tuiles : `frontend/src/config.js`**
(seul fichier à modifier). Les icônes sont dessinées en SVG dans
`frontend/src/components/TileIcon.vue`, dans le même esprit que le favicon de chaque appli.

## Lancer en local

```bash
cd frontend
npm install
npm run dev      # http://localhost:5178
```

Autres commandes : `npm run build` (fichiers statiques dans `frontend/dist/`),
`npm run preview`, `npm run lint`.

## Mise en page

- **Tablette en paysage** (1024×768, 1280×800, plein écran 1920×1080) : tout tient sans
  défilement. Les deux grandes tuiles occupent la rangée du haut, les trois petites celle
  du milieu, les quatre réservées celle du bas.
- **Tablette en portrait** : sans défilement non plus, les grandes tuiles passent sur
  toute la largeur.
- **Téléphone** : deux colonnes, défilement autorisé.

Sur la tablette, ajouter la page à l'écran d'accueil l'ouvre en plein écran, sans barre
d'adresse.

## Structure

```
frontend/
  index.html
  public/favicon.svg
  src/
    config.js                 tuiles et liens
    App.vue                   en-tete + grille
    components/ClockHeader.vue  heure et date en direct
    components/AppTile.vue      tuile (lien ou reservee)
    components/TileIcon.vue     icones SVG
    style.css                   theme sombre
```
