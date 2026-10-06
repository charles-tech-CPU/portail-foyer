// Tuiles du portail : c'est le seul fichier a modifier pour changer un lien, un
// libelle ou l'ordre des tuiles.
//
// size  : 'large' (Budget, Calendrier) ou 'small' (applis de resultats)
// icon  : nom d'une icone de components/TileIcon.vue
// color : couleur d'accent de la tuile (celle du favicon de l'appli)

const SERVER = 'https://serveur-foyer.tail0af124.ts.net'

export const APPS = [
  {
    id: 'budget',
    label: 'Budget',
    description: 'Dépenses et revenus du foyer',
    url: `${SERVER}:8283`,
    size: 'large',
    icon: 'budget',
    color: '#f5c451'
  },
  {
    id: 'calendrier',
    label: 'Calendrier',
    description: 'Agenda partagé du foyer',
    url: `${SERVER}:8284`,
    size: 'large',
    icon: 'calendrier',
    color: '#4f8df5'
  },
  {
    id: 'tennis',
    label: 'Tennis',
    description: 'Circuit ATP',
    url: `${SERVER}:8282`,
    size: 'small',
    icon: 'tennis',
    color: '#e0703f'
  },
  {
    id: 'football',
    label: 'Football',
    description: 'Championnats et coupes',
    url: `${SERVER}:8281`,
    size: 'small',
    icon: 'football',
    color: '#22c55e'
  },
  {
    id: 'lol',
    label: 'LoL',
    description: 'League of Legends esport',
    url: `${SERVER}:8280`,
    size: 'small',
    icon: 'lol',
    color: '#a78bfa'
  }
]

// Tuiles reservees : affichees grisees, non cliquables, avec un badge "Bientot disponible".
export const COMING_SOON = [
  { id: 'photo', label: 'Photo', icon: 'photo' },
  { id: 'spotify', label: 'Spotify', icon: 'music' },
  { id: 'vocal', label: 'Vocal', icon: 'microphone' },
  { id: 'frigo', label: 'Frigo & recettes', icon: 'fridge' }
]
