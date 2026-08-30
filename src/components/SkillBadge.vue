<script setup>
defineProps({
  name: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <span class="badge">
    <span class="badge__icon" aria-hidden="true">{{ icon }}</span>
    <span class="badge__name">{{ name }}</span>
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--color-rule-bold);
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-soft);
  transition: color 0.15s ease, border-color 0.15s ease;
  cursor: default;
}
.badge:hover {
  color: var(--color-text);
  border-color: var(--color-accent);
}
.badge__icon {
  font-size: 1.05em;
  line-height: 1;
}
.badge__name {
  white-space: nowrap;
}
</style>
