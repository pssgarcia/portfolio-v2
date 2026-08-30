<script setup>
defineProps({
  date: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, default: '' },
  type: { type: String, default: 'work' },
})
</script>

<template>
  <div class="flex gap-8 relative pb-12 group">
    <div class="shrink-0 flex items-start justify-center pt-8 relative z-10">
      <span class="w-[14px] h-[14px] rounded-full border-[3px] bg-bg transition-all duration-250 group-hover:bg-accent group-hover:shadow-glow"
            :class="type === 'education' ? 'border-accent-light' : 'border-accent'"></span>
    </div>
    <div class="flex-1 p-8 transition-all duration-250 glass-card hover:border-accent/25 hover:translate-x-1">
      <span class="text-[clamp(0.75rem,0.7rem+0.25vw,0.875rem)] font-semibold text-accent-light uppercase tracking-[0.08em]">{{ date }}</span>
      <h3 class="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] font-bold mt-2 text-text-heading">{{ title }}</h3>
      <p class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] text-text-secondary mt-1">{{ subtitle }}</p>
      <p v-if="description" class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] text-text-muted leading-relaxed mt-4">{{ description }}</p>
      <span class="inline-block mt-4 text-[clamp(0.75rem,0.7rem+0.25vw,0.875rem)] px-3 py-1 rounded-full font-medium"
            :class="type === 'education' ? 'bg-[#7c3aed]/10 text-[#c4b5fd]' : 'bg-accent-muted text-accent-light'">
        {{ type === 'work' ? '💼 Work' : '🎓 Education' }}
      </span>
    </div>
  </div>
</template>
