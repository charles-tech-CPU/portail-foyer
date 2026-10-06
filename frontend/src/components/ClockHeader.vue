<template>
  <header class="clock-header">
    <div class="brand">
      <span class="brand-mark" aria-hidden="true"></span>
      <span class="brand-name">Portail Foyer</span>
    </div>
    <div class="clock" aria-live="off">
      <time class="time" :datetime="now.toISOString()">{{ time }}</time>
      <span class="date">{{ date }}</span>
    </div>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const TIME = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' })
const DATE = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

const now = ref(new Date())
let timer

onMounted(() => {
  // Rafraichie chaque seconde : la minute change au plus une seconde apres l'heure pile
  timer = setInterval(() => { now.value = new Date() }, 1000)
})
onBeforeUnmount(() => clearInterval(timer))

const time = computed(() => TIME.format(now.value))
const date = computed(() => {
  const text = DATE.format(now.value)
  return text.charAt(0).toUpperCase() + text.slice(1)
})
</script>

<style scoped>
.clock-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}
.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background:
    linear-gradient(var(--bg), var(--bg)) padding-box,
    conic-gradient(from 200deg, #f5c451, #4f8df5, #22c55e, #a78bfa, #e0703f, #f5c451) border-box;
  border: 4px solid transparent;
}
.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.01em;
}
.clock {
  display: flex;
  align-items: baseline;
  gap: 22px;
}
.time {
  font-size: clamp(2.6rem, 6vh, 4.2rem);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  line-height: 1;
}
.date {
  font-size: clamp(1.1rem, 2.6vh, 1.6rem);
  font-weight: 500;
  color: var(--text-muted);
}
@media (max-width: 760px) {
  .brand-name {
    display: none;
  }
  .clock {
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }
}
</style>
