import { useState } from 'react';

export default function Certificates() {
  const [expanded, setExpanded] = useState(null);

  const certificates = [
    {
      title: 'Full Stack Web Dev',
      issuer: 'CipherSchools',
      image: import.meta.env.BASE_URL + 'images/certificates/cert-fullstack.jpg',
    },
    {
      title: 'Computer Communications Specialization',
      issuer: 'Coursera',
      image: import.meta.env.BASE_URL + 'images/certificates/cert-computer-comm.jpg',
    },
    {
      title: 'Packet Switching Networks and Algorithms',
      issuer: 'Coursera',
      image: import.meta.env.BASE_URL + 'images/certificates/cert-packet-switching.jpg',
    },
    {
      title: 'TCP/IP and Advanced Topics',
      issuer: 'Coursera',
      image: import.meta.env.BASE_URL + 'images/certificates/cert-tcpip.jpg',
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      image: import.meta.env.BASE_URL + 'images/certificates/cert-networking.jpg',
    },
    {
      title: 'Introduction to Hardware and Operating Systems',
      issuer: 'IBM',
      image: import.meta.env.BASE_URL + 'images/certificates/cert-hardware-os.jpg',
    },
  ];

  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Chapter 5</span>
        <h2 className="chapter__title">The Credentials</h2>
        <p className="chapter__subtitle">(Certifications)</p>


        <div className="certificates__grid">
          {certificates.map((cert, index) => (
            <div
              className="certificate-card"
              key={index}
              onClick={() => setExpanded(index)}
            >
              <div className="certificate-card__image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-card__body">
                <h4 className="certificate-card__title">{cert.title}</h4>
                <p className="certificate-card__issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {expanded !== null && (
        <div className="cert-lightbox" onClick={() => setExpanded(null)}>
          <div
            className="cert-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-lightbox__close"
              onClick={() => setExpanded(null)}
            >
              ✕
            </button>
            <img
              className="cert-lightbox__image"
              src={certificates[expanded].image}
              alt={certificates[expanded].title}
            />
            <div className="cert-lightbox__info">
              <h3>{certificates[expanded].title}</h3>
              <p>Issued by {certificates[expanded].issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
