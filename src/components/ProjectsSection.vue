<script setup>
import SectionHeading from './SectionHeading.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/data/projects'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { targetRef, isVisible } = useIntersectionObserver()
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div ref="targetRef" class="transition-all duration-600 ease-out" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'">
        <SectionHeading title="Projects" subtitle="Some things I've built" />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :techs="project.techs"
            :github="project.github"
            :demo="project.demo"
            :style="{ transitionDelay: `${index * 100}ms` }"
            class="transition-all duration-500 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'"
          />
        </div>
      </div>
    </div>
  </section>
</template>
