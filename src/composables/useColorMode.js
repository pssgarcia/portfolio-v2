import { ref } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const isDark = ref(localStorage.getItem(STORAGE_KEY) !== 'light')

function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.setAttribute('data-theme', 'light')
  }
  localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
}

applyTheme(isDark.value)

export function useColorMode() {
  function toggle() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  return { isDark, toggle }
}
