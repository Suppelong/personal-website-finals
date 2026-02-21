<template>
  <section id="about">
    <div class="container">
      <div class="section-heading">
        <h2>About Me</h2>
        <p>Get to know the person behind the code</p>
      </div>
      <div class="about-grid">
        <div style="position:relative;flex-shrink:0;">
          <div class="about-photo-wrap">
            <img :src="beejayImg" alt="Beejay" loading="lazy" />
          </div>
          <div class="about-badge">Full-Stack Dev</div>
        </div>
        <div class="about-text" id="about-block">
          <div class="wf-tag">&lt;div#about-block&gt;</div>
          <h3>Building the web, <span>one pixel at a time</span></h3>
          <p>I'm Beejay, a full-stack web developer with a passion for creating beautiful, functional, and user-friendly applications. I specialize in modern JavaScript frameworks and love bringing creative ideas to life through code.</p>
          <p>Whether it's a sleek portfolio site, a complex web application, or an API backend, I enjoy tackling challenges and continuously learning new technologies to stay at the cutting edge.</p>
          <div class="about-socials">
            <a href="https://github.com/Suppelong" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.03-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/beejay-carpio-b01947322" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.57V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="https://www.facebook.com/beejay.carpio" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.87v2.28h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
            </a>
          </div>
          <div class="about-stats">
            <div class="stat-item"><span class="stat-num">3</span><span class="stat-lbl">Projects</span></div>
            <div class="stat-item"><span class="stat-num">10+</span><span class="stat-lbl">Technologies</span></div>
            <div class="stat-item"><span class="stat-num">∞</span><span class="stat-lbl">Curiosity</span></div>
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
.about-grid { display:grid;grid-template-columns:auto 1fr;gap:3rem;align-items:center }
@media(max-width:700px) { .about-grid { grid-template-columns:1fr } }
.about-photo-wrap { width:220px;height:220px;position:relative;flex-shrink:0 }
.about-photo-wrap::before {
  content:'';position:absolute;inset:-3px;
  background:linear-gradient(135deg,var(--m),var(--g));
  border-radius:50%;z-index:0;animation:rot-border 4s linear infinite;
}
.about-photo-wrap img { position:relative;z-index:1;width:100%;height:100%;border-radius:50%;object-fit:cover;border:3px solid var(--bg) }
.about-badge {
  position:absolute;bottom:2px;right:2px;background:var(--bg);
  border:1px solid var(--g);color:var(--g);font-family:var(--fh);
  font-size:.63rem;padding:3px 10px;letter-spacing:1.5px;z-index:2;text-shadow:0 0 6px var(--gg);
}
.about-text { position:relative }
.about-text h3 { font-family:var(--fh);font-size:1.5rem;font-weight:700;color:var(--w);margin-bottom:1rem }
.about-text h3 span { color:var(--g);text-shadow:0 0 8px var(--gg) }
.about-text p { color:var(--grey);margin-bottom:.9rem;font-size:.9rem }
.about-socials { display:flex;gap:.8rem;margin-top:1.5rem }
.about-socials a {
  display:inline-flex;align-items:center;justify-content:center;
  width:42px;height:42px;border:1px solid var(--brd);color:var(--grey);
  text-decoration:none;font-size:1.2rem;transition:all .25s;border-radius:2px;
}
.about-socials a:hover { border-color:var(--m);color:var(--m);box-shadow:0 0 12px var(--gm) }
.about-stats { display:flex;gap:2rem;margin-top:1.8rem;padding-top:1.4rem;border-top:1px solid rgba(139,148,158,.15) }
.stat-num { display:block;font-family:var(--fh);font-size:2rem;font-weight:800;color:var(--m);text-shadow:0 0 12px var(--gm) }
.stat-lbl { font-size:.7rem;color:var(--grey);letter-spacing:1px;text-transform:uppercase }
</style>
