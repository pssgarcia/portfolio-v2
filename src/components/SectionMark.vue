<script setup>
defineProps({
  index: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <p class="tag"><span class="tag__idx">{{ index }}</span> {{ label }}</p>
</template>
