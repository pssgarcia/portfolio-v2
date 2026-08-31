<script setup>
import { computed, ref } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { useContent } from '@/composables/useContent'
import { useLanguage } from '@/composables/useLanguage'
import TechIcon from './TechIcon.vue'

const { targetRef, isVisible } = useIntersectionObserver()
const { projects } = useContent()
const { t } = useLanguage()

// newest first; the three most recent show by default, the rest behind "show more"
const LEAD = 3
const showAll = ref(false)
const visible = computed(() => (showAll.value ? projects.value : projects.value.slice(0, LEAD)))
const hasMore = computed(() => projects.value.length > LEAD)
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap">
      <div ref="targetRef" class="reveal" :class="{ 'is-visible': isVisible }">
        <h2 class="h-section">{{ t('projectsHeading') }}</h2>

        <div class="timeline">
          <span class="timeline__rail" aria-hidden="true"></span>

          <article v-for="project in visible" :key="project.title" class="ptl">
            <span class="ptl__node" aria-hidden="true"></span>

            <div class="ptl__body">
              <p class="ptl__when">{{ project.year }}</p>
              <h3 class="ptl__title">{{ project.title }}</h3>

              <div v-if="project.image" class="ptl__shot">
                <img
                  class="ptl__shot-img"
                  :src="project.image"
                  :alt="`${project.title} — screenshot`"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p class="ptl__desc">{{ project.description }}</p>

              <div class="ptl__stack">
                <TechIcon v-for="tech in project.techs" :key="tech" :name="tech" />
              </div>

              <span class="ptl__links">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{ t('linkGithub') }}</a>
                <span v-else-if="project.repoPrivate" class="ptl__links-muted">{{ t('linkPrivate') }}</span>
                <a
                  v-if="project.demo"
                  class="ptl__links-live"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{ t('linkDemo') }}</a>
              </span>
            </div>
          </article>
        </div>

        <button
          v-if="hasMore"
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
.timeline {
  position: relative;
  max-width: 62rem;
}

/* the journey line, under the node column (oldest at top, newest at bottom) */
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

.ptl {
  position: relative;
  display: grid;
  grid-template-columns: 1.75rem 1fr;
  gap: 0 1.5rem;
  padding: 1.6rem 0 2.4rem;
}

.ptl__node {
  position: relative;
  z-index: 1;
  align-self: start;
  justify-self: center;
  margin-top: 0.5rem;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 2px solid var(--color-accent);
  background: var(--color-bg);
  transition: background 0.2s ease;
}
.ptl:hover .ptl__node {
  background: var(--color-accent);
}

.ptl__body {
  min-width: 0;
}

.ptl__when {
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.12em;
  color: var(--color-accent);
  margin: 0 0 0.5rem;
}

.ptl__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--t-role);
  letter-spacing: -0.015em;
  line-height: 1.15;
  margin: 0 0 0.9rem;
}

.ptl__shot {
  padding: 0.45rem;
  background: var(--color-surface);
  border: 1px solid var(--color-rule-bold);
  max-width: 44rem;
  margin: 0 0 1.1rem;
}
.ptl__shot-img {
  display: block;
  width: 100%;
  aspect-ratio: 2.17;
  object-fit: cover;
}

.ptl__desc {
  font-size: var(--t-body);
  color: var(--color-text-soft);
  margin: 0 0 0.9rem;
  max-width: 58ch;
}

.ptl__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-bottom: 0.85rem;
}

.ptl__links {
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
  max-width: 44rem;
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.ptl__links a {
  color: var(--color-accent);
  text-decoration: none;
}
.ptl__links a:hover {
  text-decoration: underline;
}
.ptl__links a.ptl__links-live {
  color: var(--color-text);
  margin-left: auto;
}
.ptl__links-muted {
  color: var(--color-text-mute);
}

.projects__more {
  display: block;
  margin: 0.5rem 0 0;
  padding: 0.6rem 0;
  border: 0;
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

@media (max-width: 720px) {
  .timeline__rail {
    left: calc(0.625rem - 0.5px);
  }
  .ptl {
    grid-template-columns: 1.25rem 1fr;
    gap: 0 1rem;
  }
}
</style>
