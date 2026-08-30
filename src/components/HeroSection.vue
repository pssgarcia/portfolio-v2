<script setup>
function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-[var(--nav-height)]">
    <!-- Animated background orbs -->
    <div class="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      <div class="absolute rounded-full blur-[80px] opacity-35 w-[400px] h-[400px] top-[10%] right-[15%] animate-float" style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);"></div>
      <div class="absolute rounded-full blur-[80px] opacity-35 w-[300px] h-[300px] bottom-[20%] left-[10%] animate-float-reverse" style="background: radial-gradient(circle, var(--color-accent-deep) 0%, transparent 70%);"></div>
      <div class="absolute rounded-full blur-[80px] opacity-35 w-[200px] h-[200px] top-[50%] left-[40%] animate-float-3" style="background: radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%);"></div>
      <div class="absolute rounded-full blur-[80px] opacity-35 w-[150px] h-[150px] bottom-[30%] right-[30%] animate-float-4" style="background: radial-gradient(circle, rgba(196, 181, 253, 0.3) 0%, transparent 70%);"></div>
      <div class="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] bg-[size:60px_60px]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);"></div>
    </div>

    <div class="relative z-10 max-w-[720px] container animate-fade-in">
      <p class="text-[clamp(0.875rem,0.8rem+0.375vw,1rem)] text-accent-light font-medium tracking-[0.05em] mb-4 animate-fade-in-up">Hi, my name is</p>
      <h1 class="text-[clamp(2.5rem,1.8rem+3.5vw,4rem)] font-extrabold leading-[1.1] mb-4 animate-fade-in-up [animation-delay:100ms] text-text-heading">Pedro Soares<span class="text-accent">.</span></h1>
      <h2 class="text-[clamp(1.5rem,1.2rem+1.5vw,2rem)] font-bold text-text-secondary mb-6 animate-fade-in-up [animation-delay:200ms]">Full-Stack Developer</h2>
      <p class="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-text-secondary leading-[1.7] max-w-[520px] mb-12 animate-fade-in-up [animation-delay:300ms]">
        I build scalable web applications end-to-end, with a strong focus on <span class="text-accent">backend systems</span>, <span class="text-accent">APIs</span>, and <span class="text-accent">performance</span>.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 flex-wrap animate-fade-in-up [animation-delay:400ms]">
        <button class="btn btn-primary w-full sm:w-auto" @click="scrollTo('#projects')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          View Projects
        </button>
        <button class="btn btn-secondary w-full sm:w-auto" @click="scrollTo('#contact')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Contact Me
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
      <div class="w-[1px] h-[40px] bg-gradient-to-b from-accent to-transparent animate-pulse-slow"></div>
    </div>
  </section>
</template>
