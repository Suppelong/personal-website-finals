import dropStockImg from '../assets/DropStock.png'
import dragonGameImg from '../assets/How to Code your Dragon.png'
import borrowItImg from '../assets/BorrowIT.png'

const projects = [
    {
        title: 'DropStock',
        description:
            'A modern shoe reselling platform designed for sneaker enthusiasts. It connects buyers and sellers with a sleek interface and community-driven features.',
        image: dropStockImg,
        tags: ['OutSystems', 'Low-Code', 'E-commerce'],
        live: '#',
        code: '#',
    },
    {
        title: 'How to Code Your Dragon',
        description:
            'A Java-based game inspired by Flappy Bird. Players guide a dragon through obstacles while learning core programming concepts.',
        image: dragonGameImg,
        tags: ['Java', 'Game Dev', 'OOP'],
        live: '#',
        code: '#',
    },
    {
        title: 'BorrowIT',
        description:
            'An IT Resource Office Management System that helps students and faculty borrow gadgets without visiting the office. Streamlines resource access and scheduling.',
        image: borrowItImg,
        tags: ['Java', 'Supabase', 'Management System'],
        live: '#',
        code: '#',
    },
]

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-heading" data-physics="true">
                    <h2>Featured Projects</h2>
                    <p>A selection of my recent work</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.title} data-physics="true">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-body">
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span className="project-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-links">
                                    <a href={project.live} className="project-link">
                                        Live Demo ↗
                                    </a>
                                    <a href={project.code} className="project-link">
                                        Source Code ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
