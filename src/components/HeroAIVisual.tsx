import React, { useState, useEffect } from 'react';
import { Database, Binary, Search, Brain, Bot, Network, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

interface NodeInfo {
  id: string;
  label: string;
  category: string;
  role: string;
  description: string;
  specs: string;
  icon: React.ElementType;
  x: number;
  y: number;
}

const NODES: NodeInfo[] = [
  {
    id: 'data',
    label: 'DATA',
    category: 'Ingestion Layer',
    role: 'Multi-modal Streaming & Batch Ingestion',
    description: 'Financial feeds, PACS clinical records, and enterprise unstructured data.',
    specs: 'ADF · PySpark · Delta Lake',
    icon: Database,
    x: 60,
    y: 80,
  },
  {
    id: 'embeddings',
    label: 'EMBEDDINGS',
    category: 'Representation Layer',
    role: 'Dense Dimensional Vector Projection',
    description: 'Generates 1536/3072-dim dense embeddings with semantic chunk boundary preservation.',
    specs: 'text-embedding-3 · Tokenizers',
    icon: Binary,
    x: 200,
    y: 70,
  },
  {
    id: 'vector_search',
    label: 'VECTOR SEARCH',
    category: 'Retrieval Engine',
    role: 'Semantic retrieval layer',
    description: 'Hybrid search with BM25 + dense cosine vectors and reciprocal rank fusion.',
    specs: 'Azure AI Search · HNSW Indexing',
    icon: Search,
    x: 340,
    y: 90,
  },
  {
    id: 'llm',
    label: 'LLM',
    category: 'Cognitive Core',
    role: 'Reasoning and generation',
    description: 'Enterprise GPT-4o / Claude / open weights with strict schema enforcement and guardrails.',
    specs: 'Azure OpenAI · Temperature 0.2',
    icon: Brain,
    x: 120,
    y: 220,
  },
  {
    id: 'agents',
    label: 'AGENTS',
    category: 'Autonomous Execution',
    role: 'Autonomous task execution',
    description: 'Stateful multi-agent coordination with tool calling, memory buffers, and verification loops.',
    specs: 'CrewAI · LangGraph · Tools',
    icon: Bot,
    x: 270,
    y: 215,
  },
  {
    id: 'api',
    label: 'API',
    category: 'Production Gateway',
    role: 'Low-latency Inference Gateway',
    description: 'Async FastAPI microservices containerized on AKS with automated ingress and rate limiting.',
    specs: 'AKS · Docker · Private Endpoints',
    icon: Network,
    x: 190,
    y: 330,
  },
  {
    id: 'insights',
    label: 'INSIGHTS',
    category: 'Value Realization',
    role: 'Measurable Business Intelligence',
    description: 'Explainable credit risk scoring, clinical decision assistance, and executive automation.',
    specs: 'SHAP · Power BI · Real-time Metrics',
    icon: Sparkles,
    x: 340,
    y: 330,
  },
];

// Graph connections
const CONNECTIONS = [
  { from: 'data', to: 'embeddings' },
  { from: 'embeddings', to: 'vector_search' },
  { from: 'vector_search', to: 'llm' },
  { from: 'llm', to: 'agents' },
  { from: 'agents', to: 'api' },
  { from: 'api', to: 'insights' },
  { from: 'vector_search', to: 'agents' }, // cross-connect
  { from: 'llm', to: 'api' }, // shortcut
];

export const HeroAIVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeInfo>(NODES[3]); // default LLM
  const [animatingPacketIndex, setAnimatingPacketIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatingPacketIndex((prev) => (prev + 1) % CONNECTIONS.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow behind panel */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/20 via-blue-600/15 to-violet-600/20 rounded-2xl blur-xl opacity-75" />

      {/* Main Glass Panel */}
      <div className="relative rounded-2xl glass-panel border border-slate-700/60 p-5 md:p-6 shadow-2xl overflow-hidden">
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-slate-300 uppercase font-semibold">
              Live Neural Architecture
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/90">
            <Activity className="w-3.5 h-3.5" />
            <span>Active Pipeline</span>
          </div>
        </div>

        {/* Interactive Diagram Canvas */}
        <div className="relative w-full h-[380px] select-none bg-slate-950/40 rounded-xl border border-slate-800/60 overflow-hidden">
          {/* Subtle grid lines background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* SVG Connections & Flow Packets */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 400">
            <defs>
              <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="activeEdgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {CONNECTIONS.map((conn, idx) => {
              const from = NODES.find((n) => n.id === conn.from)!;
              const to = NODES.find((n) => n.id === conn.to)!;
              const isActive = animatingPacketIndex === idx;

              // Quadratic curve midpoint for smooth curved graph flow
              const midX = (from.x + to.x) / 2 + (idx % 2 === 0 ? 10 : -10);
              const midY = (from.y + to.y) / 2;
              const pathD = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? 'url(#activeEdgeGradient)' : 'url(#edgeGradient)'}
                    strokeWidth={isActive ? '2' : '1.2'}
                    strokeDasharray={isActive ? '4 3' : undefined}
                    className="transition-all duration-300"
                  />
                  {isActive && (
                    <circle r="4" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)">
                      <animateMotion path={pathD} dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Render Nodes */}
          {NODES.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;

            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(node)}
                onMouseEnter={() => setActiveNode(node)}
                style={{
                  left: `${(node.x / 420) * 100}%`,
                  top: `${(node.y / 400) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-10 cursor-pointer group"
              >
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-200 backdrop-blur-md ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-400 text-white shadow-[0_0_16px_rgba(56,189,248,0.4)] scale-105'
                      : 'bg-slate-950/80 border-slate-700/70 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-colors ${
                      isSelected ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-300'
                    }`}
                  />
                  <span className="text-[11px] font-mono font-semibold tracking-wide whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Node Details Card / Tooltip Explanation */}
        <div className="mt-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400">{activeNode.label}</span>
                <span className="text-[11px] text-slate-400">· {activeNode.category}</span>
              </div>
              <p className="text-xs font-medium text-slate-200 mt-0.5">{activeNode.role}</p>
            </div>
            <span className="shrink-0 flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-1.5 py-0.5 rounded">
              <CheckCircle2 className="w-2.5 h-2.5" />
              Verified
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-2">{activeNode.description}</p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 border-t border-slate-800/70 pt-2">
            <span className="text-slate-400 font-medium">Stack:</span>
            <span className="text-cyan-300/80">{activeNode.specs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
