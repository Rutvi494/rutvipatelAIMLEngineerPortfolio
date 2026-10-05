import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroAIVisual } from './HeroAIVisual';
import { ArrowDown, Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = PERSONAL_INFO.heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.heroRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
              {PERSONAL_INFO.availability}
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-1 mb-4">
            <span className="text-base sm:text-lg text-slate-400 font-mono tracking-wide">
              Hi, I'm
            </span>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-display tracking-tight text-white leading-none">
              RUTVI PATEL
            </h1>
          </div>

          {/* Animated Role Text */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <div className="text-xl sm:text-2xl md:text-3xl font-mono font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              {displayText}
              <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-cyan-400 animate-pulse align-middle" />
            </div>
          </div>

          {/* Main Description */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-3">
            "{PERSONAL_INFO.heroMainDesc}"
          </p>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
            {PERSONAL_INFO.heroSupportingText}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="github"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 hover:text-white transition-all backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 hover:text-white transition-all backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Quick Technical Highlights Bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-5 w-full">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Core Competencies:
            </span>
            <span>Azure OpenAI</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>RAG Architecture</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Agentic Workflows</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Kubernetes & MLOps</span>
          </div>
        </div>

        {/* Right Column: Hero AI Visual */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <HeroAIVisual />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 flex justify-center">
        <a
          href="#about"
          onClick={handleScrollToAbout}
          className="group flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300">
            Scroll to explore
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
};
