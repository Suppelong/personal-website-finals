import profileImg from '../assets/Beejay.jpg'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-heading">
                    <h2>About Me</h2>
                    <p>Get to know the person behind the code</p>
                </div>

                <div className="about-grid">
                    <div className="about-image-wrapper" data-physics="true">
                        <div className="about-image">
                            <img src={profileImg} alt="Beejay" className="profile-img" />
                        </div>
                        <div className="about-image-badge">Full-Stack Dev</div>
                    </div>

                    <div className="about-text" data-physics="true">
                        <h3>Building the web, one pixel at a time</h3>
                        <p>
                            I&apos;m Beejay, a full-stack web developer with a passion for
                            creating beautiful, functional, and user-friendly applications.
                            I specialize in modern JavaScript frameworks and love bringing
                            creative ideas to life through code.
                        </p>
                        <p>
                            Whether it&apos;s a sleek portfolio site, a complex web application,
                            or an API backend, I enjoy tackling challenges and continuously
                            learning new technologies to stay at the cutting edge.
                        </p>

                        <div className="about-stats" data-physics="true">
                            <div className="stat-item">
                                <span className="stat-number">3</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Technologies</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">∞</span>
                                <span className="stat-label">Curiosity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
