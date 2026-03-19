import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import ChapterProgress from './components/ChapterProgress';
import ChapterDivider from './components/ChapterDivider';
import Footer from './components/Footer';

import Cursor from './components/Cursor';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Achievements from './sections/Achievements';
import ExtraCurricular from './sections/ExtraCurricular';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    // Animate all gs-hidden elements on scroll
    const hiddenEls = document.querySelectorAll('.gs-hidden');
    hiddenEls.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // Animate gs-hidden-left elements
    const leftEls = document.querySelectorAll('.gs-hidden-left');
    leftEls.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // Animate gs-hidden-right elements
    const rightEls = document.querySelectorAll('.gs-hidden-right');
    rightEls.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // Animate gs-hidden-scale elements
    const scaleEls = document.querySelectorAll('.gs-hidden-scale');
    scaleEls.forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.4)',
      });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-item__fill');
    skillBars.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      gsap.to(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        width: width + '%',
        duration: 1.2,
        ease: 'power3.out',
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <ChapterProgress />

      <Hero />

      <div id="about">
        <ChapterDivider text="And so the story begins..." />
        <About />
      </div>

      <div id="skills">
        <ChapterDivider text="With knowledge came power..." />
        <Skills />
      </div>

      <div id="education">
        <ChapterDivider text="Built on solid ground..." />
        <Education />
      </div>

      <div id="projects">
        <ChapterDivider text="Then came the real challenges..." />
        <Projects />
      </div>

      <div id="certificates">
        <ChapterDivider text="Proof of the battles won..." />
        <Certificates />
      </div>

      <div id="achievements">
        <ChapterDivider text="Moments that defined me..." />
        <Achievements />
      </div>

      <div id="extracurricular">
        <ChapterDivider text="Life beyond the code..." />
        <ExtraCurricular />
      </div>

      <div id="resume">
        <ChapterDivider text="The complete chronicle..." />
        <Resume />
      </div>

      <div id="contact">
        <ChapterDivider text="The story continues with you..." />
        <Contact />
      </div>

      <Footer />
    </>
  );
}
