import { useEffect, useRef } from 'react';
import './Experience.css';

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));
    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Work History</span>
          <h2 className="section-title">Internship Experience</h2>
        </div>

        <div className="exp-timeline reveal">
          <div className="exp-line" />

          <div className="exp-card glass-card">
            <div className="exp-dot" />
            <div className="exp-header">
              <div>
                <h3 className="exp-role">Web Developer Intern</h3>
                <p className="exp-company">Eagle-HiTech Softcloud Pvt Ltd</p>
              </div>
              <span className="exp-date">Jan 2026 – Mar 2026</span>
            </div>

            <div className="exp-responsibilities">
              <div className="exp-resp-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Worked on Full Stack Web Development using Java.</span>
              </div>
              <div className="exp-resp-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Developed application features and improved API integration.</span>
              </div>
              <div className="exp-resp-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Built responsive UI components for web applications.</span>
              </div>
              <div className="exp-resp-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Integrated REST APIs and handled backend services.</span>
              </div>
            </div>

            <div className="exp-tech-tags">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">REST APIs</span>
              <span className="tech-tag">HTML/CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Full Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
