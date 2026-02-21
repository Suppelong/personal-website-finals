export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg-grid"></div>
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="hero-content" data-physics="true">
                <div className="hero-badge" data-physics="true">
                    <span className="glow-dot"></span>
                    Available for projects
                </div>

                <h1>
                    Hi, I&apos;m <span className="gradient-text">Beejay</span>
                </h1>

                <p className="hero-subtitle">
                    A passionate full-stack developer crafting modern, responsive, and
                    delightful digital experiences. I turn ideas into interactive reality.
                </p>

                <div className="hero-cta" data-physics="true">
                    <a href="#portfolio" className="btn-primary">
                        View My Work →
                    </a>
                    <a href="#contact" className="btn-outline">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div className="hero-scroll-indicator" data-physics="true">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}
