<template>
  <nav id="navbar">
    <div class="nav-logo">BJ<span>_</span>DEV</div>
    <ul class="nav-links">
      <li><a href="#hero">Init</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#technologies">Technologies</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#guestbook">Guestbook</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button id="hack-btn" :class="{ active: isActive }" @click="$emit('toggle-hack')">
      {{ isActive ? '↩ Restore System' : '⚡ System Hack' }}
    </button>
  </nav>
</template>

<script setup>
defineProps({ isActive: { type: Boolean, default: false } })
defineEmits(['toggle-hack'])
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 60px;
  background: rgba(13,17,23,.93);
  border-bottom: 1px solid var(--brd);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 20px rgba(255,0,127,.15);
}
.nav-logo {
  font-family: var(--fh);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--m);
  text-shadow: 0 0 10px var(--gm);
  letter-spacing: 2px;
}
.nav-logo span { color: var(--g); text-shadow: 0 0 10px var(--gg) }
.nav-links { display: flex; gap: 1.5rem; list-style: none }
.nav-links a {
  font-family: var(--fh);
  font-size: .75rem;
  color: var(--grey);
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color .2s;
}
.nav-links a:hover { color: var(--g); text-shadow: 0 0 8px var(--gg) }
#hack-btn {
  font-family: var(--fh);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--bg);
  background: var(--m);
  border: none;
  padding: .5rem 1.2rem;
  cursor: pointer;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  box-shadow: 0 0 14px var(--gm);
  transition: all .25s;
}
#hack-btn:hover { background: var(--g); box-shadow: 0 0 22px var(--gg) }
#hack-btn.active {
  background: transparent;
  color: var(--m);
  border: 1px dashed var(--m);
  animation: pbtn 1.4s infinite;
}
@media(max-width:768px) {
  #navbar { padding: 0 1rem }
  .nav-links { display: none }
}
</style>
