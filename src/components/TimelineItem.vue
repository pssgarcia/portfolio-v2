<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

defineProps({
  dateFrom: { type: String, required: true },
  dateTo: { type: String, default: '' },
  title: { type: String, required: true },
  org: { type: String, required: true },
  type: { type: String, default: 'work' },
  points: { type: Array, default: () => [] },
})
</script>

<template>
  <article class="tl" :class="`tl--${type}`">
    <span class="tl__node" aria-hidden="true"></span>

    <div class="tl__body">
      <p class="tl__when">
        <span>{{ dateFrom }}</span>
        <span v-if="dateTo">{{ t('timelineTo') }} {{ dateTo }}</span>
      </p>
      <h3 class="tl__title">{{ title }}</h3>
      <p class="tl__org">{{ org }}</p>

      <ul v-if="points.length" class="tl__points">
        <li v-for="point in points" :key="point">{{ point }}</li>
      </ul>

      <span class="tl__chip">
        <span aria-hidden="true">{{ type === 'education' ? '🎓' : '💼' }}</span>
        {{ type === 'education' ? t('chipEducation') : t('chipWork') }}
      </span>
    </div>
  </article>
</template>

<style scoped>
.tl {
  position: relative;
  display: grid;
  grid-template-columns: 1.75rem 1fr;
  gap: 0 1.5rem;
  padding: 1.6rem 0 2.2rem;
}

.tl__node {
  position: relative;
  z-index: 1;
  align-self: start;
  justify-self: center;
  margin-top: 0.55rem;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 2px solid var(--color-accent);
  background: var(--color-bg);
  transition: background 0.2s ease;
}
.tl--education .tl__node {
  background: var(--color-accent);
}
.tl:hover .tl__node {
  background: var(--color-accent);
}

.tl__when {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin: 0 0 0.5rem;
}

.tl__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--t-role);
  letter-spacing: -0.015em;
  line-height: 1.15;
  margin: 0;
}

.tl__org {
  color: var(--color-text-soft);
  font-size: var(--t-caption);
  margin: 0.25rem 0 0;
}

.tl__points {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
  max-width: 58ch;
}
.tl__points li {
  position: relative;
  padding-left: 1.4rem;
  margin: 0.4rem 0;
  font-size: var(--t-body);
  color: var(--color-text-soft);
}
.tl__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.66em;
  width: 0.55rem;
  height: 1px;
  background: var(--color-accent);
}

.tl__chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.1rem;
  padding: 0.3rem 0.65rem;
  border: 1px solid var(--color-rule-bold);
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-mute);
}

@media (max-width: 720px) {
  .tl {
    grid-template-columns: 1.25rem 1fr;
    gap: 0 1rem;
  }
}
</style>
