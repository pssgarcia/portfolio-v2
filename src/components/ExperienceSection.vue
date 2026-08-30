<script setup>
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionMark from './SectionMark.vue'
import { experience } from '@/data/experience'

const { targetRef, isVisible } = useIntersectionObserver()
</script>

<template>
  <section id="experience" class="section section--star">
    <div class="wrap">
      <div ref="targetRef" class="reveal" :class="{ 'is-visible': isVisible }">
        <SectionMark index="02" label="Experience" />
        <h2 class="h-section">Experience</h2>
        <p class="subhead">Three roles at Construsite Brasil · since Aug 2024</p>

        <div class="ledger">
          <article v-for="job in experience" :key="job.title + job.dateFrom" class="job">
            <p class="job__when">
              {{ job.dateFrom }}<template v-if="job.dateTo"> &mdash; {{ job.dateTo }}</template>
            </p>
            <div>
              <h3 class="job__title">{{ job.title }}</h3>
              <p class="job__org">
                {{ job.org }}<span v-if="job.type === 'education'"> · Education</span>
              </p>
              <ul class="job__points">
                <li v-for="point in job.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ledger { max-width: 62rem; }

.job {
  display: grid;
  grid-template-columns: 8.5rem 1fr;
  gap: 0 2rem;
  padding: 1.9rem 0;
}
.job + .job {
  border-top: 1px solid var(--color-rule);
}

.job__when {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-mute);
  margin: 0;
  padding-top: 0.55rem;
  line-height: 1.65;
}

.job__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--t-role);
  letter-spacing: -0.015em;
  line-height: 1.15;
  margin: 0;
}

.job__org {
  color: var(--color-text-soft);
  font-size: 0.98rem;
  margin: 0.25rem 0 0;
}

.job__points {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
  max-width: 60ch;
}
.job__points li {
  position: relative;
  padding-left: 1.4rem;
  margin: 0.4rem 0;
  font-size: 1rem;
  color: var(--color-text-soft);
}
.job__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.66em;
  width: 0.55rem;
  height: 1px;
  background: var(--color-accent);
}

@media (max-width: 720px) {
  .job {
    grid-template-columns: 1fr;
    gap: 0.4rem 0;
  }
  .job__when {
    padding-top: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
