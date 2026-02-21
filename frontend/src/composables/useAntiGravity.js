/**
 * useAntiGravity.js
 * Matter.js composable for the Quantum Sandbox "System Hack" physics effect.
 * Reads real DOM bounding rects AFTER Vue has rendered, then clones elements
 * into .gravity-proxy divs that are driven by the physics engine.
 */
import { ref } from 'vue'

// Matter.js is loaded via CDN script in index.html — available on window.Matter
const { Engine, Runner, Bodies, Body, World, Events, Mouse, MouseConstraint } = window.Matter

const NAV_H = 60

/** Maps each section id to the CSS selectors of its physics-enabled children */
const SECTION_TARGETS = {
    hero: ['#hero-block'],
    projects: ['#proj-1', '#proj-2', '#proj-3'],
    technologies: [
        '#tech-js', '#tech-ts', '#tech-react', '#tech-html', '#tech-css',
        '#tech-python', '#tech-flask', '#tech-java', '#tech-nodejs',
        '#tech-git', '#tech-supabase', '#tech-mysql'
    ],
    about: ['#about-block'],
    guestbook: ['#gb-form-card'],
    contact: ['#contact-1', '#contact-2', '#contact-3', '#contact-4']
}

/** Returns the section id that is most visible in the viewport */
function getVisibleSection() {
    const sections = document.querySelectorAll('section[id]')
    let best = null, bestArea = 0
    sections.forEach(sec => {
        const r = sec.getBoundingClientRect()
        const visible = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, NAV_H))
        if (visible > bestArea) { bestArea = visible; best = sec.id }
    })
    return best
}

export function useAntiGravity() {
    const isActive = ref(false)
    let engine, runner, proxies = []

    function activate() {
        isActive.value = true
        document.body.classList.add('gravity-on')

        const W = window.innerWidth, H = window.innerHeight - NAV_H
        engine = Engine.create({ gravity: { x: 0, y: 0 } })
        runner = Runner.create()
        Runner.run(runner, engine)

        // Static boundary walls
        const WL = 80
        World.add(engine.world, [
            Bodies.rectangle(W / 2, -WL / 2, W + 200, WL, { isStatic: true }),
            Bodies.rectangle(W / 2, H + WL / 2, W + 200, WL, { isStatic: true }),
            Bodies.rectangle(-WL / 2, H / 2, WL, H + 200, { isStatic: true }),
            Bodies.rectangle(W + WL / 2, H / 2, WL, H + 200, { isStatic: true })
        ])

        // Find visible section and its target elements
        const visibleSec = getVisibleSection()
        const targets = (visibleSec && SECTION_TARGETS[visibleSec]) ? SECTION_TARGETS[visibleSec] : []

        targets.forEach((sel, i) => {
            const el = document.querySelector(sel)
            if (!el) return
            const r = el.getBoundingClientRect()
            // Skip elements fully outside viewport
            if (r.bottom < NAV_H || r.top > window.innerHeight) return

            const cx = r.left + r.width / 2
            const cy = r.top + r.height / 2

            const body = Bodies.rectangle(cx, cy - NAV_H, r.width, r.height, {
                restitution: .55,
                frictionAir: .012,
                friction: .1,
                angle: (Math.random() - .5) * .12,
                label: sel
            })
            Body.setVelocity(body, { x: (Math.random() - .5) * 3.5, y: (Math.random() - .5) * 3.5 })
            Body.setAngularVelocity(body, (Math.random() - .5) * .025)
            World.add(engine.world, body)

            // Clone the element's inner HTML into a fixed proxy div
            const proxy = document.createElement('div')
            proxy.className = 'gravity-proxy'
            proxy.style.cssText = [
                `width:${r.width}px`, `height:${r.height}px`,
                `left:${cx - r.width / 2}px`, `top:${cy - NAV_H - r.height / 2}px`,
                `overflow:hidden`, `padding:${getComputedStyle(el).padding}`,
                `font-family:inherit`
            ].join(';')
            proxy.innerHTML = el.innerHTML

            // Ensure the wireframe tag is present
            if (!proxy.querySelector('.wf-tag')) {
                const t = document.createElement('span')
                t.className = 'wf-tag'
                t.textContent = `<${el.tagName.toLowerCase()}#${el.id || i}>`
                proxy.prepend(t)
            }

            document.body.appendChild(proxy)
            proxies.push({ proxy, body, w: r.width, h: r.height })
        })

        // Mouse drag support
        const mouse = Mouse.create(document.body)
        mouse.offset = { x: 0, y: NAV_H }
        const mc = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: .2, render: { visible: false } }
        })
        World.add(engine.world, mc)

        Events.on(engine, 'afterUpdate', syncProxies)
    }

    function syncProxies() {
        proxies.forEach(({ proxy, body, w, h }) => {
            proxy.style.left = (body.position.x - w / 2) + 'px'
            proxy.style.top = (body.position.y - h / 2) + 'px'
            proxy.style.transform = `rotate(${body.angle}rad)`
            proxy.style.transformOrigin = `${w / 2}px ${h / 2}px`
        })
    }

    function deactivate() {
        isActive.value = false
        if (runner) Runner.stop(runner)
        if (engine) Engine.clear(engine)
        proxies.forEach(({ proxy }) => proxy.remove())
        proxies = []
        document.body.classList.remove('gravity-on')
        engine = runner = null
    }

    function toggleGravity() {
        isActive.value ? deactivate() : activate()
    }

    return { isActive, toggleGravity, deactivate }
}
