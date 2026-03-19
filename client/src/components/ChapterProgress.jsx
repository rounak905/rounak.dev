import { useEffect, useState } from 'react';

const chapters = [
  { id: 'hero', label: 'Prologue' },
  { id: 'about', label: 'Ch 1: Origin' },
  { id: 'skills', label: 'Ch 2: Arsenal' },
  { id: 'education', label: 'Ch 3: Foundation' },
  { id: 'projects', label: 'Ch 4: Quests' },
  { id: 'certificates', label: 'Ch 5: Credentials' },
  { id: 'achievements', label: 'Ch 6: Victories' },
  { id: 'extracurricular', label: 'Ch 7: Beyond' },
  { id: 'resume', label: 'Ch 8: Scroll' },
  { id: 'contact', label: 'Epilogue' },
];

export default function ChapterProgress() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="chapter-progress">
      {chapters.map((ch) => (
        <button
          key={ch.id}
          className={`chapter-progress__dot ${active === ch.id ? 'active' : ''}`}
          data-label={ch.label}
          onClick={() => scrollTo(ch.id)}
          aria-label={ch.label}
        />
      ))}
    </div>
  );
}
