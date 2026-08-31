<script setup>
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { useContent } from '@/composables/useContent'
import { useLanguage } from '@/composables/useLanguage'
import TimelineItem from './TimelineItem.vue'

const { targetRef, isVisible } = useIntersectionObserver()
const { experience } = useContent()
const { t } = useLanguage()
</script>

<template>
  <section id="experience" class="section section--star">
    <div class="wrap">
      <div ref="targetRef" class="reveal" :class="{ 'is-visible': isVisible }">
        <h2 class="h-section">{{ t('experienceHeading') }}</h2>

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
