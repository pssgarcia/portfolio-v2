<script setup>
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionMark from './SectionMark.vue'
import { projects } from '@/data/projects'

const { targetRef, isVisible } = useIntersectionObserver()

const demoCount = projects.filter((p) => p.demo).length
const pad = (n) => String(n + 1).padStart(2, '0')
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap">
      <div ref="targetRef" class="reveal" :class="{ 'is-visible': isVisible }">
        <SectionMark index="03" label="Selected work" />
        <h2 class="h-section">Selected work</h2>
        <p class="subhead">
          {{ projects.length }} projects · {{ demoCount }} with live demos
        </p>

        <div class="projects">
          <article v-for="(project, i) in projects" :key="project.title" class="proj">
            <span class="proj__n">{{ pad(i) }}</span>
            <div>
              <h3 class="proj__title">{{ project.title }}</h3>
              <p class="proj__desc">{{ project.description }}</p>
              <span class="proj__stack">{{ project.techs.join(' · ') }}</span>
              <span class="proj__links">
                <a :href="project.github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a
                  v-if="project.demo"
                  class="proj__links-live"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >Live demo</a>
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 3.25rem;
}

.proj {
  display: grid;
  grid-template-columns: 2.25rem 1fr;
  gap: 0 1.1rem;
  padding: 1.5rem 0.4rem;
  border-top: 1px solid var(--color-rule);
}

.proj__n {
  font-family: var(--font-mono);
  font-size: var(--t-label);
  color: var(--color-accent);
  padding-top: 0.3rem;
}

.proj__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--t-title-sm);
  letter-spacing: -0.015em;
  margin: 0 0 0.35rem;
}

.proj__desc {
  font-size: var(--t-caption);
  color: var(--color-text-soft);
  margin: 0 0 0.55rem;
  max-width: 40ch;
}

.proj__stack {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text-mute);
  margin-bottom: 0.6rem;
}

.proj__links {
  display: flex;
  gap: 1.2rem;
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.proj__links a {
  color: var(--color-accent);
  text-decoration: none;
}
.proj__links a:hover {
  text-decoration: underline;
}
.proj__links a.proj__links-live {
  color: var(--color-text);
}

@media (max-width: 900px) {
  .projects {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
@media (max-width: 720px) {
  .proj {
    grid-template-columns: 1.8rem 1fr;
  }
}
</style>
