import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Tracks which section is currently under the nav.
 * Scroll-based and deterministic: the active section is the last one
 * whose top has passed the trigger line (nav height + a small margin).
 * Near the page bottom the final section always wins.
 */
export function useActiveSection(sectionIds) {
  const activeSection = ref(sectionIds[0] || '')
  let ticking = false

  function compute() {
    ticking = false
    const trigger = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 4.25) * 16 + 24
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4

    let current = sectionIds[0] || ''
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= trigger) current = id
    }
    activeSection.value = atBottom ? sectionIds[sectionIds.length - 1] : current
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(compute)
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    compute()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return { activeSection }
}
