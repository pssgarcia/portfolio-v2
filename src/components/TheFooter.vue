<script setup>
import { profile } from '@/data/profile'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer__inner">
      <p class="footer__links metaline">
        <span v-for="c in profile.contact.channels" :key="c.href">
          <a class="link" :href="c.href" target="_blank" rel="noopener noreferrer">{{ c.label }}</a>
        </span>
      </p>
      <p class="footer__copy">&copy; {{ currentYear }} Pedro Soares</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-rule);
  padding: 2.5rem 0 3.5rem;
}
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem 2rem;
}
.footer__copy {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-mute);
  margin: 0;
}
</style>
