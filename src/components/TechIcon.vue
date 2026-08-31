<script setup>
// Coloured brand icon + label for a project's tech tag. Brand marks come from
// simple-icons; colours are hand-tuned to stay legible on both themes (a few
// brand hexes are too dark or too bright as-is).
import {
  siNestjs,
  siTypescript,
  siPrisma,
  siPostgresql,
  siVuedotjs,
  siCss,
  siJavascript,
  siReact,
  siHtml5,
  siNextdotjs,
  siTailwindcss,
  siOpenjdk,
} from 'simple-icons'

const MAP = {
  'NestJS': { path: siNestjs.path, color: '#E0234E' },
  'TypeScript': { path: siTypescript.path, color: '#4C8DD6' },
  'Prisma': { path: siPrisma.path, color: '#9AA4B4' },
  'PostgreSQL': { path: siPostgresql.path, color: '#5B84E6' },
  'Vue.js': { path: siVuedotjs.path, color: '#4FC08D' },
  'CSS': { path: siCss.path, color: '#A986DD' },
  'JavaScript': { path: siJavascript.path, color: '#E6C200' },
  'Java': { path: siOpenjdk.path, color: '#E8843C' },
  'React': { path: siReact.path, color: '#4FC3E0' },
  'HTML': { path: siHtml5.path, color: '#E5622F' },
  'Next.js': { path: siNextdotjs.path, themed: true },
  'Tailwind CSS': { path: siTailwindcss.path, color: '#2CBBD1' },
}

defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <span class="tech">
    <svg
      v-if="MAP[name]"
      class="tech__glyph"
      :class="{ 'tech__glyph--themed': MAP[name].themed }"
      viewBox="0 0 24 24"
      :fill="MAP[name].themed ? 'currentColor' : MAP[name].color"
      aria-hidden="true"
    >
      <path :d="MAP[name].path" />
    </svg>
    <span v-else class="tech__dot" aria-hidden="true"></span>
    {{ name }}
  </span>
</template>

<style scoped>
.tech {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text-mute);
}
.tech__glyph {
  width: 0.95rem;
  height: 0.95rem;
  flex-shrink: 0;
}
.tech__glyph--themed {
  color: var(--color-text-soft);
}
.tech__dot {
  width: 0.4rem;
  height: 1px;
  background: var(--color-text-mute);
  flex-shrink: 0;
}
</style>
