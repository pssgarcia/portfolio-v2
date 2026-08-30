import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const targetRef = ref(null)
  const isVisible = ref(false)

  let observer = null

  const defaultOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
    ...options,
  }

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // Once visible, stop observing (animate only once)
        if (targetRef.value) {
          observer.unobserve(targetRef.value)
        }
      }
    }, defaultOptions)

    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { targetRef, isVisible }
}
