<template>
  <svg class="tile-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <!-- Tennis : raquette et balle -->
    <g v-if="name === 'tennis'">
      <g transform="rotate(-40 32 32)">
        <ellipse cx="32" cy="21" rx="13" ry="16" fill="none" stroke="#f3e9df" stroke-width="3.5" />
        <path d="M24 13 V29 M32 7 V35 M40 13 V29 M20.5 15 H43.5 M19 21 H45 M20.5 27 H43.5" stroke="#f3e9df" stroke-width="1.4" opacity="0.65" />
        <path d="M32 37 V58" stroke="#e0703f" stroke-width="6" stroke-linecap="round" />
      </g>
      <circle cx="49" cy="47" r="8" fill="#d9e84a" />
      <path d="M43.5 42.5 C47 45 47 49.5 43.5 52 M54.5 42.5 C51 45 51 49.5 54.5 52" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" />
    </g>

    <!-- Football : ballon (meme dessin que le favicon de l'appli, agrandi) -->
    <g v-else-if="name === 'football'" transform="translate(32 32) scale(1.14) translate(-32 -32)">
      <defs><clipPath id="portail-ball"><circle cx="32" cy="32" r="21" /></clipPath></defs>
      <circle cx="32" cy="32" r="21" fill="#ffffff" />
      <g clip-path="url(#portail-ball)" fill="#16201b">
      <path d="M32.0 25.0 L38.7 29.8 L36.1 37.7 L27.9 37.7 L25.3 29.8 Z" />
      <path d="M42.0 18.2 L39.1 9.3 L46.7 3.8 L54.3 9.3 L51.4 18.2 Z" />
      <path d="M48.2 37.3 L55.8 31.7 L63.4 37.3 L60.5 46.2 L51.1 46.2 Z" />
      <path d="M32.0 49.0 L39.6 54.5 L36.7 63.5 L27.3 63.5 L24.4 54.5 Z" />
      <path d="M15.8 37.3 L12.9 46.2 L3.5 46.2 L0.6 37.3 L8.2 31.7 Z" />
      <path d="M22.0 18.2 L12.6 18.2 L9.7 9.3 L17.3 3.8 L24.9 9.3 Z" />
      </g>
      <path d="M32.0 25.0 L32.0 11.0 M38.7 29.8 L52.0 25.5 M36.1 37.7 L44.3 49.0 M27.9 37.7 L19.7 49.0 M25.3 29.8 L12.0 25.5" stroke="#16201b" stroke-width="2" stroke-linecap="round" />
      <circle cx="32" cy="32" r="21" fill="none" stroke="#16201b" stroke-width="1.5" />
      <!-- Liseré clair : sur le fond sombre de la tuile, le bord noir du ballon disparaitrait -->
      <circle cx="32" cy="32" r="22.4" fill="none" stroke="#e2e8f0" stroke-width="2" />
    </g>

    <!-- LoL : bouclier (meme dessin que le favicon de l'appli) -->
    <g v-else-if="name === 'lol'">
      <defs>
        <linearGradient id="portail-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#22d3ee" />
          <stop offset="0.55" stop-color="#818cf8" />
          <stop offset="1" stop-color="#c084fc" />
        </linearGradient>
      </defs>
      <path d="M32 6 L53 13 V30 C53 43 44 52 32 58 C20 52 11 43 11 30 V13 Z" fill="url(#portail-shield)" />
      <path d="M32 13 L47 18 V30 C47 39.5 41 46.5 32 51 C23 46.5 17 39.5 17 30 V18 Z" fill="#121629" />
      <path d="M32 19 L40 31 L32 43 L24 31 Z" fill="#f5c451" />
      <path d="M32 19 L36 31 L32 43 Z" fill="#ffd97a" />
    </g>

    <!-- Budget : piece en euros et barres de graphique -->
    <g v-else-if="name === 'budget'">
      <rect x="6" y="38" width="8" height="18" rx="2" fill="#f5c451" opacity="0.45" />
      <rect x="17" y="30" width="8" height="26" rx="2" fill="#f5c451" opacity="0.7" />
      <circle cx="40" cy="30" r="20" fill="#e0a526" />
      <circle cx="40" cy="30" r="16.5" fill="#f5c451" />
      <path d="M47.5 22.5 A10 10 0 1 0 47.5 37.5" fill="none" stroke="#1a2330" stroke-width="4" stroke-linecap="round" />
      <path d="M29 27.5 H41 M29 33.5 H41" stroke="#1a2330" stroke-width="3.2" stroke-linecap="round" />
    </g>

    <!-- Calendrier : page, jour courant en jaune -->
    <g v-else-if="name === 'calendrier'">
      <rect x="8" y="12" width="48" height="44" rx="7" fill="#ffffff" />
      <path d="M8 19 A7 7 0 0 1 15 12 H49 A7 7 0 0 1 56 19 V25 H8 Z" fill="#4f8df5" />
      <rect x="18" y="6" width="6" height="12" rx="3" fill="#dce8fd" />
      <rect x="40" y="6" width="6" height="12" rx="3" fill="#dce8fd" />
      <g fill="#b9c8dc">
        <rect x="14" y="31" width="8" height="7" rx="1.5" />
        <rect x="28" y="31" width="8" height="7" rx="1.5" />
        <rect x="42" y="31" width="8" height="7" rx="1.5" />
        <rect x="14" y="43" width="8" height="7" rx="1.5" />
        <rect x="42" y="43" width="8" height="7" rx="1.5" />
      </g>
      <rect x="28" y="43" width="8" height="7" rx="1.5" fill="#f5b700" />
    </g>

    <!-- Camera : camera de surveillance, voyant d'enregistrement -->
    <g v-else-if="name === 'camera'">
      <rect x="10" y="24" width="34" height="20" rx="6" fill="#2b2f38" />
      <rect x="10" y="24" width="34" height="6" rx="3" fill="#3f4453" />
      <path d="M44 28 L56 22 V46 L44 40 Z" fill="#2b2f38" />
      <circle cx="27" cy="34" r="9" fill="#11151c" />
      <circle cx="27" cy="34" r="6.5" fill="#ef4444" />
      <circle cx="24" cy="31" r="2" fill="#ffffff" opacity="0.6" />
      <circle cx="49" cy="18" r="4" fill="#ef4444" />
    </g>
    <!-- Tuiles reservees : pictogrammes au trait -->
    <g v-else fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <g v-if="name === 'photo'">
        <path d="M10 22 H20 L24 15 H40 L44 22 H54 V50 H10 Z" />
        <circle cx="32" cy="35" r="9" />
      </g>
      <g v-else-if="name === 'music'">
        <path d="M24 46 V16 L50 11 V41" />
        <circle cx="18" cy="46" r="6" />
        <circle cx="44" cy="41" r="6" />
      </g>
      <g v-else-if="name === 'microphone'">
        <rect x="24" y="8" width="16" height="28" rx="8" />
        <path d="M16 30 A16 16 0 0 0 48 30 M32 46 V56 M24 56 H40" />
      </g>
      <g v-else-if="name === 'fridge'">
        <rect x="16" y="6" width="32" height="52" rx="5" />
        <path d="M16 26 H48 M23 14 V19 M23 33 V42" />
      </g>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  // tennis, football, lol, budget, calendrier, camera, photo, music, microphone, fridge
  name: { type: String, required: true }
})
</script>
