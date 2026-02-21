/**
 * useCanvasBg.js
 * Animated network graph canvas fixed to the page background.
 */
export function useCanvasBg() {
    function init() {
        const canvas = document.createElement('canvas')
        canvas.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.35'
        document.body.prepend(canvas)
        const ctx = canvas.getContext('2d')
        const nodes = []

        function resize() {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        for (let i = 0; i < 55; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - .5) * .35,
                vy: (Math.random() - .5) * .35,
                r: Math.random() * 1.8 + .6
            })
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            nodes.forEach(n => {
                n.x += n.vx; n.y += n.vy
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1
            })
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
                    const d = Math.sqrt(dx * dx + dy * dy)
                    if (d < 130) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(0,255,65,${1 - d / 130})`
                        ctx.lineWidth = .5
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                    }
                }
            }
            nodes.forEach(n => {
                ctx.beginPath()
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
                ctx.fillStyle = '#00FF41'
                ctx.fill()
            })
            requestAnimationFrame(draw)
        }
        draw()
    }

    return { init }
}
