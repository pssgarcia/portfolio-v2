<script setup>
// Minimal, drawn flags for the language toggle (pt -> Brazil, en -> USA).
// Emoji flags are avoided: they render as letter pairs on Windows and break
// the "drawn icons only" rule.
defineProps({
  code: { type: String, required: true },
})

// 13 US stripes; white ones at the odd indices.
const stripes = Array.from({ length: 13 }, (_, i) => i)
</script>

<template>
  <svg
    v-if="code === 'pt'"
    class="flag"
    viewBox="0 0 20 14"
    aria-hidden="true"
  >
    <rect width="20" height="14" fill="#009c3b" />
    <path d="M10 1.6 18.4 7 10 12.4 1.6 7Z" fill="#ffdf00" />
    <circle cx="10" cy="7" r="3" fill="#002776" />
  </svg>

  <svg
    v-else
    class="flag"
    viewBox="0 0 20 14"
    aria-hidden="true"
  >
    <rect width="20" height="14" fill="#b22234" />
    <rect
      v-for="s in stripes"
      v-show="s % 2 === 1"
      :key="s"
      :y="s * (14 / 13)"
      width="20"
      :height="14 / 13"
      fill="#fff"
    />
    <rect width="8" height="7.54" fill="#3c3b6e" />
  </svg>
</template>

<style scoped>
.flag {
  display: block;
  width: 1.3rem;
  height: auto;
}
</style>
