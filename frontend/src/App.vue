<template>
  <Navbar :is-active="isActive" @toggle-hack="toggleGravity" />
  <div id="page-content">
    <Hero />
    <Projects />
    <Technologies />
    <About />
    <Guestbook />
    <Contact />
    <footer id="footer">
      <span>&lt;</span> Built by <span>Beejay</span> · Quantum Sandbox v3.0 <span>/&gt;</span>
    </footer>
  </div>
  <GravityHud :is-active="isActive" />
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import Navbar      from '@/components/Navbar.vue'
import Hero        from '@/components/Hero.vue'
import Projects    from '@/components/Projects.vue'
import Technologies from '@/components/Technologies.vue'
import About       from '@/components/About.vue'
import Guestbook   from '@/components/Guestbook.vue'
import Contact     from '@/components/Contact.vue'
import GravityHud  from '@/components/GravityHud.vue'

import { useAntiGravity } from '@/composables/useAntiGravity.js'
import { useCanvasBg }    from '@/composables/useCanvasBg.js'

const { isActive, toggleGravity, deactivate } = useAntiGravity()
const { init: initBg } = useCanvasBg()

onMounted(() => {
  initBg()
  window.addEventListener('resize', () => { if (isActive.value) deactivate() })
})

onBeforeUnmount(() => {
  if (isActive.value) deactivate()
})
</script>
