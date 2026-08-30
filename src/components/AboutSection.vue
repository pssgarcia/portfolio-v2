<script setup>
import { ref, onMounted } from 'vue'
import SectionHeading from './SectionHeading.vue'
import SkillBadge from './SkillBadge.vue'
import { skills } from '@/data/skills'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { targetRef, isVisible } = useIntersectionObserver()

const skillsContainerRef = ref(null)
const skillsVisible = ref(false)

let skillsObserver = null

onMounted(() => {
  skillsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        skillsVisible.value = true
        skillsObserver.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
  )
  if (skillsContainerRef.value) {
    skillsObserver.observe(skillsContainerRef.value)
  }
})
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div ref="targetRef" class="transition-all duration-600 ease-out" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'">
        <SectionHeading title="About Me" subtitle="A bit about who I am and what I do" />

        <div class="max-w-[700px] mx-auto mb-16">
          <div class="space-y-6">
            <p class="text-text-secondary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] leading-[1.8]">
              My journey began in <span class="text-accent">Vancouver, Canada</span>, where I
              completed an intensive web development program at Tamwood International College —
              working with HTML, CSS, JavaScript, Node.js, React, Vue.js, PHP, and MySQL on
              real-world team projects.
            </p>
            <p class="text-text-secondary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] leading-[1.8]">
              I'm a full-stack developer with a strong focus on backend, based
              in <span class="text-accent">Belo Horizonte, Brazil</span>. I develop scalable
              web applications end-to-end, using JavaScript, Vue, and React on the frontend,
              and PHP (Laravel) with MySQL on the backend.
            </p>
            <p class="text-text-secondary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] leading-[1.8]">
              My work is centered around designing APIs, managing data flow, and building
              systems that are <span class="text-accent">reliable, efficient, and built to scale</span>
              — not just interfaces that look good.
            </p>
            <p class="text-text-secondary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] leading-[1.8]">
              Currently pursuing a Bachelor's degree in Software Engineering at PUC Minas,
              I focus on performance, scalability, and writing clean, maintainable code
              that solves real problems.
            </p>
            <p class="text-text-secondary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] leading-[1.8]">
              Outside of tech, I'm into fitness, music, and fashion. I value consistency,
              challenges, and continuous growth.
            </p>
          </div>
        </div>

        <div class="text-center" ref="skillsContainerRef">
          <h3 class="text-[clamp(1.125rem,1rem+0.625vw,1.25rem)] font-semibold mb-8 text-text-heading">Technologies I work with</h3>
          <div class="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[750px] mx-auto stagger-children">
            <SkillBadge
              v-for="skill in skills"
              :key="skill.name"
              :name="skill.name"
              :icon="skill.icon"
              class="transition-all duration-500 ease-out"
              :class="skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
