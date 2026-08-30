<script setup>
import SectionHeading from './SectionHeading.vue'
import TimelineItem from './TimelineItem.vue'
import { experience } from '@/data/experience'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { targetRef, isVisible } = useIntersectionObserver()
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div ref="targetRef" :class="['experience__wrapper', { 'is-visible': isVisible }]">
        <SectionHeading title="Experience" subtitle="My professional and academic journey" />
        <div class="experience__timeline">
          <div class="experience__line" aria-hidden="true"></div>
          <TimelineItem
            v-for="(item, index) in experience"
            :key="index"
            :date="item.date"
            :title="item.title"
            :subtitle="item.subtitle"
            :description="item.description"
            :type="item.type"
            :style="{ transitionDelay: `${index * 120}ms` }"
            class="experience__item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience__wrapper {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.experience__wrapper.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.experience__timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 7px;
}
.experience__line {
  position: absolute;
  left: 13px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, var(--color-accent) 10%, var(--color-accent) 90%, transparent);
}
.experience__item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.experience__wrapper.is-visible .experience__item {
  opacity: 1;
  transform: translateY(0);
}
</style>
