import { useEffect, useRef } from 'react';

export default function Hero() {
  const taglineRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Typewriter effect
    const phrases = [
      'Crafting Digital Experiences with Passion',
      'Turning Ideas into Elegant Code',
      'Building the Future, One Commit at a Time',
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function type() {
      const current = phrases[phraseIndex];
      if (taglineRef.current) {
        taglineRef.current.textContent = current.substring(0, charIndex);
      }
      if (!isDeleting) {
        charIndex++;
        if (charIndex > current.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      timeout = setTimeout(type, isDeleting ? 40 : 80);
    }
    type();

    // Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#6c63ff' : '#00d4ff';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#6c63ff';
            ctx.globalAlpha = 0.05 * (1 - dist / 150);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      animFrame = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

    function handleScroll(e) {
      e.preventDefault();
      const element = document.getElementById('about');
      if (element) {
        const headerOffset = 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">
          <span className="hero__name-gradient">ROUNAK KUMAR</span>
        </h1>
        <p className="hero__tagline">
          <span ref={taglineRef}></span>
          <span className="cursor"></span>
        </p>
        <a href="#about" onClick={handleScroll} className="hero__cta">
          Begin The Journey ↓
        </a>
      </div>
    </section>
  );
}
