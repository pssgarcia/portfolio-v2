<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useColorMode } from '@/composables/useColorMode'

const { isDark, toggle: toggleTheme } = useColorMode()

// Kept in DOM order — navbar, sections, and scroll-spy all agree.
const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const { activeSection } = useActiveSection(['about', 'experience', 'projects', 'contact'])

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 24
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
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="nav" :class="{ 'is-scrolled': isScrolled, 'is-open': isMenuOpen }">
    <div class="wrap nav__inner">
      <a href="#hero" class="nav__mark" @click.prevent="goTo('hero')">
        Pedro&nbsp;Soares
      </a>

      <ul class="nav__links">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            :class="{ 'is-active': activeSection === link.id }"
            @click.prevent="goTo(link.id)"
          >{{ link.label }}</a>
        </li>
      </ul>

      <button
        class="nav__theme"
        type="button"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
      >
        Theme <span aria-hidden="true">·</span> {{ isDark ? 'Dark' : 'Light' }}
      </button>

      <button
        class="nav__burger"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span></span><span></span>
      </button>
    </div>

    <Transition name="menu">
      <div v-if="isMenuOpen" class="nav__overlay" @click.self="closeMenu">
        <ul>
          <li v-for="link in navLinks" :key="link.id">
            <a :href="`#${link.id}`" @click.prevent="goTo(link.id)">{{ link.label }}</a>
          </li>
        </ul>
        <button class="nav__overlay-theme" type="button" @click="toggleTheme">
          Theme <span aria-hidden="true">·</span> {{ isDark ? 'Dark' : 'Light' }}
        </button>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  height: var(--nav-height);
  background: transparent;
  transition: background-color 0.25s ease, border-color 0.25s ease;
  border-bottom: 1px solid transparent;
}
.nav.is-scrolled {
  background: var(--color-bg-blur);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-bottom-color: var(--color-rule);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__mark {
  font-family: var(--font-mono);
  font-size: var(--t-label);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text);
  text-decoration: none;
  margin-right: auto;
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
  color: var(--color-text-mute);
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

.nav__theme {
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-mute);
  background: transparent;
  border: 1px solid var(--color-rule-bold);
  padding: 0.35rem 0.7rem;
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav__theme:hover {
  color: var(--color-text);
  border-color: var(--color-accent);
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
  align-items: center;
  justify-content: center;
}
.nav__overlay {
  flex-direction: column;
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
.nav__overlay-theme {
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-mute);
  background: transparent;
  border: 1px solid var(--color-rule-bold);
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.menu-enter-active,
.menu-leave-active { transition: opacity 0.2s ease; }
.menu-enter-from,
.menu-leave-to { opacity: 0; }

@media (max-width: 720px) {
  .nav__links,
  .nav__theme { display: none; }
  .nav__burger { display: flex; }
}
</style>
