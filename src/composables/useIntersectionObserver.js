import { ref, onMounted, onUnmounted } from 'vue'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useIntersectionObserver(options = {}) {
  const targetRef = ref(null)
  // Reduced-motion users skip the reveal entirely.
  const isVisible = ref(prefersReducedMotion)

  let observer = null

  const defaultOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1,
    ...options,
  }

  onMounted(() => {
    if (isVisible.value || !targetRef.value) return

    // Anything already at or above the fold (including after a deep-link jump)
    // is shown straight away — never left stuck at opacity 0.
    const rect = targetRef.value.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.9) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (targetRef.value) observer.unobserve(targetRef.value)
      }
    }, defaultOptions)

    observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { targetRef, isVisible }
}
