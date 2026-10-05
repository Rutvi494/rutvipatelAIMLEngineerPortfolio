import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Check, Sparkles, Database, Binary, Search, Brain, Bot, ArrowRight, Activity, Terminal } from 'lucide-react';

interface PipelineStage {
  id: string;
  name: string;
  subname: string;
  role: string;
  samplePayload: string;
  latency: string;
  icon: React.ElementType;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'query',
    name: 'USER QUERY',
    subname: 'Natural Language Input',
    role: 'Deconstructs user intent, filters prompt injections, and standardizes query encoding.',
    samplePayload: '\"Assess credit exposure and volatility vectors across Q3 commercial loans\"',
    latency: '< 5ms',
    icon: Terminal,
  },
  {
    id: 'embeddings',
    name: 'EMBEDDINGS',
    subname: 'Dense Projection',
    role: 'Generates 1536-dimensional semantic dense vectors using text-embedding-3 with token boundary preservation.',
    samplePayload: 'tensor([0.0241, -0.0812, 0.4190, ...], dim=1536)',
    latency: '35ms',
    icon: Binary,
  },
  {
    id: 'vector_db',
    name: 'VECTOR DATABASE',
    subname: 'HNSW Indexing',
    role: 'Performs cosine similarity search across multi-tenant shards with metadata pre-filtering.',
    samplePayload: 'Cosine Match: similarity=0.914, index=\"sec_filings_2025\"',
    latency: '18ms',
    icon: Database,
  },
  {
    id: 'context',
    name: 'CONTEXT RETRIEVAL',
    subname: 'Hybrid Reranking',
    role: 'Combines BM25 lexical search and dense vectors using Reciprocal Rank Fusion (RRF) to retrieve top-k chunks.',
    samplePayload: 'Top-5 Grounded Chunks (Token count: 2,140, Score: 0.887)',
    latency: '24ms',
    icon: Search,
  },
  {
    id: 'llm',
    name: 'LLM REASONING',
    subname: 'Cognitive Synthesis',
    role: 'Azure OpenAI GPT-4o synthesizes retrieved context under strict system prompts and temperature controls.',
    samplePayload: 'Prompt: Context injected + strict JSON schema enforcement',
    latency: '320ms',
    icon: Brain,
  },
  {
    id: 'agent',
    name: 'AI AGENT & CRITIC',
    subname: 'Autonomous Verification',
    role: 'Agentic feedback loop verifies citations against retrieved source documents and checks factuality.',
    samplePayload: 'Fact-Check Invariants: Passed (0 hallucinated claims)',
    latency: '80ms',
    icon: Bot,
  },
  {
    id: 'response',
    name: 'RESPONSE',
    subname: 'Structured Output',
    role: 'Delivers a validated, audit-ready analysis with traceable citations and confidence scores.',
    samplePayload: 'JSON: { risk_level: \"Moderate\", exposure_delta: \"-4.2%\", citations: [...] }',
    latency: 'Total ~480ms',
    icon: Sparkles,
  },
];

const PRESET_QUERIES = [
  'Assess credit exposure and volatility vectors across Q3 commercial loans',
  'Cross-examine clinical MRI scans with pathology notes for diagnostic alignment',
  'Audit enterprise RAG index for regulatory compliance under Basel III standards',
];

export const AiLab: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<PipelineStage>(PIPELINE_STAGES[0]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentQuery, setCurrentQuery] = useState<string>(PRESET_QUERIES[0]);

  // Run the animated pipeline simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      if (activeStepIndex < PIPELINE_STAGES.length - 1) {
        timer = setTimeout(() => {
          setActiveStepIndex((prev) => prev + 1);
          setSelectedStage(PIPELINE_STAGES[activeStepIndex + 1]);
        }, 900);
      } else {
        setIsRunning(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isRunning, activeStepIndex]);

  const handleStartSimulation = () => {
    setActiveStepIndex(0);
    setSelectedStage(PIPELINE_STAGES[0]);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveStepIndex(0);
    setSelectedStage(PIPELINE_STAGES[0]);
  };

  return (
    <section id="ai-lab" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
          Interactive Architecture Sandbox
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4">
          AI LAB
        </h2>
        <p className="text-base text-slate-300 leading-relaxed">
          Explore how I think about intelligent systems. A live simulation of a production RAG & Agentic intelligence pipeline.
        </p>
      </div>

      {/* Interactive Controls & Query Selector */}
      <div className="p-6 rounded-2xl glass-panel bg-slate-900/70 border border-slate-800 mb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Select or test a sample workload:
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {PRESET_QUERIES.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setCurrentQuery(q);
                    handleReset();
                  }}
                  className={`text-left text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                    currentQuery === q
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                      : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  "{q.slice(0, 36)}..."
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleStartSimulation}
              disabled={isRunning}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] ${
                isRunning ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunning ? 'Synthesizing...' : 'Run Pipeline'}</span>
            </button>
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
              title="Reset Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Pipeline Flow Chart (Horizontal on Desktop, Stacked on Mobile) */}
      <div className="relative p-6 sm:p-8 rounded-2xl glass-panel bg-slate-950/80 border border-slate-800 mb-8 overflow-x-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 min-w-[760px] lg:min-w-0">
          {PIPELINE_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isCompleted = activeStepIndex > idx;
            const isCurrent = activeStepIndex === idx;
            const isSelected = selectedStage.id === stage.id;

            return (
              <React.Fragment key={stage.id}>
                {/* Node Box */}
                <div
                  onClick={() => {
                    setSelectedStage(stage);
                    setActiveStepIndex(idx);
                  }}
                  className={`group relative flex-1 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col items-center text-center select-none ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.35)] scale-105'
                      : isCurrent
                      ? 'bg-slate-900/90 border-cyan-400/80 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                      : isCompleted
                      ? 'bg-slate-900/40 border-slate-700 text-slate-300'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-500 hover:border-slate-700 hover:text-slate-300'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                      isSelected || isCurrent
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : isCompleted
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>

                  <span className="text-[11px] font-mono font-bold tracking-tight text-white mb-0.5">
                    {stage.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {stage.subname}
                  </span>

                  {isCurrent && isRunning && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </div>

                {/* Connecting arrow / pulse line */}
                {idx < PIPELINE_STAGES.length - 1 && (
                  <div className="hidden lg:flex items-center text-slate-600 px-1">
                    <ArrowRight
                      className={`w-4 h-4 transition-colors ${
                        activeStepIndex > idx
                          ? 'text-cyan-400'
                          : activeStepIndex === idx
                          ? 'text-cyan-400 animate-pulse'
                          : 'text-slate-700'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Inspection Panel for Selected Stage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-2xl glass-panel bg-slate-900/60 border border-slate-800">
        <div className="md:col-span-5 space-y-3 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Inspection: {selectedStage.name}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              {selectedStage.latency}
            </span>
          </div>

          <h3 className="text-lg font-bold font-display text-white">
            {selectedStage.subname}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            {selectedStage.role}
          </p>

          <div className="pt-2 text-xs font-mono text-slate-400">
            Click on any stage above to inspect its execution specifications.
          </div>
        </div>

        <div className="md:col-span-7 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Stage Telemetry & Intermediate State:</span>
            <span className="text-emerald-400">Status: Nominal</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
            <div className="text-slate-500 mb-1">// Current input to stage:</div>
            <div className="text-cyan-300 mb-3">"{currentQuery}"</div>
            <div className="text-slate-500 mb-1">// Stage output artifact:</div>
            <div className="text-emerald-300 font-medium">
              {selectedStage.samplePayload}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
