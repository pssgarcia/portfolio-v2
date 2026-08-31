import { ref } from 'vue'
import { ui } from '@/i18n/ui'

const STORAGE_KEY = 'portfolio-language'
const SUPPORTED = ['pt', 'en']
const HTML_LANG = { pt: 'pt-BR', en: 'en' }
const DOC_TITLE = {
  pt: 'Pedro Soares · Engenheiro de Software',
  en: 'Pedro Soares · Software Engineer',
}

function readInitial() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(stored)) return stored
  } catch {
    /* storage unavailable */
  }
  return 'pt' // PT-BR is the default; the navbar toggle switches and persists
}

const lang = ref(readInitial())

function apply(value) {
  document.documentElement.lang = HTML_LANG[value] ?? value
  document.title = DOC_TITLE[value] ?? document.title
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* storage may be unavailable (private mode); the ref still drives the UI */
  }
}

apply(lang.value)

/**
 * Interpolate {placeholders} in a template string.
 * t('projectsMeta', { count: 7, demos: 4 })
 */
function format(str, vars) {
  if (!vars || typeof str !== 'string') return str
  return str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m))
}

export function useLanguage() {
  function setLang(value) {
    if (!SUPPORTED.includes(value) || value === lang.value) return
    lang.value = value
    apply(value)
  }

  function toggle() {
    setLang(lang.value === 'pt' ? 'en' : 'pt')
  }

  function t(key, vars) {
    const dict = ui[lang.value] ?? ui.pt
    return format(dict[key] ?? ui.pt[key] ?? key, vars)
  }

  return { lang, supported: SUPPORTED, setLang, toggle, t }
}
