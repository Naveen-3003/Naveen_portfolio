import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">NVV</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-desc">
              Building digital experiences that matter. Passionate about web development and creating impactful solutions.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:naveenvelusamy8566@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Naveen V V. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top" id="btn-back-to-top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
