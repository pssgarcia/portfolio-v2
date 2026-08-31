<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
const currentYear = new Date().getFullYear()

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="wrap footer__inner">
      <p class="footer__copy">{{ t('footerLine', { year: currentYear }) }}</p>
      <button class="footer__top" type="button" @click="toTop">{{ t('backToTop') }}</button>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-rule);
  padding: 2.25rem 0 3rem;
}
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem 2rem;
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-mute);
}
.footer__copy {
  margin: 0;
}
.footer__top {
  font: inherit;
  color: var(--color-text-mute);
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  transition: color 0.15s ease;
}
.footer__top:hover {
  color: var(--color-text);
}
</style>
