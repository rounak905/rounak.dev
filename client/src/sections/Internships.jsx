export default function Internships() {
  const internships = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Company Name',
      duration: 'Jun 2024 – Aug 2024',
      description:
        'Developed and maintained web applications using the MERN stack. Collaborated with cross-functional teams to deliver features on time. Improved application performance by optimizing database queries.',
      tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Company Name',
      duration: 'Jan 2024 – Mar 2024',
      description:
        'Built responsive user interfaces using React.js. Implemented pixel-perfect designs from Figma mockups. Worked closely with UX designers to enhance user experience.',
      tags: ['React', 'CSS3', 'Figma', 'JavaScript'],
    },
    {
      role: 'Web Development Intern',
      company: 'Company Name',
      duration: 'Jun 2023 – Aug 2023',
      description:
        'Created dynamic web pages and integrated third-party APIs. Gained hands-on experience with version control (Git) and agile development methodologies.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
    },
  ];

  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Chapter 7</span>
        <h2 className="chapter__title">The Expeditions</h2>
        <p className="chapter__subtitle">(Work Experience)</p>
        <p className="chapter__intro">
          "Venturing beyond the classroom into the real world — where theory met
          practice and growth was measured in production deployments..."
        </p>

        {internships.map((internship, index) => (
          <div className="internship-card gs-hidden" key={index}>
            <div className="internship-card__header">
              <div className="internship-card__role">{internship.role}</div>
              <div className="internship-card__duration">
                {internship.duration}
              </div>
            </div>
            <div className="internship-card__company">{internship.company}</div>
            <p className="internship-card__description">
              {internship.description}
            </p>
            <div className="internship-card__tags">
              {internship.tags.map((tag) => (
                <span className="project-card__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
