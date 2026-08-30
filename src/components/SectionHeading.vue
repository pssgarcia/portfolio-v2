<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="text-center mb-16 md:mb-24">
    <h2 class="text-[clamp(2rem,1.5rem+2.5vw,3rem)] font-extrabold mb-2 text-text-heading">{{ title }}</h2>
    <p v-if="subtitle" class="text-text-secondary text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] max-w-[500px] mx-auto">{{ subtitle }}</p>
    <div class="w-[60px] h-[3px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-6 mx-auto"></div>
  </div>
</template>
