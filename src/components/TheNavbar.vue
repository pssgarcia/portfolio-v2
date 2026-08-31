<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useColorMode } from '@/composables/useColorMode'
import { useLanguage } from '@/composables/useLanguage'
import FlagIcon from './FlagIcon.vue'

const { isDark, toggle: toggleTheme } = useColorMode()
const { lang, toggle: toggleLang, t } = useLanguage()

// Kept in DOM order; navbar, sections, and scroll-spy all agree.
const navLinks = [
  { key: 'navAbout', id: 'about' },
  { key: 'navExperience', id: 'experience' },
  { key: 'navProjects', id: 'projects' },
  { key: 'navContact', id: 'contact' },
]

const { activeSection } = useActiveSection(['about', 'experience', 'projects', 'contact'])

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const scrollProgress = ref(0)

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const y = window.scrollY
    isScrolled.value = y > 24
    const max = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
    ticking = false
  })
}

function closeMenu() {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

function goTo(id) {
  closeMenu()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav class="nav" :class="{ 'is-scrolled': isScrolled, 'is-open': isMenuOpen }">
    <div class="wrap nav__inner">
      <a
        href="#hero"
        class="nav__mark"
        :aria-label="t('navHome')"
        @click.prevent="goTo('hero')"
      >P</a>

      <ul class="nav__links">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            :class="{ 'is-active': activeSection === link.id }"
            @click.prevent="goTo(link.id)"
          >{{ t(link.key) }}</a>
        </li>
      </ul>

      <button
        class="nav__lang"
        type="button"
        :aria-label="t('langSwitch')"
        :title="t('langSwitch')"
        @click="toggleLang"
      >
        <FlagIcon :code="lang" />
      </button>

      <button
        class="nav__theme"
        type="button"
        @click="toggleTheme"
        :aria-label="isDark ? t('themeToLight') : t('themeToDark')"
      >
        <svg v-if="isDark" class="nav__theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" />
          <line x1="12" y1="2.5" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="21.5" />
          <line x1="4.4" y1="4.4" x2="6.1" y2="6.1" />
          <line x1="17.9" y1="17.9" x2="19.6" y2="19.6" />
          <line x1="2.5" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="21.5" y2="12" />
          <line x1="4.4" y1="19.6" x2="6.1" y2="17.9" />
          <line x1="17.9" y1="6.1" x2="19.6" y2="4.4" />
        </svg>
        <svg v-else class="nav__theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M20.5 13.2A8 8 0 1 1 10.8 3.5 6.3 6.3 0 0 0 20.5 13.2z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button
        class="nav__burger"
        type="button"
        :aria-expanded="isMenuOpen"
        :aria-label="isMenuOpen ? t('menuClose') : t('menuOpen')"
        @click="toggleMenu"
      >
        <span></span><span></span>
      </button>
    </div>

    <Transition name="menu">
      <div v-if="isMenuOpen" class="nav__overlay" @click.self="closeMenu">
        <ul>
          <li v-for="link in navLinks" :key="link.id">
            <a :href="`#${link.id}`" @click.prevent="goTo(link.id)">{{ t(link.key) }}</a>
          </li>
        </ul>
        <div class="nav__overlay-controls">
          <button
            class="nav__overlay-btn"
            type="button"
            :aria-label="t('langSwitch')"
            :title="t('langSwitch')"
            @click="toggleLang"
          >
            <FlagIcon :code="lang" />
          </button>
          <button
            class="nav__overlay-btn"
            type="button"
            @click="toggleTheme"
            :aria-label="isDark ? t('themeToLight') : t('themeToDark')"
          >
            <svg v-if="isDark" class="nav__theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" />
              <line x1="12" y1="2.5" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="21.5" />
              <line x1="4.4" y1="4.4" x2="6.1" y2="6.1" />
              <line x1="17.9" y1="17.9" x2="19.6" y2="19.6" />
              <line x1="2.5" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="21.5" y2="12" />
              <line x1="4.4" y1="19.6" x2="6.1" y2="17.9" />
              <line x1="17.9" y1="6.1" x2="19.6" y2="4.4" />
            </svg>
            <svg v-else class="nav__theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M20.5 13.2A8 8 0 1 1 10.8 3.5 6.3 6.3 0 0 0 20.5 13.2z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>

    <span
      class="nav__progress"
      :style="{ transform: `scaleX(${scrollProgress})` }"
      role="progressbar"
      aria-hidden="true"
    ></span>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  height: var(--nav-height);
  background: var(--color-bg-blur);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  transition: background-color 0.25s ease, border-color 0.25s ease;
  border-bottom: 1px solid var(--color-rule);
}
.nav.is-scrolled {
  background: var(--color-bg);
  border-bottom-color: var(--color-rule-bold);
}

/* reading-progress bar, seated on the nav's bottom edge */
.nav__progress {
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 2px;
  background: var(--color-accent);
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 0.12s ease-out;
  will-change: transform;
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav__mark {
  font-family: var(--font-mono);
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1;
  color: var(--color-text);
  text-decoration: none;
  margin-right: auto;
  transition: color 0.15s ease;
}
.nav__mark:hover {
  color: var(--color-accent);
}

.nav__links {
  display: flex;
  gap: 1.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav__links a {
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-soft);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav__links a:hover {
  color: var(--color-text);
}
.nav__links a.is-active {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.nav__lang,
.nav__theme {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  color: var(--color-text-mute);
  background: transparent;
  border: 1px solid var(--color-rule-bold);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav__lang {
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.06em;
}
.nav__lang:hover,
.nav__theme:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}
.nav__theme-icon {
  width: 1.05rem;
  height: 1.05rem;
}

.nav__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
}
.nav__burger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--color-text);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.nav.is-open .nav__burger span:first-child { transform: translateY(3.25px) rotate(45deg); }
.nav.is-open .nav__burger span:last-child { transform: translateY(-3.25px) rotate(-45deg); }

.nav__overlay {
  position: fixed;
  inset: 0;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}
.nav__overlay ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  text-align: center;
}
.nav__overlay a {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--t-role);
  color: var(--color-text);
  text-decoration: none;
}
.nav__overlay-controls {
  display: flex;
  gap: 1rem;
}
.nav__overlay-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  color: var(--color-text-mute);
  background: transparent;
  border: 1px solid var(--color-rule-bold);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: var(--t-label);
  letter-spacing: 0.06em;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav__overlay-btn:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}
.nav__overlay-btn .nav__theme-icon {
  width: 1.2rem;
  height: 1.2rem;
}
.nav__overlay-btn :deep(.flag) {
  width: 1.45rem;
}

.menu-enter-active,
.menu-leave-active { transition: opacity 0.2s ease; }
.menu-enter-from,
.menu-leave-to { opacity: 0; }

@media (max-width: 720px) {
  .nav__links,
  .nav__lang,
  .nav__theme { display: none; }
  .nav__burger { display: flex; }
}

@media (prefers-reduced-motion: reduce) {
  .nav__burger span,
  .menu-enter-active,
  .menu-leave-active,
  .nav__progress { transition: none; }
}
</style>
