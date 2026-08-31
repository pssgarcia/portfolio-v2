<script setup>
import { ref, onMounted } from 'vue'
import { useContent } from '@/composables/useContent'

const { profile } = useContent()
const codeRef = ref(null)

// Faint service-architecture graph behind the hero: decorative, inert to pointers.
const nodes = [
  { x: 90, y: 210, label: 'client' },
  { x: 300, y: 150, label: 'api' },
  { x: 300, y: 340, label: 'auth' },
  { x: 520, y: 250, label: 'router' },
  { x: 520, y: 440, label: 'oauth' },
  { x: 740, y: 150, label: 'tenant' },
  { x: 740, y: 340, label: 'queue' },
  { x: 740, y: 540, label: 'observer' },
  { x: 960, y: 250, label: 'worker' },
  { x: 960, y: 450, label: 'webhook' },
  { x: 960, y: 640, label: 'cron' },
  { x: 1180, y: 160, label: 'openai' },
  { x: 1180, y: 350, label: 'db' },
  { x: 1180, y: 540, label: 'cache' },
  { x: 1340, y: 430, label: 's3' },
]
const edges = [
  [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [3, 6], [4, 6], [4, 7],
  [5, 8], [6, 8], [6, 9], [7, 9], [7, 10], [8, 11], [8, 12], [9, 12],
  [9, 13], [10, 13], [11, 12], [12, 14], [13, 14],
]
const edgePath = ([a, b]) => {
  const p = nodes[a]
  const q = nodes[b]
  const mx = (p.x + q.x) / 2
  return `M${p.x} ${p.y}H${mx}V${q.y}H${q.x}`
}

// The first two code lines are just there; the last one (build(focus, ...)) types
// itself out at a human pace, with the caret advancing char by char, then blinks.
const CHAR_MS = 75 // matches the hero typewriter on perssua.com

onMounted(async () => {
  const box = codeRef.value
  if (!box) return

  const lines = [...box.querySelectorAll('.hero__ln')]
  const line = lines[lines.length - 1]
  const caret = box.querySelector('.hero__caret')
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const compact = matchMedia('(max-width: 720px)').matches

  line.insertAdjacentElement('afterend', caret)

  if (compact) {
    caret.style.display = 'none'
    return
  }

  line.style.width = '0px' // hide only the last line up front

  if (document.fonts && document.fonts.ready) {
    await Promise.race([
      document.fonts.ready,
      new Promise((r) => setTimeout(r, 1200)),
    ])
    if (!codeRef.value) return
  }

  line.style.width = 'auto'
  const full = line.getBoundingClientRect().width
  line.style.width = '0px'

  const n = Math.max(1, line.textContent.trim().length)
  const anim = line.animate(
    [{ width: '0px' }, { width: `${full}px` }],
    { duration: n * CHAR_MS, delay: 420, easing: `steps(${n})`, fill: 'forwards' },
  )
  anim.onfinish = () => {
    line.style.width = 'auto'
    if (!reduce) caret.classList.add('is-idle')
  }
})
</script>

<template>
  <header id="hero" class="hero">
    <svg class="hero__net" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g class="hero__net-g">
        <path
          v-for="(e, i) in edges"
          :key="`e${i}`"
          :d="edgePath(e)"
          class="hero__edge"
        />
        <g v-for="(n, i) in nodes" :key="`n${i}`">
          <circle :cx="n.x" :cy="n.y" r="6" class="hero__net-dot" />
          <text :x="n.x + 16" :y="n.y + 4" font-size="13" class="hero__net-label">{{ n.label }}</text>
        </g>
      </g>
    </svg>

    <div class="wrap hero__inner">
      <p class="hero__role">{{ profile.hero.role }}</p>

      <h1 class="hero__name h-display">{{ profile.name }}</h1>

      <div ref="codeRef" class="hero__code">
        <div class="hero__code-ln">
          <span class="hero__ln"><span class="tok-c">// {{ profile.hero.comment }}</span></span>
        </div>
        <div class="hero__code-ln">
          <span class="hero__ln"><span class="tok-k">const</span> focus = [<template
            v-for="(f, i) in profile.hero.focus"
            :key="f"
          ><span class="tok-s">"{{ f }}"</span><span v-if="i < profile.hero.focus.length - 1">, </span></template>]</span>
        </div>
        <div class="hero__code-ln">
          <span class="hero__ln">build(focus, { impact: <span class="tok-str">"real_world"</span> })</span><span class="hero__caret" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: clamp(32rem, 86vh, 46rem);
  padding: calc(var(--nav-height) + 3.5rem) 0 4rem;
}

