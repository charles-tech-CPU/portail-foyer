<template>
  <!-- Appli disponible : toute la tuile est un lien (grande zone tactile) -->
  <a
    v-if="!comingSoon"
    class="tile"
    :class="`tile-${size}`"
    :href="url"
    :style="{ '--accent': color }"
  >
    <TileIcon :name="icon" />
    <span class="text">
      <span class="label">{{ label }}</span>
      <span v-if="description" class="description">{{ description }}</span>
    </span>
    <span class="arrow" aria-hidden="true">›</span>
  </a>

  <!-- Emplacement reserve : non cliquable -->
  <div v-else class="tile tile-soon" aria-disabled="true">
    <TileIcon :name="icon" />
    <span class="label">{{ label }}</span>
    <span class="badge">Bientôt disponible</span>
  </div>
</template>

<script setup>
import TileIcon from './TileIcon.vue'

defineProps({
  label: { type: String, required: true },
  icon: { type: String, required: true },
  description: { type: String, default: null },
  url: { type: String, default: null },
  size: { type: String, default: 'small' },
  color: { type: String, default: '#94a3b8' },
  comingSoon: { type: Boolean, default: false }
})
</script>

<style scoped>
.tile {
  position: relative;
  display: flex;
  align-items: center;
  gap: clamp(14px, 2.4vw, 32px);
  min-height: 0;
  padding: clamp(16px, 2.6vh, 32px) clamp(18px, 2.4vw, 36px);
  border-radius: 26px;
  color: var(--text);
  text-decoration: none;
  overflow: hidden;
  background:
    radial-gradient(120% 140% at 0% 0%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 60%),
    var(--surface);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, var(--border));
  box-shadow: 0 18px 40px -24px rgba(0, 0, 0, 0.9);
  transition: transform 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
.tile:hover {
  border-color: var(--accent);
  background-color: var(--surface-hover);
}
/* Retour au toucher : la tuile s'enfonce legerement */
.tile:active {
  transform: scale(0.975);
}
.tile:focus-visible {
  outline: 4px solid var(--accent);
  outline-offset: 3px;
}
.tile::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 5px;
  background: var(--accent);
  opacity: 0.85;
}

/* Tailles bornees par la hauteur ET la largeur de l'ecran : lisibles de loin sans
   deborder sur une petite tablette */
.tile :deep(.tile-icon) {
  flex-shrink: 0;
  width: clamp(48px, min(11vh, 7vw), 104px);
  height: clamp(48px, min(11vh, 7vw), 104px);
}
.text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}
.label {
  font-size: clamp(1.3rem, min(4vh, 2.4vw), 2.4rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.1;
}
.description {
  font-size: clamp(0.95rem, 2.2vh, 1.3rem);
  color: var(--text-muted);
}
.arrow {
  font-size: clamp(2.2rem, 6vh, 3.6rem);
  font-weight: 300;
  line-height: 1;
  color: var(--accent);
  opacity: 0.8;
}

/* Grandes tuiles (Budget, Calendrier) : icone et titre plus grands */
.tile-large :deep(.tile-icon) {
  width: clamp(64px, min(18vh, 12vw), 168px);
  height: clamp(64px, min(18vh, 12vw), 168px);
}
.tile-large .label {
  font-size: clamp(1.7rem, min(6vh, 3.8vw), 3.6rem);
}
.tile-large .description {
  font-size: clamp(1.05rem, 2.8vh, 1.6rem);
}

/* Tuiles reservees : grisees, contenu empile */
.tile-soon {
  --accent: #475569;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  text-align: center;
  color: var(--text-faint);
  background: var(--surface-soon);
  border: 2px dashed var(--border);
  box-shadow: none;
  cursor: default;
}
.tile-soon::after {
  display: none;
}
.tile-soon:hover {
  border-color: var(--border);
  background-color: var(--surface-soon);
}
.tile-soon:active {
  transform: none;
}
.tile-soon :deep(.tile-icon) {
  width: clamp(36px, 7vh, 60px);
  height: clamp(36px, 7vh, 60px);
}
.tile-soon .label {
  font-size: clamp(1.05rem, 2.6vh, 1.5rem);
  font-weight: 700;
}
/* Tablette en portrait : trois petites tuiles par rangee, contenu empile et centre */
@media (orientation: portrait) and (min-width: 601px) {
  .tile-small {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    text-align: center;
  }
  .tile-small .text {
    align-items: center;
  }
  .tile-small .arrow {
    display: none;
  }
}

.badge {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: clamp(0.75rem, 1.7vh, 0.95rem);
  font-weight: 600;
  color: var(--text-muted);
  background: rgba(148, 163, 184, 0.12);
}
</style>
