import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

const contactItems = [
    {
        icon: <FaEnvelope />,
        title: 'Email',
        value: 'beejaycarpio052@gmail.com',
        href: 'mailto:beejaycarpio052@gmail.com',
    },
    {
        icon: <FaPhone />,
        title: 'Phone',
        value: '09199025396',
        href: 'tel:09199025396',
    },
    {
        icon: <FaGithub />,
        title: 'GitHub',
        value: 'github.com/Suppelong',
        href: 'https://github.com/Suppelong',
    },
    {
        icon: <FaLinkedin />,
        title: 'LinkedIn',
        value: 'linkedin.com/in/beejay...',
        href: 'https://www.linkedin.com/in/beejay-carpio-b01947322',
    },
    {
        icon: <FaFacebook />,
        title: 'Facebook',
        value: 'facebook.com/beejay.carpio',
        href: 'https://www.facebook.com/beejay.carpio',
    },
    {
        icon: <FaInstagram />,
        title: 'Instagram',
        value: 'instagram.com/bjycrp',
        href: 'https://www.instagram.com/bjycrp/',
    },
]

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-heading" data-physics="true">
                    <h2>Get In Touch</h2>
                    <p>Feel free to reach out for projects or just to say hi!</p>
                </div>

                <div className="contact-grid logos-only">
                    {contactItems.map((item) => (
                        <a
                            href={item.href}
                            className="contact-card logo-card"
                            key={item.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-physics="true"
                            aria-label={item.title}
                        >
                            <div className="contact-icon">{item.icon}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
