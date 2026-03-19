export default function ExtraCurricular() {
  const activities = [
    {
      icon: '🪖',
      title: 'NCC Cadet',
      description:
        'Developed strong discipline, leadership, and teamwork through active participation in National Cadet Corps training programs. Gained experience in time management, responsibility, and working under pressure while contributing to group activities and camps.',
      type: 'Participation',
    },
    {
      icon: '🏆',
      title: 'Hackathon Participant',
      description:
        'Actively participated in hackathons, collaborating with teams to build innovative solutions under time constraints. Gained hands-on experience in problem-solving, rapid prototyping, and teamwork.',
      type: 'Participation',
    },
  ];

  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Chapter 7</span>
        <h2 className="chapter__title">Beyond The Code</h2>
        <p className="chapter__subtitle">(Activities)</p>


        <div className="extra__grid">
          {activities.map((item, index) => (
            <div className="extra-card gs-hidden-scale" key={index}>
              <div className="extra-card__icon">{item.icon}</div>
              <h4 className="extra-card__title">{item.title}</h4>
              <p className="extra-card__description">{item.description}</p>
              <span className="extra-card__type">{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
