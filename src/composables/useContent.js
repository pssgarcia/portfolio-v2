import { computed } from 'vue'
import { useLanguage } from './useLanguage'
import { profileContent } from '@/data/profile'
import { experienceContent } from '@/data/experience'
import { projectsContent } from '@/data/projects'
import { skillsContent } from '@/data/skills'

/**
 * Editorial content for the active language. Each source file exports
 * { en, pt }; these computed refs track the language toggle.
 */
export function useContent() {
  const { lang } = useLanguage()
  return {
    profile: computed(() => profileContent[lang.value] ?? profileContent.pt),
    experience: computed(() => experienceContent[lang.value] ?? experienceContent.pt),
    projects: computed(() => projectsContent[lang.value] ?? projectsContent.pt),
    skills: computed(() => skillsContent[lang.value] ?? skillsContent.pt),
  }
}
