<script setup>
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionMark from './SectionMark.vue'
import TimelineItem from './TimelineItem.vue'
import { experience } from '@/data/experience'

const { targetRef, isVisible } = useIntersectionObserver()

const words = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
const construsiteRoles = experience.filter(
  (e) => e.type === 'work' && e.org.startsWith('Construsite'),
).length
const rolesLabel = `${words[construsiteRoles - 1] ?? construsiteRoles} roles at Construsite Brasil · since Aug 2024`
</script>

<template>
  <section id="experience" class="section section--star">
    <div class="wrap">
      <div ref="targetRef" class="reveal" :class="{ 'is-visible': isVisible }">
        <SectionMark index="02" label="Experience" />
        <h2 class="h-section">Experience</h2>
        <p class="subhead">{{ rolesLabel }}</p>

        <div class="timeline">
          <span class="timeline__rail" aria-hidden="true"></span>
          <TimelineItem
            v-for="job in experience"
            :key="job.title + job.dateFrom"
            :date-from="job.dateFrom"
            :date-to="job.dateTo"
            :title="job.title"
            :org="job.org"
            :type="job.type"
            :points="job.points"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 62rem;
}

/* the journey line, under the node column */
.timeline__rail {
  position: absolute;
  top: 0.5rem;
  bottom: 2rem;
  left: calc(0.875rem - 0.5px);
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--color-accent) 6%,
    var(--color-accent) 94%,
    transparent
  );
  opacity: 0.55;
}

@media (max-width: 720px) {
  .timeline__rail {
    left: calc(0.625rem - 0.5px);
  }
}
</style>
