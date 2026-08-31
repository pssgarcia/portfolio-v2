<script setup>
import { reactive, ref, computed, nextTick } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { useContent } from '@/composables/useContent'
import { useLanguage } from '@/composables/useLanguage'

const { targetRef, isVisible } = useIntersectionObserver()
const { profile } = useContent()
const { t } = useLanguage()

const form = reactive({ name: '', email: '', message: '' })
const touched = reactive({ name: false, email: false, message: false })
const submitAttempted = ref(false)
const isSubmitting = ref(false)
const submitStatus = ref('')

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const errors = computed(() => {
  const e = {}
  const name = form.name.trim()
  const email = form.email.trim()
  const message = form.message.trim()
  if (!name) e.name = t('errNameRequired')
  if (!email) e.email = t('errEmailRequired')
  else if (!EMAIL_RE.test(email)) e.email = t('errEmailInvalid')
  if (!message) e.message = t('errMessageRequired')
  else if (message.length < 10) e.message = t('errMessageShort')
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)

function showError(field) {
  return Boolean(errors.value[field]) && (touched[field] || submitAttempted.value)
}

function touch(field) {
  touched[field] = true
}

async function handleSubmit() {
  submitAttempted.value = true
  if (!isValid.value) {
    await nextTick()
    const first = document.querySelector('.contact__form [aria-invalid="true"]')
    first?.focus()
    return
  }

  isSubmitting.value = true
  submitStatus.value = ''
  try {
    const formData = new URLSearchParams()
    formData.append('form-name', 'contact')
    formData.append('name', form.name.trim())
    formData.append('email', form.email.trim())
    formData.append('message', form.message.trim())

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })

    if (response.ok) {
      submitStatus.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
      touched.name = touched.email = touched.message = false
      submitAttempted.value = false
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
        <div class="contact">
          <div class="contact__lead">
            <p class="contact__pull">
              {{ t('contactPullBefore') }}<b>{{ t('contactPullBold') }}</b>{{ t('contactPullAfter') }}
            </p>
            <ul class="contact__channels">
              <li v-for="c in profile.contact.channels" :key="c.href">
                <a
                  class="contact__channel"
                  :href="c.href"
                  :aria-label="c.label"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg v-if="c.icon === 'github'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                  </svg>
                  <svg v-else-if="c.icon === 'linkedin'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  <svg v-else viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <form
            class="contact__form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            novalidate
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p class="contact__honeypot">
              <label>{{ t('formHoneypot') }} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
            </p>

            <div class="field" :class="{ 'field--error': showError('name') }">
              <label for="contact-name">{{ t('fieldName') }}</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                required
                autocomplete="name"
                :aria-invalid="showError('name')"
                :aria-describedby="showError('name') ? 'contact-name-err' : undefined"
                @blur="touch('name')"
              />
              <p v-if="showError('name')" id="contact-name-err" class="field__error" role="alert">
                {{ errors.name }}
              </p>
            </div>

            <div class="field" :class="{ 'field--error': showError('email') }">
              <label for="contact-email">{{ t('fieldEmail') }}</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                required
                autocomplete="email"
                inputmode="email"
                :aria-invalid="showError('email')"
                :aria-describedby="showError('email') ? 'contact-email-err' : undefined"
                @blur="touch('email')"
              />
              <p v-if="showError('email')" id="contact-email-err" class="field__error" role="alert">
                {{ errors.email }}
              </p>
            </div>

            <div class="field" :class="{ 'field--error': showError('message') }">
              <label for="contact-message">{{ t('fieldMessage') }}</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                required
                rows="4"
                :aria-invalid="showError('message')"
                :aria-describedby="showError('message') ? 'contact-message-err' : undefined"
                @blur="touch('message')"
              ></textarea>
              <p v-if="showError('message')" id="contact-message-err" class="field__error" role="alert">
                {{ errors.message }}
              </p>
            </div>

            <button type="submit" class="contact__submit" :disabled="isSubmitting">
              {{ isSubmitting ? t('formSubmitting') : t('formSubmit') }}
            </button>

            <p v-if="submitStatus === 'success'" class="contact__note contact__note--ok" role="status">
              {{ t('formOk') }}
            </p>
            <p v-if="submitStatus === 'error'" class="contact__note contact__note--err" role="alert">
              {{ t('formError') }}
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
  max-width: 22ch;
  text-wrap: balance;
  margin: 0 0 1.75rem;
  color: var(--color-text);
}
.contact__pull b {
  color: var(--color-accent);
  font-weight: 700;
}

.contact__channels {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
}
.contact__channel {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
}
.contact__channel svg {
  width: 1.15rem;
  height: 1.15rem;
}
.contact__channel:hover {
  color: var(--color-on-accent);
  background: var(--color-accent);
  border-color: var(--color-accent);
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
.field--error input,
.field--error textarea {
  border-bottom-color: var(--color-error);
}
.field--error label {
  color: var(--color-error);
}
.field__error {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--t-label-sm);
  letter-spacing: 0.04em;
  color: var(--color-error);
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
