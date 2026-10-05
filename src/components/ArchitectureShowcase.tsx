import React, { useState } from 'react';
import { SYSTEM_ARCHITECTURE_LAYERS } from '../data/portfolioData';
import { Database, Layers, Cpu, Brain, Server, Activity, Zap, CheckCircle2 } from 'lucide-react';

export const ArchitectureShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // Default: ML MODEL / LLM

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
          End-to-End System Design
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4">
          HOW I BUILD AI SYSTEMS
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          From heterogeneous enterprise data ingestion and dense embeddings to containerized Kubernetes inference and audit-ready governance.
        </p>
      </div>

      {/* Layer Architecture Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Vertical Pipeline Steps */}
        <div className="lg:col-span-6 space-y-3">
          {SYSTEM_ARCHITECTURE_LAYERS.map((layer, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={layer.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] translate-x-1'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400/80'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    {getStepIcon(layer.icon)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {layer.step}
                      </span>
                      <h3 className="text-sm font-bold font-mono text-white">
                        {layer.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {layer.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-slate-700'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: Selected Layer Deep Dive */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <div className="p-7 rounded-2xl glass-panel bg-slate-900/70 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  LAYER {SYSTEM_ARCHITECTURE_LAYERS[activeStep].step}
                </span>
                <span className="text-slate-600">/</span>
                <span className="text-xs font-mono text-slate-400">
                  Pipeline Architecture
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Production Validated
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                {SYSTEM_ARCHITECTURE_LAYERS[activeStep].name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {SYSTEM_ARCHITECTURE_LAYERS[activeStep].desc}
              </p>
            </div>

            {/* Core Tech Stack Under Layer */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Deployed Technologies & Tools:
              </span>
              <div className="flex flex-wrap gap-2">
                {SYSTEM_ARCHITECTURE_LAYERS[activeStep].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300/90 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architectural Guarantees */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs font-mono text-slate-300">
              <div className="text-slate-400 font-semibold uppercase text-[11px]">
                Engineering Guarantees:
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-cyan-400">✓</span>
                <span>Automated health-check probes & rolling deployment</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-cyan-400">✓</span>
                <span>Sub-second P99 inference latency constraints</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-cyan-400">✓</span>
                <span>End-to-end data lineage & audit trail preservation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
