<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techs: { type: Array, default: () => [] },
  github: { type: String, default: '' },
  demo: { type: String, default: '' },
})
</script>

<template>
  <article class="p-8 flex flex-col transition-all duration-250 relative overflow-hidden glass-card group hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)]">
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-250 group-hover:opacity-100"></div>
    <div class="flex-1 flex flex-col">
      <div class="flex justify-between items-center mb-8">
        <svg class="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <div class="flex gap-4">
          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted transition-colors duration-150 flex items-center hover:text-accent-light"
            aria-label="View source code on GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            v-if="demo"
            :href="demo"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted transition-colors duration-150 flex items-center hover:text-accent-light"
            aria-label="View live demo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <h3 class="text-[clamp(1.125rem,1rem+0.625vw,1.25rem)] font-bold mb-2 text-text-heading transition-colors duration-150 group-hover:text-accent-light">{{ title }}</h3>
      <p class="text-text-secondary text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] leading-relaxed flex-1 mb-8">{{ description }}</p>

      <div class="flex flex-wrap gap-2 mt-auto">
        <span v-for="tech in techs" :key="tech" class="text-[clamp(0.75rem,0.7rem+0.25vw,0.875rem)] text-accent-light font-medium font-mono before:content-['#'] before:opacity-60">
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>
