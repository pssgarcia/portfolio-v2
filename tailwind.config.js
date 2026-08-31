/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1060px',
        '2xl': '1060px',
      },
    },
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Newsreader Variable', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['Spline Sans Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        rule: 'var(--color-rule)',
        'rule-bold': 'var(--color-rule-bold)',
        ink: 'var(--color-text)',
        'ink-soft': 'var(--color-text-soft)',
        'ink-mute': 'var(--color-text-mute)',
        accent: 'var(--color-accent)',
        'on-accent': 'var(--color-on-accent)',
      },
      fontSize: {
        meta: ['0.7rem', { lineHeight: '1.6', letterSpacing: '0.12em' }],
        lead: ['1.25rem', { lineHeight: '1.5' }],
        role: ['1.55rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h2: ['2.05rem', { lineHeight: '1.08', letterSpacing: '-0.018em' }],
      },
      spacing: {
        'nav-height': 'var(--nav-height)',
        measure: 'var(--measure)',
      },
      maxWidth: {
        wrap: 'var(--wrap)',
        measure: 'var(--measure)',
      },
    },
  },
  plugins: [],
}
