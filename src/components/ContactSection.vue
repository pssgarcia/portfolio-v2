<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionMark from './SectionMark.vue'
import { profile } from '@/data/profile'

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
      body: formData.toString(),
    })

    if (response.ok) {
      submitStatus.value = 'success'
      form.value = { name: '', email: '', message: '' }
    } else {
      submitStatus.value = 'error'
    }
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div class="wrap">
      <div ref="targetRef" class="reveal" :class="{ 'is-visible': isVisible }">
        <SectionMark index="04" label="Contact" />

        <div class="contact">
          <div class="contact__lead">
            <p class="contact__pull">
              Open to talking about <b>systems</b>, back-end work, and interesting problems.
            </p>
            <p class="metaline contact__channels">
              <span v-for="c in profile.contact.channels" :key="c.href">
                <a class="link" :href="c.href" target="_blank" rel="noopener noreferrer">{{ c.label }}</a>
              </span>
            </p>
          </div>

          <form
            class="contact__form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p class="contact__honeypot">
              <label>Don&rsquo;t fill this out: <input name="bot-field" /></label>
            </p>

            <div class="field">
              <label for="contact-name">Name</label>
              <input id="contact-name" v-model="form.name" type="text" name="name" required autocomplete="name" />
            </div>
            <div class="field">
              <label for="contact-email">Email</label>
              <input id="contact-email" v-model="form.email" type="email" name="email" required autocomplete="email" />
            </div>
            <div class="field">
              <label for="contact-message">Message</label>
              <textarea id="contact-message" v-model="form.message" name="message" required rows="4"></textarea>
            </div>

            <button type="submit" class="contact__submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending…' : 'Send message' }}
            </button>

            <p v-if="submitStatus === 'success'" class="contact__note contact__note--ok" role="status">
              Message sent. I&rsquo;ll get back to you soon.
            </p>
            <p v-if="submitStatus === 'error'" class="contact__note contact__note--err" role="alert">
              Something went wrong — please email me directly at pedrossgarcia88@gmail.com.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: start;
  max-width: 60rem;
}

.contact__pull {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--t-pull);
  line-height: 1.24;
  letter-spacing: -0.02em;
  max-width: 16ch;
  margin: 0 0 1.75rem;
  color: var(--color-text);
}
.contact__pull b {
  color: var(--color-accent);
  font-weight: 700;
}

.contact__channels {
  flex-direction: column;
  gap: 0.65rem;
  align-items: flex-start;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact__honeypot {
  position: absolute;
  left: -9999px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.field label {
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-mute);
}
.field input,
.field textarea {
  font-family: var(--font-body);
  font-size: var(--t-body);
  color: var(--color-text);
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--color-rule-bold);
  padding: 0.5rem 0;
  transition: border-color 0.15s ease;
}
.field textarea {
  resize: vertical;
  min-height: 5rem;
}
.field input:focus,
.field textarea:focus {
  outline: none;
  border-bottom-color: var(--color-accent);
}

.contact__submit {
  align-self: flex-start;
  font-family: var(--font-mono);
  font-size: var(--t-label);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-on-accent);
  background: var(--color-accent);
  border: 0;
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.contact__submit:hover {
  opacity: 0.88;
}
.contact__submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.contact__note {
  font-size: var(--t-caption);
  margin: 0;
}
.contact__note--ok { color: var(--color-text-soft); }
.contact__note--err { color: var(--color-error); }

@media (max-width: 720px) {
  .contact {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
