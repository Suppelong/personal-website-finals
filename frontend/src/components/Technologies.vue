<template>
  <section id="technologies">
    <div class="container">
      <div class="section-heading">
        <h2>Technologies</h2>
        <p>Languages, frameworks &amp; tools I work with</p>
      </div>
      <div class="tech-grid" id="tech-panel">
        <div v-for="tech in techs" :key="tech.id" class="tech-card" :id="tech.id">
          <div class="wf-tag">&lt;tech:{{ tech.id.replace('tech-', '') }}&gt;</div>
          <img :src="tech.icon" :alt="tech.name" loading="lazy" />
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const techs = [
  { id: 'tech-js',       name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
  { id: 'tech-ts',       name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg` },
  { id: 'tech-react',    name: 'React',       icon: `${CDN}/react/react-original.svg` },
  { id: 'tech-html',     name: 'HTML5',       icon: `${CDN}/html5/html5-original.svg` },
  { id: 'tech-css',      name: 'CSS3',        icon: `${CDN}/css3/css3-original.svg` },
  { id: 'tech-python',   name: 'Python',      icon: `${CDN}/python/python-original.svg` },
  { id: 'tech-flask',    name: 'Flask',       icon: `${CDN}/flask/flask-original.svg` },
  { id: 'tech-java',     name: 'Java',        icon: `${CDN}/java/java-original.svg` },
  { id: 'tech-nodejs',   name: 'Node.js',     icon: `${CDN}/nodejs/nodejs-original.svg` },
  { id: 'tech-git',      name: 'Git',         icon: `${CDN}/git/git-original.svg` },
  { id: 'tech-supabase', name: 'Supabase',    icon: `${CDN}/supabase/supabase-original.svg` },
  { id: 'tech-mysql',    name: 'MySQL',       icon: `${CDN}/mysql/mysql-original.svg` },
]
</script>

<style scoped>
#technologies { border-top: 1px solid var(--brd) }
.tech-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1.4rem }
.tech-card {
  background:var(--cb);border:1px solid var(--brd);border-radius:2px;
  padding:1.4rem .8rem .9rem;display:flex;flex-direction:column;
  align-items:center;gap:.6rem;position:relative;
  transition:transform .25s,border-color .25s,box-shadow .25s;cursor:default;
}
.tech-card::after {
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,var(--m),var(--g));
  transform:scaleX(0);transition:transform .3s;
}
.tech-card:hover::after { transform:scaleX(1) }
.tech-card:hover { transform:translateY(-5px);border-color:var(--m);box-shadow:0 0 18px rgba(255,0,127,.2) }
.tech-card img { width:48px;height:48px;object-fit:contain;filter:drop-shadow(0 0 6px rgba(102,252,241,.25));transition:filter .25s }
.tech-card:hover img { filter:drop-shadow(0 0 10px rgba(0,255,65,.5)) }
.tech-name { font-family:var(--fh);font-size:.63rem;color:var(--grey);letter-spacing:1px;text-transform:uppercase;text-align:center }
.tech-card:hover .tech-name { color:var(--g) }
</style>
