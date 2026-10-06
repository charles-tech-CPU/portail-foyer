<template>
  <div class="portal">
    <ClockHeader />

    <main class="tiles">
      <AppTile
        v-for="app in APPS"
        :key="app.id"
        :label="app.label"
        :description="app.description"
        :url="app.url"
        :size="app.size"
        :icon="app.icon"
        :color="app.color"
      />
      <AppTile
        v-for="soon in COMING_SOON"
        :key="soon.id"
        :label="soon.label"
        :icon="soon.icon"
        coming-soon
      />
    </main>
  </div>
</template>

<script setup>
import { APPS, COMING_SOON } from './config'
import AppTile from './components/AppTile.vue'
import ClockHeader from './components/ClockHeader.vue'
</script>

<style scoped>
/* Toute la hauteur de l'ecran, sans scroll en paysage : l'en-tete prend sa taille,
   la grille de tuiles se partage le reste. */
.portal {
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 2.6vh, 28px);
  height: 100dvh;
  padding: clamp(16px, 3vh, 36px) clamp(16px, 3vw, 44px);
}

/* 12 colonnes : 2 grandes tuiles (6 + 6), 3 petites (4 + 4 + 4), 4 reservees (3 x 4).
   Les grandes tuiles ont la rangee la plus haute, les reservees la plus basse. */
.tiles {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1.45fr 1fr 0.72fr;
  gap: clamp(12px, 2vh, 24px);
}
.tiles > :deep(.tile-large) {
  grid-column: span 6;
}
.tiles > :deep(.tile-small) {
  grid-column: span 4;
}
.tiles > :deep(.tile-soon) {
  grid-column: span 3;
}

/* Tablette en portrait : toujours sans scroll, les grandes tuiles sur toute la largeur */
@media (orientation: portrait) {
  .tiles {
    grid-template-rows: 1.3fr 1.3fr 1fr 0.62fr 0.62fr;
  }
  .tiles > :deep(.tile-large) {
    grid-column: span 12;
  }
  .tiles > :deep(.tile-soon) {
    grid-column: span 6;
  }
}

/* Telephone : deux colonnes et defilement autorise */
@media (max-width: 600px) {
  .portal {
    height: auto;
    min-height: 100dvh;
  }
  .tiles {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
    grid-auto-rows: minmax(130px, auto);
  }
  .tiles > :deep(.tile-large),
  .tiles > :deep(.tile-small) {
    grid-column: span 2;
  }
  .tiles > :deep(.tile-large) {
    min-height: 180px;
  }
  .tiles > :deep(.tile-soon) {
    grid-column: span 1;
  }
}
</style>
