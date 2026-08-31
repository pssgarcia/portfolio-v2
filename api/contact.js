import { Resend } from 'resend'

// Where contact-form messages land. Already public in src/data/profile.js.
const TO = 'pedrossgarcia88@gmail.com'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const str = (v) => (typeof v === 'string' ? v.trim() : '')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body ?? {}

  // Honeypot: a real visitor never sees the "company" field. Bots fill it.
  // Answer exactly like a success so they get no signal.
  if (str(body.company)) return res.status(200).json({ ok: true })

  const name = str(body.name)
  const email = str(body.email)
  const message = str(body.message)

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return res.status(422).json({ error: 'Invalid form data' })
  }

  const { RESEND_API_KEY, CONTACT_FROM } = process.env
  if (!RESEND_API_KEY || !CONTACT_FROM) {
    console.error('contact: missing RESEND_API_KEY or CONTACT_FROM env var')
    return res.status(500).json({ error: 'Email is not configured' })
  }

  const resend = new Resend(RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: TO,
      replyTo: email,
      subject: `Portfolio contact - ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })

    if (error) {
      console.error('contact: resend error', error)
      return res.status(502).json({ error: 'Could not send message' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact: unexpected error', err)
    return res.status(500).json({ error: 'Could not send message' })
  }
}
