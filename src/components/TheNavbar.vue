<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useColorMode } from '@/composables/useColorMode'

const { isDark, toggle: toggleTheme } = useColorMode()

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const { activeSection } = useActiveSection([
  'hero', 'about', 'projects', 'experience', 'contact'
])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

function scrollTo(href) {
  closeMobileMenu()
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    id="main-nav"
    class="fixed top-0 left-0 right-0 z-[1000] h-[var(--nav-height)] transition-all duration-250 bg-transparent"
    :class="{ 'bg-[rgba(10,10,15,0.88)] backdrop-blur-[20px] border-b border-border-subtle shadow-[0_4px_30px_rgba(0,0,0,0.3)]': isScrolled && isDark && !isMobileMenuOpen, 'bg-[rgba(245,243,255,0.88)] backdrop-blur-[20px] border-b border-border-subtle shadow-[0_4px_20px_rgba(109,40,217,0.08)]': isScrolled && !isDark && !isMobileMenuOpen }"
  >
    <div class="h-full container flex items-center justify-between">
      <a
        href="#hero"
        class="flex items-center gap-2 no-underline z-[1001]"
        @click.prevent="scrollTo('#hero')"
      >
        <span class="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-accent to-accent-deep rounded-sm font-extrabold text-[1.1rem] text-white">P</span>
      </a>

      <div class="flex items-center gap-6">
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] font-medium text-text-secondary transition-colors duration-150 relative py-1 hover:text-text-heading after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-250 hover:after:w-full"
              :class="{ 'text-accent-light after:w-full': activeSection === link.href.slice(1) }"
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Theme toggle -->
        <button
          id="theme-toggle"
          class="flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-surface border border-border-subtle text-text-secondary transition-all duration-250 hover:text-accent hover:border-accent hover:bg-accent-muted"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button
          id="mobile-menu-toggle"
          class="flex md:hidden flex-col justify-center gap-[5px] w-7 h-7 bg-transparent border-none cursor-pointer z-[1001] p-0"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span class="block w-full h-[2px] bg-text-primary rounded-full transition-all duration-250 origin-center" :class="{ 'translate-y-[7px] rotate-45': isMobileMenuOpen }"></span>
          <span class="block w-full h-[2px] bg-text-primary rounded-full transition-all duration-250 origin-center" :class="{ 'opacity-0 scale-x-0': isMobileMenuOpen }"></span>
          <span class="block w-full h-[2px] bg-text-primary rounded-full transition-all duration-250 origin-center" :class="{ '-translate-y-[7px] -rotate-45': isMobileMenuOpen }"></span>
        </button>
      </div>
    </div>
  </nav>

  <Transition
    enter-active-class="transition-opacity duration-300 ease"
    leave-active-class="transition-opacity duration-200 ease"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-[rgba(10,10,15,0.95)] backdrop-blur-[30px] flex items-center justify-center z-[990]" @click.self="closeMobileMenu">
      <ul class="flex flex-col items-center gap-12">
        <li v-for="(link, i) in navLinks" :key="link.href" class="animate-fade-in-up" :style="{ transitionDelay: `${i * 60}ms`, animationFillMode: 'both' }">
          <a
            :href="link.href"
            class="text-[clamp(1.5rem,1.2rem+1.5vw,2rem)] font-semibold text-text-secondary transition-colors duration-150 hover:text-accent-light"
            :class="{ 'text-accent-light': activeSection === link.href.slice(1) }"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </Transition>
</template>
