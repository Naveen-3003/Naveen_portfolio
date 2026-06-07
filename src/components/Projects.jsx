import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Built a personal portfolio website using React.js and CSS to showcase projects, skills, and achievements with modern UI design.',
    tech: ['React.js', 'CSS', 'JavaScript'],
    color: '#4f8fff',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
  },
  {
    title: 'UI/UX Mobile App Design',
    description: 'Designed wireframes and interactive prototypes using Figma for mobile and dashboard applications with user-centered design principles.',
    tech: ['Figma', 'UI/UX', 'Prototyping'],
    color: '#ec4899',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
    ),
  },
  {
    title: 'AI Gesture Controlled System',
    description: 'Built a real-time hand gesture recognition system. Mapped gestures to automation commands and implemented hands-free system control.',
    tech: ['Python', 'OpenCV', 'AI'],
    color: '#8b5cf6',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 16"/></svg>
    ),
  },
  {
    title: 'AI CCTV Accident Detection',
    description: 'Detects road accidents automatically using CCTV footage. Uses AI and image processing techniques. Sends alerts when accidents are detected.',
    tech: ['Python', 'OpenCV', 'AI'],
    color: '#22d3ee',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
    ),
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));
    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              className="project-card glass-card reveal"
              key={project.title}
              style={{ '--project-color': project.color }}
            >
              <div className="project-icon-wrapper" style={{ background: `${project.color}15` }}>
                <div className="project-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
              </div>

              <div className="project-number">0{idx + 1}</div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="project-tech-tag" key={t} style={{ borderColor: `${project.color}33`, color: project.color }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-card-glow" style={{ background: project.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
