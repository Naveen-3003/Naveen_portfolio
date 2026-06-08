import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Opportunities
        </div>

        <h1 className="hero-name">
          Hi, I'm <span className="hero-name-accent">Naveen V V</span>
        </h1>

        <div className="hero-role">
          <span className="role-line" />
          <span className="hero-role-text">Full Stack Developer</span>
          <span className="role-divider">•</span>
          <span className="hero-role-text">UI/UX Designer</span>
          <span className="role-line" />
        </div>

        <p className="hero-tagline">
          Passionate about building scalable web applications and creating
          user-friendly digital experiences.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')} id="btn-view-projects">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            View Projects
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')} id="btn-contact-me">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Contact Me
          </button>
          <a className="btn btn-ghost" href="/pdf/resume.pdf" download id="btn-download-resume">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download Resume
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Months Intern</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Skills</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
