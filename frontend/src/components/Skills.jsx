import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiFlask, SiSupabase } from 'react-icons/si'

const skills = [
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" />, level: 85 },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" />, level: 85 },
    { name: 'React', icon: <FaReact color="#61DAFB" />, level: 80 },
    { name: 'Python', icon: <FaPython color="#3776AB" />, level: 80 },
    { name: 'Flask', icon: <SiFlask color="#ffffff" />, level: 75 },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" />, level: 70 },
    { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" />, level: 70 },
    { name: 'Git', icon: <FaGitAlt color="#F05032" />, level: 80 },
    { name: 'Figma', icon: <FaFigma color="#F24E1E" />, level: 65 },
]

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-heading" data-physics="true">
                    <h2>Skills & Technologies</h2>
                    <p>Tools and technologies I work with</p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill.name} data-physics="true">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-level">
                                <div
                                    className="skill-level-fill"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
