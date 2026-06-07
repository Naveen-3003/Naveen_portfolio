import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#4f8fff',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#8b5cf6',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    title: 'UI/UX',
    icon: '✏️',
    color: '#ec4899',
    skills: [
      { name: 'Figma', level: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: '#22d3ee',
    skills: [
      { name: 'VS Code', level: 90 },
      { name: 'Eclipse', level: 70 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'MS Office', level: 85 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (!animated) setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));
    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, [animated]);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div
              className="skill-category glass-card reveal"
              key={category.title}
              style={{ '--cat-color': category.color, animationDelay: `${idx * 0.1}s` }}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{category.icon}</span>
                <h3 className="skill-cat-title">{category.title}</h3>
              </div>

              <div className="skill-bars">
                {category.skills.map((skill, i) => (
                  <div className="skill-bar-item" key={skill.name}>
                    <div className="skill-bar-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: animated ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                          transitionDelay: `${(idx * 0.1) + (i * 0.15)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
