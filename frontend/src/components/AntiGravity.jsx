import { useEffect, useRef, useCallback } from 'react'

export default function AntiGravity({ active }) {
    const observerRef = useRef(null)
    const floatingElements = useRef(new Set())
    const animationFrameRef = useRef(null)

    const cleanup = useCallback(() => {
        // Remove floating classes from all elements
        floatingElements.current.forEach((el) => {
            el.classList.remove('zero-gravity-float')
            el.style.removeProperty('--float-delay')
            el.style.removeProperty('--float-duration')
            el.style.removeProperty('--float-x')
            el.style.removeProperty('--float-rotate')
        })
        floatingElements.current.clear()

        // Disconnect observer
        if (observerRef.current) {
            observerRef.current.disconnect()
            observerRef.current = null
        }

        // Cancel animation frame
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = null
        }
    }, [])

    useEffect(() => {
        if (!active) {
            cleanup()
            return
        }

        // Small delay so DOM is stable after scroll-to-top
        const timeout = setTimeout(() => {
            initFloating()
        }, 200)

        return () => {
            clearTimeout(timeout)
            cleanup()
        }
    }, [active, cleanup])

    const applyFloatToElement = (el, index) => {
        if (floatingElements.current.has(el)) return

        // Randomize animation parameters for natural look
        const delay = (index * 0.15) + (Math.random() * 0.3)
        const duration = 3 + Math.random() * 3
        const translateX = -20 + Math.random() * 40
        const rotate = -8 + Math.random() * 16

        el.style.setProperty('--float-delay', `${delay}s`)
        el.style.setProperty('--float-duration', `${duration}s`)
        el.style.setProperty('--float-x', `${translateX}px`)
        el.style.setProperty('--float-rotate', `${rotate}deg`)
        el.classList.add('zero-gravity-float')
        floatingElements.current.add(el)
    }

    const removeFloatFromElement = (el) => {
        if (!floatingElements.current.has(el)) return
        el.classList.remove('zero-gravity-float')
        el.style.removeProperty('--float-delay')
        el.style.removeProperty('--float-duration')
        el.style.removeProperty('--float-x')
        el.style.removeProperty('--float-rotate')
        floatingElements.current.delete(el)
    }

    const initFloating = () => {
        // Set up IntersectionObserver to detect visible sections
        const sections = document.querySelectorAll('section')

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const physicsEls = entry.target.querySelectorAll('[data-physics="true"]')

                    if (entry.isIntersecting) {
                        // Float elements in visible section
                        physicsEls.forEach((el, i) => {
                            applyFloatToElement(el, i)
                        })
                    } else {
                        // Stop floating for elements leaving viewport
                        physicsEls.forEach((el) => {
                            removeFloatFromElement(el)
                        })
                    }
                })
            },
            {
                threshold: 0.1, // Trigger when 10% of section is visible
                rootMargin: '50px 0px',
            }
        )

        // Observe all sections
        sections.forEach((section) => {
            observerRef.current.observe(section)
        })

        // Also float standalone physics elements (hero etc.) that are already visible
        const allPhysics = document.querySelectorAll('[data-physics="true"]')
        allPhysics.forEach((el, i) => {
            const rect = el.getBoundingClientRect()
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                applyFloatToElement(el, i)
            }
        })
    }

    if (!active) return null

    return (
        <div className="antigravity-overlay-info">
            🚀 Zero Gravity Active — Scroll to see sections float! Click "Restore Gravity" to go back.
        </div>
    )
}
