import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar, CheckCircle, TrendingUp } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  // Default first card expanded, others can toggle
  const [expandedId, setExpandedId] = useState<string | null>('wells-fargo');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
          Career Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4">
          EXPERIENCE TIMELINE
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Production AI systems built for tier-1 financial institutions, medical research centers, and global enterprise automation platforms.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-10 sm:space-y-12">
        {EXPERIENCE_DATA.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Icon Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950 border-2 border-cyan-400/80 shadow-[0_0_12px_rgba(56,189,248,0.4)] group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300" />
              </div>

              {/* Experience Card */}
              <div
                className={`rounded-2xl glass-panel bg-slate-900/60 border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-cyan-500/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header (Always Visible - Clickable) */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 font-medium">
                        · {exp.role}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-300">
                      {exp.theme}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Toggle button & Key metric chips */}
                  <div className="flex items-center gap-3 self-end md:self-center">
                    {exp.stats && (
                      <div className="hidden sm:flex items-center gap-2">
                        {exp.stats.slice(0, 2).map((s) => (
                          <div
                            key={s.label}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-right"
                          >
                            <span className="text-[10px] font-mono text-slate-400 block">
                              {s.label}
                            </span>
                            <span className="text-xs font-mono font-bold text-cyan-300">
                              {s.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      type="button"
                      aria-label={isExpanded ? 'Collapse role details' : 'Expand role details'}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Technology chips bar */}
                <div className="px-6 py-3 bg-slate-950/40 border-t border-slate-800/60 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-slate-400">
                  <span className="text-slate-500 font-semibold uppercase text-[11px]">
                    Stack:
                  </span>
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tag} className="flex items-center gap-2">
                      <span className="text-cyan-300/90">{tag}</span>
                      {tIdx < exp.tags.length - 1 && (
                        <span aria-hidden="true" className="text-slate-700">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Expandable Body */}
                {isExpanded && (
                  <div className="p-6 pt-4 border-t border-slate-800/70 space-y-4 animate-in fade-in duration-200">
                    {/* Impact Highlights List */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                        Key Engineering Highlights & Quantifiable Impact
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                          >
                            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats strip if present */}
                    {exp.stats && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/60">
                        {exp.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                          >
                            <span className="text-xs text-slate-400 block font-mono">
                              {stat.label}
                            </span>
                            <span className="text-xl font-bold font-mono text-white mt-0.5 block">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
