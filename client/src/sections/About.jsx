export default function About() {
  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Chapter 1</span>
        <h2 className="chapter__title">The Origin</h2>
        <p className="chapter__subtitle">(Introduction)</p>
        <p className="chapter__intro">
          Every journey begins with a single step — mine began with curiosity,
          a keyboard, and an insatiable desire to create...
        </p>

        <div className="about__grid">
          <div className="about__image-wrapper gs-hidden-left">
            <div className="about__image-glow"></div>
            <img className="about__image" src={`${import.meta.env.BASE_URL}images/profile.png`} alt="Rounak Kumar" />
          </div>

          <div className="about__text gs-hidden-right">
            <h3>Who Am I?</h3>
            <p>
              I'm a B.Tech Computer Science student with a deep passion for web
              development and creating meaningful digital solutions. My journey
              in tech started with curiosity and has evolved into a relentless
              pursuit of building products that make a difference.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              participating in hackathons, or contributing to open-source
              projects. I believe in the power of technology to transform ideas
              into reality.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number">10+</div>
                <div className="about__stat-label">Projects</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">5+</div>
                <div className="about__stat-label">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
