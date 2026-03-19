import { FiDownload } from 'react-icons/fi';

export default function Resume() {
  return (
    <section className="chapter resume">
      <div className="container">
        <span className="chapter__label">Chapter 8</span>
        <h2 className="chapter__title">The Scroll of Knowledge</h2>
        <p className="chapter__subtitle">(Resume)</p>


        <div className="resume__preview gs-hidden-scale">
          <div className="resume__icon">📄</div>
          <p className="resume__text">Download My Resume</p>
          <p className="resume__filename">rounak_resume.pdf</p>
        </div>

        <a
          href="/rounak_resume.pdf"
          download
          className="resume__download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDownload /> Download Resume
        </a>
      </div>
    </section>
  );
}
