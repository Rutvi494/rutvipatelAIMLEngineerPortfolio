import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cpu, ShieldCheck, Zap, Workflow, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const CORE_PILLARS = [
    {
      title: 'Generative AI & Agentic Systems',
      desc: 'Retrieval-Augmented Generation (RAG), cognitive search, semantic reranking, autonomous multi-agent orchestration, and prompt evaluation guardrails.',
      icon: Cpu,
    },
    {
      title: 'Credit Risk & Clinical ML',
      desc: 'Supervised predictive modeling, ensemble gradient boosting, deep learning CNNs for medical imagery, real-time fraud anomaly detection, and ROC-AUC optimization.',
      icon: ShieldCheck,
    },
    {
      title: 'Cloud-Native MLOps & Serving',
      desc: 'Scalable containerized deployment on Azure Kubernetes Service (AKS), Docker runtimes, Azure ML compute clusters, and continuous automated CI/CD pipelines.',
      icon: Zap,
    },
    {
      title: 'Explainable AI & Governance',
      desc: 'Rigorous feature attribution via SHAP and LIME, model drift telemetry with Azure Monitor, and full regulatory audit compliance for banking and clinical systems.',
      icon: Workflow,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
          About Rutvi Patel
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-6">
          ENGINEERING INTELLIGENCE INTO PRODUCTION
        </h2>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {PERSONAL_INFO.aboutBio}
        </p>
      </div>

      {/* Grid of Visually Separated Content Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {CORE_PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="p-7 rounded-2xl glass-panel bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Domain Impact & Production Standards Bar */}
      <div className="p-8 rounded-2xl glass-panel bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
            Enterprise Track Record
          </span>
          <h3 className="text-xl font-semibold text-white mb-2">
            Proven impact across regulated financial, healthcare & SaaS ecosystems
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Delivering measurable accuracy gains, reduced analyst turnaround, and hardened MLOps governance without hand-waving or fragile prototypes.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors"
          >
            <span>View Experience</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#ai-toolbox"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <span>Explore AI Toolbox</span>
          </a>
        </div>
      </div>
    </section>
  );
};
