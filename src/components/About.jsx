import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));
    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I am a <strong>B.Tech Information Technology</strong> student with internship 
              experience in Full Stack Web Development and UI/UX Design. I enjoy developing 
              modern web applications, solving real-world problems, and continuously learning 
              new technologies.
            </p>
            <p>
              My goal is to leverage my skills in <span className="highlight">React.js</span>, 
              <span className="highlight">Java</span>, and <span className="highlight">Python</span> to 
              build impactful digital solutions. I'm passionate about clean code, beautiful 
              interfaces, and delivering great user experiences.
            </p>

            <div className="about-info-cards">
              <div className="info-card glass-card">
                <div className="info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div>
                  <h4>B.Tech IT</h4>
                  <p>2022 - 2026</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div>
                  <h4>Intern Experience</h4>
                  <p>Full Stack Dev</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <h4>4+ Projects</h4>
                  <p>Web & AI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual reveal">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="code-filename">about.js</span>
              </div>
              <div className="code-body">
                <pre><code>
{`const naveen = {
  name: "Naveen V V",
  role: "Full Stack Developer",
  education: "B.Tech IT",
  skills: [
    "React.js", "Java",
    "Python", "Node.js",
    "Figma", "Git"
  ],
  passion: "Building the web",
  isHireable: true
};`}
                </code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
