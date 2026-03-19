export default function Education() {
  const educationData = [
    {
      year: '2023 – 2027',
      degree: 'B.Tech in Computer Science',
      institution: 'Lovely Professional University, Punjab',
    },
    {
      year: '2022 – 2023',
      degree: 'Intermediate (12th)',
      institution: 'Jindal Vidya Mandir, Karnataka',
    },
    {
      year: '2020-2021',
      degree: 'Matriculation (10th)',
      institution: 'Jindal Vidya Mandir, Karnataka',
    },
  ];

  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Chapter 3</span>
        <h2 className="chapter__title">The Foundation</h2>
        <p className="chapter__subtitle">(Education)</p>


        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline__item gs-hidden" key={index}>
              <div className="timeline__year">{edu.year}</div>
              <div className="timeline__degree">{edu.degree}</div>
              <div className="timeline__institution">{edu.institution}</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
