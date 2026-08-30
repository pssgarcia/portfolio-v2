<script setup>
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionMark from './SectionMark.vue'
import SkillBadge from './SkillBadge.vue'
import { profile } from '@/data/profile'
import { skills } from '@/data/skills'

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
        <div class="about__skills">
          <SkillBadge
            v-for="skill in skills"
            :key="skill.name"
            :name="skill.name"
            :icon="skill.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__aside {
  color: var(--color-text-soft);
}

.about__stack-mark {
  margin: 2.75rem 0 1.5rem;
}

.about__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  max-width: 46rem;
}
</style>
