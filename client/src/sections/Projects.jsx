import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'AR Based Anatomy Learning Platform',
      description:
        'Medical students often lack interactive tools to learn anatomy effectively. An AR-based learning tool is needed to provide immersive visualization of human anatomy.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      logo: './images/ar-anatomy-logo.png',
      github: 'https://github.com/rounak905/ar-based-anatomy-project',
      live: '#',
    },
    {
      title: 'Carbon Footprint Tracker',
      description:
        'A MERN-based Carbon Footprint Tracker that lets users log daily activities, auto-calculate CO₂ emissions, view progress, unlock achievements, and compare scores on a real-time leaderboard.',
      tags: ['React', 'Next.js', 'MongoDB', 'Node.js'],
      logo: './images/carbon-tracker-logo.png',
      github: 'https://github.com/rounak905/Carbon-Footprint-Tracker',
      live: '#',
    },
    {
      title: 'AI Sales Coach',
      description:
        'An AI-powered sales coach that helps sales professionals improve their sales skills through interactive training and real-time feedback.',
      tags: ['Python', 'HTML', 'CSS3'],
      logo: './images/ai-sales-coach-logo.png',
      github: 'https://github.com/rounak905/AI-Sales-Coach',
      live: 'https://rounak905.github.io/AI-Sales-Coach/',
    },
  ];

  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Chapter 4</span>
        <h2 className="chapter__title">The Quests</h2>
        <p className="chapter__subtitle">(Projects)</p>


        <div className="projects__grid">
          {projects.map((project, index) => (
            <div className="project-card gs-hidden-scale" key={index}>
              <div className="project-card__image">
                {project.logo ? (
                  <img src={project.logo} alt={project.title} className="project-card__logo" />
                ) : (
                  project.emoji
                )}
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="project-card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a
                    href={project.github}
                    className="project-card__link project-card__link--github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    className="project-card__link project-card__link--live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
