import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ArrowUpRight, CheckCircle2, Layers, AlertCircle, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel bg-slate-950 border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 sm:p-8 z-10 space-y-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-cyan-400">
                PROJECT {project.number}
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-mono text-slate-400">
                {project.category}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
              {project.name}
            </h2>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section: The Problem */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>The Problem</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            {project.problem}
          </p>
        </div>

        {/* Section: The Approach */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>The Approach</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            {project.approach}
          </p>
        </div>

        {/* Section: Architecture Pipeline */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Architecture & Execution Pipeline</span>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 space-y-2.5">
            {project.architecture.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <span className="font-mono text-cyan-400 font-semibold shrink-0">
                  [{idx + 1}]
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Tech Stack */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Section: Result / Outcome */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Result / Outcome</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl text-emerald-100">
            {project.outcome}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-5">
          <span className="text-xs font-mono text-slate-500">
            Repository: Rutvi494/{project.id}
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.4)]"
            >
              <Github className="w-4 h-4" />
              <span>View On GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
