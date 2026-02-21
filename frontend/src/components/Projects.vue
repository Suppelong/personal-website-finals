<template>
  <section id="projects">
    <div class="container">
      <div class="section-heading">
        <h2>Featured Projects</h2>
        <p>A selection of my recent work</p>
      </div>
      <div class="projects-grid">

        <div class="project-card" id="proj-1">
          <div class="wf-tag">&lt;div#proj-1&gt;</div>
          <img :src="dropstockImg" alt="DropStock" class="project-img" />
          <div class="project-head">
            <span class="project-id">PROJECT_001</span>
            <span class="project-status">DEPLOYED</span>
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span class="project-tag">OutSystems</span>
              <span class="project-tag">Low-Code</span>
              <span class="project-tag">E-Commerce</span>
            </div>
            <h3>DropStock</h3>
            <p>A modern shoe reselling platform for sneaker enthusiasts. Connects buyers and sellers with a sleek interface and community-driven features.</p>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo ↗</a>
              <a href="#" class="project-link">Source Code ↗</a>
            </div>
          </div>
          <div class="project-nodes"><span></span><span></span><span></span></div>
        </div>

        <div class="project-card" id="proj-2">
          <div class="wf-tag">&lt;div#proj-2&gt;</div>
          <img :src="dragonImg" alt="How to Code Your Dragon" class="project-img" />
          <div class="project-head">
            <span class="project-id">PROJECT_002</span>
            <span class="project-status">STABLE</span>
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span class="project-tag">Java</span>
              <span class="project-tag">Game Dev</span>
              <span class="project-tag">OOP</span>
            </div>
            <h3>How to Code Your Dragon</h3>
            <p>A Java-based game inspired by Flappy Bird. Players guide a dragon through obstacles while learning core programming concepts.</p>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo ↗</a>
              <a href="#" class="project-link">Source Code ↗</a>
            </div>
          </div>
          <div class="project-nodes"><span></span><span></span><span></span></div>
        </div>

        <div class="project-card" id="proj-3">
          <div class="wf-tag">&lt;div#proj-3&gt;</div>
          <img :src="borrowitImg" alt="BorrowIT" class="project-img" />
          <div class="project-head">
            <span class="project-id">PROJECT_003</span>
            <span class="project-status">ACTIVE</span>
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span class="project-tag">Java</span>
              <span class="project-tag">Supabase</span>
              <span class="project-tag">Management</span>
            </div>
            <h3>BorrowIT</h3>
            <p>An IT Resource Office Management System that lets students and faculty borrow gadgets without visiting the office.</p>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo ↗</a>
              <a href="#" class="project-link">Source Code ↗</a>
            </div>
          </div>
          <div class="project-nodes"><span></span><span></span><span></span></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import dropstockImg from '@/assets/DropStock.png'
import dragonImg from '@/assets/How to Code your Dragon.png'
import borrowitImg from '@/assets/BorrowIT.png'
</script>

<style scoped>
#projects { background: rgba(22,27,34,.3) }
.projects-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.8rem }
.project-card {
  background:var(--cb);border:1px solid var(--brd);border-radius:2px;
  overflow:hidden;position:relative;transition:transform .3s,box-shadow .3s,border-color .3s;
}
.project-card::before {
  content:'';position:absolute;top:0;left:0;width:3px;height:100%;
  background:linear-gradient(to bottom,var(--m),var(--g));opacity:0;transition:opacity .3s;
}
.project-card:hover::before { opacity:1 }
.project-card:hover { transform:translateY(-6px);border-color:var(--m);box-shadow:0 0 28px rgba(255,0,127,.25) }
.project-img { width:100%;height:160px;object-fit:cover;display:block;border-bottom:1px solid var(--brd);filter:brightness(.85) saturate(.8) }
.project-card:hover .project-img { filter:brightness(1) saturate(1) }
.project-head { display:flex;justify-content:space-between;align-items:center;padding:.8rem 1.2rem 0 }
.project-id { font-family:var(--fh);font-size:.66rem;color:var(--m);letter-spacing:1.5px;text-shadow:0 0 6px var(--gm) }
.project-status { font-size:.63rem;color:var(--g);border:1px solid rgba(0,255,65,.3);padding:1px 6px;letter-spacing:1px }
.project-body { padding:1rem 1.2rem 1.2rem }
.project-tags { display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.7rem }
.project-tag { font-size:.63rem;color:var(--grey);border:1px solid rgba(139,148,158,.3);padding:2px 7px;letter-spacing:.5px;font-family:var(--fh);text-transform:uppercase }
.project-card h3 { font-family:var(--fh);font-size:1.1rem;font-weight:700;color:var(--w);margin-bottom:.5rem;line-height:1.3 }
.project-card p { font-size:.83rem;color:var(--grey);margin-bottom:1.2rem }
.project-links { display:flex;gap:1rem }
.project-link { font-family:var(--fh);font-size:.7rem;color:var(--m);text-decoration:none;transition:color .2s }
.project-link:hover { color:var(--g);text-shadow:0 0 8px var(--gg) }
.project-nodes { position:absolute;bottom:10px;right:14px;display:flex;gap:4px;opacity:.35 }
.project-nodes span { width:5px;height:5px;background:var(--g);border-radius:50%;animation:blink 1.5s infinite }
.project-nodes span:nth-child(2) { animation-delay:.4s }
.project-nodes span:nth-child(3) { animation-delay:.8s }
</style>
