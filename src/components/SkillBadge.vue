<script setup>
defineProps({
  name: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <span class="inline-flex items-center gap-2.5 px-5 py-2.5 bg-surface border border-border-subtle rounded-full text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] font-medium text-text-primary transition-all duration-250 cursor-default hover:border-accent hover:bg-accent-muted hover:-translate-y-0.5 hover:shadow-glow-sm">
    <span class="text-[1.2em] leading-none">{{ icon }}</span>
    <span class="whitespace-nowrap">{{ name }}</span>
  </span>
</template>
