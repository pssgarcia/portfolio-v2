<script setup>
import { ref } from 'vue'
import SectionHeading from './SectionHeading.vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { targetRef, isVisible } = useIntersectionObserver()

const form = ref({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const submitStatus = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = ''

  try {
    const formData = new URLSearchParams()
    formData.append('form-name', 'contact')
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('message', form.value.message)

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    })

    if (response.ok) {
      submitStatus.value = 'success'
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
    } else {
      submitStatus.value = 'error'
    }
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/pssgarcia',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedro-soares-b996a5263/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:pedrossgarcia88@gmail.com',
    icon: 'email',
  },
]
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <div ref="targetRef" class="transition-all duration-600 ease-out" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto md:items-start">
          <!-- Info side -->
          <div class="flex flex-col gap-8">
            <p class="text-text-secondary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] leading-[1.8]">
              I'm currently looking for new opportunities where I can contribute,
              grow, and deliver real impact. Feel free to reach out!
            </p>
            <div class="flex flex-col gap-4">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-4 text-text-secondary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] font-medium transition-all duration-150 w-fit hover:text-accent-light hover:translate-x-1"
              >
                <!-- GitHub -->
                <svg v-if="link.icon === 'github'" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <!-- LinkedIn -->
                <svg v-if="link.icon === 'linkedin'" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <!-- Email -->
                <svg v-if="link.icon === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ link.label }}</span>
              </a>
            </div>
            <div class="flex items-center gap-2 text-text-muted text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Belo Horizonte, Brazil</span>
            </div>
          </div>

          <!-- Form side -->
          <form
            class="p-12 flex flex-col gap-6 glass-card"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden" style="display:none">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <div class="flex flex-col gap-1">
              <label for="contact-name" class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] font-medium text-text-secondary">Name</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                class="px-4 py-3 bg-surface border border-border-subtle rounded-xl text-text-primary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] transition-colors duration-150 focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-muted)] placeholder:text-text-muted"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label for="contact-email" class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] font-medium text-text-secondary">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                class="px-4 py-3 bg-surface border border-border-subtle rounded-xl text-text-primary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] transition-colors duration-150 focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-muted)] placeholder:text-text-muted"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label for="contact-message" class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] font-medium text-text-secondary">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                required
                rows="5"
                placeholder="Your message..."
                class="px-4 py-3 bg-surface border border-border-subtle rounded-xl text-text-primary text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] transition-colors duration-150 focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-muted)] placeholder:text-text-muted resize-y min-h-[120px]"
              ></textarea>
            </div>

            <button
              id="contact-submit"
              type="submit"
              class="btn btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>

            <p v-if="submitStatus === 'success'" class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] text-center p-2 rounded-lg text-[#4ade80] bg-[rgba(74,222,128,0.1)]">
              Message sent successfully! I'll get back to you soon.
            </p>
            <p v-if="submitStatus === 'error'" class="text-[clamp(0.8125rem,0.75rem+0.3125vw,0.9375rem)] text-center p-2 rounded-lg text-[#f87171] bg-[rgba(248,113,113,0.1)]">
              Something went wrong. Please try emailing me directly.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
