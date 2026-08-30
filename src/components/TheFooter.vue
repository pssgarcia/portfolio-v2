<script setup>
const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/pssgarcia' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedro-soares-b996a5263/' },
  { label: 'Email', href: 'mailto:pedrossgarcia88@gmail.com' },
]
</script>

<template>
  <footer class="border-t border-border-subtle py-12 relative">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-12 flex flex-col items-center gap-6">
      <div class="flex gap-8">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] text-text-secondary font-medium transition-colors duration-150 hover:text-accent-light"
        >
          {{ link.label }}
        </a>
      </div>
      <p class="text-[clamp(0.75rem,0.7rem+0.25vw,0.875rem)] text-text-muted">
        © {{ currentYear }} Pedro Soares. Built with
        <span class="text-accent">Vue.js</span>
      </p>
    </div>
  </footer>
</template>
