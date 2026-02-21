<template>
  <section id="contact">
    <div class="container">
      <div class="section-heading">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for projects or just to say hi!</p>
      </div>
      <div class="contact-grid">
        <a href="mailto:beejaycarpio052@gmail.com" class="contact-card" id="contact-1">
          <div class="contact-icon">📧</div>
          <div class="contact-info"><small>Email</small><span>beejaycarpio052@gmail.com</span></div>
        </a>
        <a href="https://github.com/Suppelong" target="_blank" rel="noopener" class="contact-card" id="contact-2">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.03-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </div>
          <div class="contact-info"><small>GitHub</small><span>github.com/Suppelong</span></div>
        </a>
        <a href="https://www.linkedin.com/in/beejay-carpio-b01947322" target="_blank" rel="noopener" class="contact-card" id="contact-3">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.57V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
          </div>
          <div class="contact-info"><small>LinkedIn</small><span>beejay-carpio</span></div>
        </a>
        <a href="https://www.facebook.com/beejay.carpio" target="_blank" rel="noopener" class="contact-card" id="contact-4">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.87v2.28h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
          </div>
          <div class="contact-info"><small>Facebook</small><span>beejay.carpio</span></div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:1.2rem;margin-top:2rem;max-width:1000px;margin-left:auto;margin-right:auto;
}
.contact-card {
  display:flex;align-items:center;gap:.9rem;background:var(--cb);
  border:1px solid var(--brd);padding:1.1rem 1.4rem;
  text-decoration:none;color:var(--w);transition:all .25s;
}
.contact-card:hover { border-color:var(--m);box-shadow:0 0 20px rgba(255,0,127,.25);transform:translateY(-3px) }
.contact-icon { font-size:1.4rem;display:flex;align-items:center;justify-content:center;width:36px;height:36px;flex-shrink:0;color:var(--m) }
.contact-info { display:flex;flex-direction:column }
.contact-info small { font-family:var(--fh);font-size:.63rem;color:var(--grey);letter-spacing:1px;text-transform:uppercase }
.contact-info span { font-size:.82rem;color:var(--w);margin-top:1px }
.contact-card:hover .contact-icon { color:var(--g) }
</style>
