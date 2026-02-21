export default function Footer() {
    return (
        <footer className="footer">
            <div className="container" style={{ justifyContent: 'center' }}>
                <span className="footer-text">
                    © {new Date().getFullYear()} Beejay. Built with React & Matter.js
                </span>
            </div>
        </footer>
    )
}
