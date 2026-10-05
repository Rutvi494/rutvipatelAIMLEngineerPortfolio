import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
          Academic Foundation
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4">
          EDUCATION
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Rigorous academic grounding in computer science, machine learning research, distributed systems, and computer engineering.
        </p>
      </div>

      {/* Grid of Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION_DATA.map((edu, idx) => (
          <div
            key={edu.institution}
            className="group relative p-8 rounded-2xl glass-panel bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)]"
          >
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                  {idx === 0 ? 'Graduate Degree' : 'Undergraduate Degree'}
                </span>
              </div>

              {/* Institution & Degree */}
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
                {edu.institution}
              </h3>
              <p className="text-base font-medium text-slate-200 mb-4">
                {edu.degree}
              </p>

              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-slate-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {edu.location}
                </span>
              </div>

              {/* Core Focus / Coursework Areas */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  Key Research & Coursework:
                </span>
                <ul className="space-y-1.5">
                  {edu.focus.map((item, fIdx) => (
                    <li
                      key={fIdx}
                      className="text-xs text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom subtle accent line */}
            <div className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Verified Credential</span>
              <span className="text-cyan-400/70 font-semibold">Completed</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
