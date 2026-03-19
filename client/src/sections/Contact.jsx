import { useState } from 'react';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ type: 'success', message: res.data.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message:
          err.response?.data?.error ||
          'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="chapter">
      <div className="container">
        <span className="chapter__label">Epilogue</span>
        <h2 className="chapter__title">Let's Connect</h2>
        <p className="chapter__subtitle">(Contact)</p>
        <p className="chapter__intro" style={{ color: '#fbbf24', fontWeight: '600', opacity: 1 }}>
          "You know the business, and I know the chemistry."
        </p>

        <div className="contact__grid">
          <div className="contact__info gs-hidden-left">
            <h3>Get In Touch</h3>
            <p>
              I'm currently looking for new opportunities and my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <FiMail />
              </div>
              <div className="contact__detail-text">
                <span>Email</span>
                rounakkumar905@gmail.com
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <FiPhone />
              </div>
              <div className="contact__detail-text">
                <span>Phone</span>
                +91 91139 53884
              </div>
            </div>

            <div className="contact__socials">
              <a
                href="https://www.linkedin.com/in/rounakkumar0/"
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/rounak905"
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <form className="contact__form gs-hidden-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status.message && (
              <div className={`form-status form-status--${status.type}`}>
                {status.message}
              </div>
            )}

            <button className="form-submit" type="submit" disabled={loading}>
              <FiSend /> {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
