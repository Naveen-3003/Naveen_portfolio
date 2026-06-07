import { useEffect, useRef } from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'B.Tech Information Technology',
    school: 'Indra Ganesan College of Engineering',
    year: '2022 - 2026',
    grade: 'CGPA: 7.25',
    icon: '🎓',
    color: '#4f8fff',
  },
  {
    degree: 'HSC (Higher Secondary)',
    school: 'Raj Matriculation Higher Secondary School',
    year: '2022',
    grade: '65%',
    icon: '📚',
    color: '#8b5cf6',
  },
  {
    degree: 'SSLC (Secondary)',
    school: 'Raj Matriculation Higher Secondary School',
    year: '2020',
    grade: '58%',
    icon: '📖',
    color: '#ec4899',
  },
];

const certifications = [
  { title: 'Full Stack Web Development Internship Certificate', icon: '🏆' },
  { title: 'UI/UX Design using Figma', icon: '🎨' },
];

const achievements = [
  { title: 'Presented a project in a college-level hackathon.', icon: '💡' },
  { title: 'Participated in a technical conference at Indra Ganesan College of Engineering.', icon: '🎤' },
];

export default function Education() {
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
    <section className="education-section" id="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Background</span>
          <h2 className="section-title">Education & Achievements</h2>
        </div>

        {/* Education Timeline */}
        <div className="edu-timeline reveal">
          {educationData.map((edu, idx) => (
            <div className="edu-card glass-card" key={idx} style={{ '--edu-color': edu.color }}>
              <div className="edu-icon-box" style={{ background: `${edu.color}15` }}>
                <span>{edu.icon}</span>
              </div>
              <div className="edu-info">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
                <div className="edu-meta">
                  <span className="edu-year">{edu.year}</span>
                  <span className="edu-grade" style={{ color: edu.color }}>{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="edu-extras reveal">
          <div className="extras-group glass-card">
            <h3 className="extras-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              Certifications
            </h3>
            {certifications.map((cert, idx) => (
              <div className="extras-item" key={idx}>
                <span className="extras-icon">{cert.icon}</span>
                <span>{cert.title}</span>
              </div>
            ))}
          </div>

          <div className="extras-group glass-card">
            <h3 className="extras-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Achievements
            </h3>
            {achievements.map((ach, idx) => (
              <div className="extras-item" key={idx}>
                <span className="extras-icon">{ach.icon}</span>
                <span>{ach.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