/* --- background graph ------------------------------------------------- */
.hero__net {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  /* emerge from behind the text rather than collide with it */
  -webkit-mask-image: linear-gradient(105deg, transparent 8%, #000 52%);
  mask-image: linear-gradient(105deg, transparent 8%, #000 52%);
}
.hero__net-g {
  opacity: 0.34;
  animation: hero-drift 20s ease-in-out infinite alternate;
}
.hero__edge {
  fill: none;
  stroke: var(--color-rule-bold);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}
.hero__net-dot {
  fill: var(--color-bg);
  stroke: var(--color-rule-bold);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}
.hero__net-label {
  fill: var(--color-text-mute);
  font-family: var(--font-mono);
  letter-spacing: 0.08em;
}

/* --- content -------------------------------------------------------- */
.hero__inner {
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero__role {
  font-family: var(--font-mono);
  font-size: var(--t-caption);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin: 0 0 1.5rem;
  animation: hero-rise 0.5s cubic-bezier(0.22, 0.7, 0.2, 1) both;
}

.hero__name {
  font-size: var(--t-h1);
  margin: 0 0 2rem;
  animation: hero-rise 0.55s cubic-bezier(0.22, 0.7, 0.2, 1) 0.1s both;
}

.hero__code {
  font-family: var(--font-mono);
  font-size: var(--t-body);
  line-height: 1.95;
  color: var(--color-text-soft);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  max-width: 100%;
  overflow-x: auto;
}

.hero__code-ln { white-space: nowrap; }

/* each line is typed by animating this wrapper's width down from auto (see script) */
.hero__ln {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: bottom;
}

.tok-c { color: var(--color-text-mute); }
.tok-k { color: var(--color-text-soft); font-weight: 500; }
.tok-s { color: var(--color-accent); }

/* the one highlighted token */
.tok-str {
  color: var(--color-on-accent);
  background: var(--color-accent);
  padding: 0.12em 0.22em;
  margin: 0 -0.22em; /* keep the glyph advance exact for the typewriter */
}

.hero__caret {
  display: inline-block;
  width: 2px;
  height: 1.15em;
  background: var(--color-text);
  vertical-align: -0.22em;
  margin-left: 0.14ch;
}
/* solid while typing; hard on/off blink once the line is done */
.hero__caret.is-idle {
  animation: hero-caret-blink 1.05s step-end infinite;
}

@keyframes hero-caret-blink {
  0%, 50% { opacity: 1; }
  50.001%, 100% { opacity: 0; }
}
@keyframes hero-drift { to { transform: translate(-18px, 12px); } }
@keyframes hero-rise { from { opacity: 0; transform: translateY(12px); } }

@media (max-width: 720px) {
  .hero {
    min-height: clamp(26rem, 78vh, 34rem);
    padding: calc(var(--nav-height) + 2.5rem) 0 3rem;
  }
  .hero__code {
    font-size: var(--t-caption);
    line-height: 1.8;
  }
  .hero__code-ln { white-space: normal; }
  .hero__ln {
    display: block;
    width: auto;
    overflow: visible;
    white-space: normal;
    padding-left: 1.5ch;
    text-indent: -1.5ch;
  }
  .hero__caret { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .hero__net-g,
  .hero__role,
  .hero__name { animation: none; }
  /* The last line still types in, but the caret holds steady afterwards
     instead of blinking. */
}
</style>
