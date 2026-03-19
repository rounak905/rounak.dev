export default function Achievements() {
  const achievements = [
    {
      icon: '💻',
      title: 'Problem Solving Milestone',
      description:
        'Successfully solved 150+ questions on LeetCode and over 250+ questions across all competitive programming platforms combined.',
      badge: 'Competitive Coder',
    },
    {
      icon: '⭐',
      title: 'HackerRank Java 3-Star',
      description:
        'Achieved a 3-star proficiency rating in Java on HackerRank, demonstrating strong command over data structures and algorithms.',
      badge: 'Java Specialist',
    },
    {
      icon: '🌍',
      title: 'Open Source Contributor',
      description:
        'Active contributor to open-source projects, helping improve community-driven tools and frameworks.',
      badge: 'Open Source',
    },
  ];

  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Chapter 6</span>
        <h2 className="chapter__title">The Victories</h2>
        <p className="chapter__subtitle">(Achievements)</p>


        <div className="achievements__grid">
          {achievements.map((item, index) => (
            <div className="achievement-card gs-hidden" key={index}>
              <div className="achievement-card__icon">{item.icon}</div>
              <div className="achievement-card__content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="achievement-card__badge">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
