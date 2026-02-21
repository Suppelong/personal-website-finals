<template>
  <section id="hero">
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="container">
      <div class="hero-inner">
        <div id="hero-block">
          <div class="wf-tag">&lt;div#hero-block&gt;</div>
          <div class="hero-tag"><span class="dot"></span>&lt;Available for projects /&gt;</div>
          <h1>Hi, I'm<br /><span class="nm">Beejay</span><span class="ng">.</span></h1>
          <p class="hero-sub">A passionate full-stack developer crafting modern, responsive, and delightful digital experiences. I turn ideas into interactive reality.</p>
          <div class="hero-cta">
            <a href="#projects" class="btn-p">View My Work →</a>
            <a href="#about" class="btn-o">About Me</a>
          </div>
          <div class="hero-socials">
            <a href="https://github.com/Suppelong" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.03-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/beejay-carpio-b01947322" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.57V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="https://www.facebook.com/beejay.carpio" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.87v2.28h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
            </a>
          </div>
          <div class="hero-terminal" aria-hidden="true">
            <p>
              <span class="cmd">$</span> run quantum_sandbox --user=beejay<br />
              <span style="color:var(--grey)">► Initializing portfolio...</span><br />
              <span style="color:var(--g)">✔ All systems nominal.</span><br />
              <span class="cmd">$</span><span class="cursor"></span>
            </p>
          </div>
        </div>
        <div class="hero-photo">
          <div class="hero-photo-wrap">
            <img :src="beejayImg" alt="Beejay profile photo" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import beejayImg from '@/assets/Beejay.jpg'
</script>

<style scoped>
#hero {
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.hero-glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none }
.hero-glow-1 { width:500px;height:500px;background:rgba(255,0,127,.08);top:-100px;left:-150px }
.hero-glow-2 { width:400px;height:400px;background:rgba(0,255,65,.07);bottom:-80px;right:-100px }
.hero-inner {
  position: relative; z-index: 2;
  display: grid; grid-template-columns: 1fr auto;
  gap: 4rem; align-items: center;
}
@media(max-width:820px) {
  .hero-inner { grid-template-columns: 1fr }
  .hero-photo { display: none }
}
#hero-block { position: relative }
.hero-tag {
  display: inline-flex; align-items: center; gap: .5rem;
  font-size: .78rem; color: var(--g); letter-spacing: 2px;
  text-transform: uppercase; margin-bottom: 1.5rem;
  border: 1px solid rgba(0,255,65,.3); padding: .3rem .8rem;
  animation: tagblink 2s infinite;
}
.hero-tag .dot {
  width:7px;height:7px;background:var(--g);border-radius:50%;
  box-shadow:0 0 6px var(--g);animation:blink 1.2s infinite;
}
#hero-block h1 {
  font-family: var(--fh);
  font-size: clamp(2.8rem,7vw,5rem);
  font-weight: 800; line-height: 1.1; margin-bottom: 1rem;
}
.nm { color:var(--m);text-shadow:0 0 20px var(--gm) }
.ng { color:var(--g);text-shadow:0 0 20px var(--gg) }
.hero-sub { font-size:1rem;color:var(--grey);max-width:520px;margin-bottom:2rem }
.hero-cta { display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem }
.hero-socials { display:flex;gap:.8rem;margin-top:.5rem }
.hero-socials a {
  display:inline-flex;align-items:center;justify-content:center;
  width:38px;height:38px;border:1px solid var(--brd);
  color:var(--grey);text-decoration:none;font-size:1.1rem;
  transition:all .25s;border-radius:2px;
}
.hero-socials a:hover { border-color:var(--m);color:var(--m);box-shadow:0 0 12px var(--gm) }
.hero-photo { flex-shrink:0 }
.hero-photo-wrap { width:200px;height:200px;position:relative }
.hero-photo-wrap::before {
  content:'';position:absolute;inset:-3px;
  background:linear-gradient(135deg,var(--m),var(--g));
  border-radius:50%;z-index:0;animation:rot-border 4s linear infinite;
}
.hero-photo-wrap img {
  position:relative;z-index:1;width:100%;height:100%;
  border-radius:50%;object-fit:cover;border:3px solid var(--bg);
}
.hero-terminal {
  margin-top:2rem;background:rgba(22,27,34,.7);
  border:1px solid rgba(0,255,65,.2);border-radius:4px;
  padding:1rem 1.4rem;font-size:.78rem;color:var(--g);
  max-width:460px;position:relative;
}
.hero-terminal::before {
  content:'● ● ●';position:absolute;top:6px;left:10px;
  font-size:.55rem;color:var(--grey);opacity:.5;letter-spacing:4px;
}
.hero-terminal p { padding-top:.6rem }
.cmd { color:var(--m) }
.cursor {
  display:inline-block;width:8px;height:14px;background:var(--g);
  vertical-align:middle;margin-left:3px;animation:blink .9s infinite;
}
</style>
