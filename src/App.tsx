import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroBackground } from './components/HeroBackground';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { About } from './components/About';
import { AiToolbox } from './components/AiToolbox';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Projects } from './components/Projects';
import { AiLab } from './components/AiLab';
import { AiTerminal } from './components/AiTerminal';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'experience',
      'expertise',
      'projects',
      'ai-lab',
      'education',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#f1f5f9] selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Interactive Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Hero Canvas Neural Network Background */}
      <HeroBackground />

      {/* Floating Glassmorphism Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <ImpactMetrics />
        <About />
        <AiToolbox />
        <ExperienceTimeline />
        <Projects />
        <AiLab />
        <AiTerminal />
        <ArchitectureShowcase />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
