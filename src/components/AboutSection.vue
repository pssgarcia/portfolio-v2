<script setup>
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionMark from './SectionMark.vue'
import { profile } from '@/data/profile'
import { skillGroups } from '@/data/skills'

const { targetRef, isVisible } = useIntersectionObserver()
</script>

<template>
  <section id="about" class="section">
    <div class="wrap">
      <div ref="targetRef" class="reveal" :class="{ 'is-visible': isVisible }">
        <SectionMark index="01" label="About" />
        <h2 class="h-section">Where the work comes from</h2>

        <div class="prose">
          <p class="lead">{{ profile.about.lead }}</p>
          <p v-for="p in profile.about.paragraphs" :key="p">{{ p }}</p>
          <p class="about__aside">{{ profile.about.aside }}</p>
        </div>

        <p class="subhead about__stack-mark">What I work with</p>
        <dl class="stack">
          <div v-for="group in skillGroups" :key="group.label" class="stack__row">
            <dt>{{ group.label }}</dt>
            <dd>{{ group.items.join(' · ') }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__aside { color: var(--color-text-soft); }

.about__stack-mark {
  margin: 2.75rem 0 1.25rem;
}

.stack {
  margin: 0;
  max-width: 46rem;
}
.stack__row {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1.1rem;
  padding: 0.85rem 0;
  align-items: baseline;
}
.stack__row + .stack__row {
  border-top: 1px solid var(--color-rule);
}
.stack dt {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--color-text-mute);
}
.stack dd {
  margin: 0;
  font-size: 1.05rem;
}

@media (max-width: 720px) {
  .stack__row {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
}
</style>
