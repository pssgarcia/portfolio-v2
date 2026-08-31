<script setup>
import { computed, ref } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { useContent } from '@/composables/useContent'
import { useLanguage } from '@/composables/useLanguage'
import TechIcon from './TechIcon.vue'

const { targetRef, isVisible } = useIntersectionObserver()
const { projects } = useContent()
const { t } = useLanguage()

const showAll = ref(false)
const featured = computed(() => projects.value.filter((p) => p.image))
const collapsed = computed(() => projects.value.filter((p) => !p.image))
const visible = computed(() => (showAll.value ? projects.value : featured.value))

const pad = (n) => String(n + 1).padStart(2, '0')
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap">
      <div ref="targetRef" class="reveal" :class="{ 'is-visible': isVisible }">
        <h2 class="h-section">{{ t('projectsHeading') }}</h2>

        <div class="projects">
          <article
            v-for="(project, i) in visible"
            :key="project.title"
            class="proj"
            :class="{ 'proj--wide': project.image }"
          >
            <span class="proj__n">{{ pad(i) }}</span>
            <div class="proj__body">
              <div v-if="project.image" class="proj__shot">
                <img
                  class="proj__shot-img"
                  :src="project.image"
                  :alt="`${project.title} — screenshot da landing`"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="proj__text">
                <h3 class="proj__title">{{ project.title }}</h3>
                <p class="proj__desc">{{ project.description }}</p>
                <div class="proj__stack">
                  <TechIcon v-for="tech in project.techs" :key="tech" :name="tech" />
                </div>
                <span class="proj__links">
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ t('linkGithub') }}</a>
                  <span v-else-if="project.repoPrivate" class="proj__links-muted">{{ t('linkPrivate') }}</span>
                  <a
                    v-if="project.demo"
                    class="proj__links-live"
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ t('linkDemo') }}</a>
                </span>
              </div>
            </div>
          </article>
        </div>

        <button
          v-if="collapsed.length"
          type="button"
          class="projects__more"
          :class="{ 'is-open': showAll }"
          :aria-expanded="showAll"
          @click="showAll = !showAll"
        >
          {{ showAll ? t('projectsLess') : t('projectsMore') }}
        </button>
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
.proj--wide {
  grid-column: 1 / -1;
  padding: 2rem 0.4rem;
}

.proj__n {
  font-family: var(--font-mono);
  font-size: var(--t-label);
  color: var(--color-accent);
  padding-top: 0.3rem;
}

.proj__body {
  min-width: 0;
}

.proj__shot {
  padding: 0.45rem;
  background: var(--color-surface);
  border: 1px solid var(--color-rule-bold);
  max-width: 46rem;
  margin-bottom: 1.4rem;
}
.proj__shot-img {
  display: block;
  width: 100%;
  aspect-ratio: 2.17;
  object-fit: cover;
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
  margin: 0 0 0.7rem;
  max-width: 46ch;
}

.proj__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-bottom: 0.75rem;
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
.proj__links-muted {
  color: var(--color-text-mute);
}

.projects__more {
  display: block;
  width: 100%;
  margin: -1px 0 0;
  padding: 1.5rem 0.4rem;
  border: 0;
  border-top: 1px solid var(--color-rule);
  background: transparent;
  font-family: var(--font-mono);
  font-size: var(--t-label);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-mute);
  text-align: left;
  cursor: pointer;
  transition: color 0.15s ease;
}
.projects__more::before {
  content: '+ ';
  color: var(--color-accent);
}
.projects__more.is-open::before {
  content: '\2013\00a0';
}
.projects__more:hover {
  color: var(--color-accent);
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
