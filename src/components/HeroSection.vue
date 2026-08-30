<script setup>
import { profile } from '@/data/profile'
</script>

<template>
  <header id="hero" class="hero">
    <div class="wrap">
      <p class="hero__kicker">{{ profile.kicker }}</p>
      <h1 class="hero__name h-display">{{ profile.name }}</h1>
      <p class="hero__stmt">
        I build web applications end to end &mdash; APIs, data flow, and systems
        <em>built to scale</em>.
      </p>
      <p class="metaline metaline--ruled hero__meta">
        <span v-for="item in profile.heroMeta" :key="item">{{ item }}</span>
      </p>
    </div>
  </header>
</template>

<style scoped>
.hero {
  padding: calc(var(--nav-height) + 3rem) 0 3.75rem;
}

.hero__kicker {
  font-family: var(--font-mono);
  font-size: var(--t-label);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin: 0 0 1.6rem;
}

.hero__name {
  font-size: var(--t-h1);
  margin: 0 0 1.6rem;
}

.hero__stmt {
  font-size: var(--t-statement);
  line-height: 1.42;
  max-width: 38ch;
  text-wrap: pretty;
  margin: 0 0 2.6rem;
  color: var(--color-text);
}
.hero__stmt em {
  font-style: italic;
  color: var(--color-accent);
}

.hero__meta {
  margin: 0;
}

@media (max-width: 720px) {
  .hero { padding: calc(var(--nav-height) + 2rem) 0 2.75rem; }
}
</style>
