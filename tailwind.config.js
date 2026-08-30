/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Using standard Tailwind dark mode
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        'surface-elevated': 'var(--color-surface-elevated)',
        'border-custom': 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        'accent-deep': 'var(--color-accent-deep)',
        'accent-glow': 'var(--color-accent-glow)',
        'accent-muted': 'var(--color-accent-muted)',
        'text-primary': 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-heading': 'var(--color-text-heading)',
      },
      spacing: {
        'nav-height': 'var(--nav-height)',
        'section': 'clamp(4rem, 3rem + 5vw, 8rem)',
      },
      boxShadow: {
        'glow': '0 0 20px var(--color-accent-glow)',
        'glow-sm': '0 0 10px var(--shadow-glow-sm-color)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-reverse': 'float-reverse 25s ease-in-out infinite',
        'float-3': 'float 30s ease-in-out infinite',
        'float-4': 'float-reverse 18s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease',
        'fade-in-up': 'fadeInUp 0.6s ease both',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -50px) scale(1.05)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(40px, 40px) scale(1.02)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-40px, 30px) scale(0.95)' },
          '50%': { transform: 'translate(25px, -40px) scale(1.05)' },
          '75%': { transform: 'translate(-30px, -20px) scale(0.98)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
