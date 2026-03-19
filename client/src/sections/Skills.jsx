export default function Skills() {
  const devTools = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'HTML & CSS', icon: '🎨' },
    { name: 'Git & GitHub', icon: '🔀' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'REST APIs', icon: '🔗' },
  ];

  const progLangs = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C++', icon: '⚙️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Bash', icon: '🖥️' },
    { name: 'C', icon: '🔧' },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Team Leadership', icon: '👥' },
    { name: 'Feedback Absorption', icon: '📝' },
    { name: 'Time Management', icon: '⏰' },
    { name: 'Adaptability', icon: '🔄' },
    { name: 'Critical Thinking', icon: '🎯' },
  ];

  // Duplicate items for seamless loop
  const devToolsLoop = [...devTools, ...devTools];
  const progLangsLoop = [...progLangs, ...progLangs];

  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Chapter 2</span>
        <h2 className="chapter__title">The Arsenal</h2>
        <p className="chapter__subtitle">(Skills & Tools)</p>

      </div>

      <div className="marquee-section">
        <div className="container">
          <h3 className="skills__section-heading">⚡ Development Tools & Frameworks</h3>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-track--left">
            {devToolsLoop.map((skill, i) => (
              <div className="marquee-card" key={`dev-${i}`}>
                <span className="marquee-card__icon">{skill.icon}</span>
                <span className="marquee-card__name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container" style={{ marginTop: '40px' }}>
          <h3 className="skills__section-heading">🧠 Programming Languages</h3>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-track--right">
            {progLangsLoop.map((skill, i) => (
              <div className="marquee-card" key={`prog-${i}`}>
                <span className="marquee-card__icon">{skill.icon}</span>
                <span className="marquee-card__name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '60px' }}>
        <h3 className="skills__section-heading" style={{ marginTop: '60px' }}>
          Soft Skills
        </h3>
        <div className="soft-skills__grid">
          {/* Problem Solving */}
          <div className="soft-skill-card">
            <div className="soft-skill-card__icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div className="soft-skill-card__name">Problem Solving</div>
          </div>

          {/* Team Leadership */}
          <div className="soft-skill-card">
            <div className="soft-skill-card__icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="soft-skill-card__name">Team Leadership</div>
          </div>

          {/* Feedback Absorption */}
          <div className="soft-skill-card">
            <div className="soft-skill-card__icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <line x1="9" y1="9" x2="15" y2="9" />
                <line x1="9" y1="13" x2="13" y2="13" />
              </svg>
            </div>
            <div className="soft-skill-card__name">Feedback Absorption</div>
          </div>

          {/* Time Management */}
          <div className="soft-skill-card">
            <div className="soft-skill-card__icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="soft-skill-card__name">Time Management</div>
          </div>

          {/* Adaptability */}
          <div className="soft-skill-card">
            <div className="soft-skill-card__icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
                <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
              </svg>
            </div>
            <div className="soft-skill-card__name">Adaptability</div>
          </div>

          {/* Critical Thinking */}
          <div className="soft-skill-card">
            <div className="soft-skill-card__icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
                <path d="M9 9a3 3 0 0 1 6 0c0 2-3 3-3 3" />
              </svg>
            </div>
            <div className="soft-skill-card__name">Critical Thinking</div>
          </div>
        </div>
      </div>
    </section>
  );
}
