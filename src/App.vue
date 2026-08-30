<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <main class="min-h-screen">
    <router-view />
  </main>
  <TheFooter />
</template>
