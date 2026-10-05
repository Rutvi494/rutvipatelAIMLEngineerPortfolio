import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, Trash2 } from 'lucide-react';

interface TerminalEntry {
  command: string;
  response: string;
  actionSection?: string;
}

const COMMAND_MAP: Record<string, { response: string; actionSection?: string }> = {
  whoami: {
    response: 'Rutvi Patel — AI/ML Engineer building production-ready intelligent systems across financial services, healthcare, and enterprise software.',
    actionSection: 'about',
  },
  focus: {
    response: 'Generative AI • RAG • Agentic AI • MLOps • Credit Risk Modeling • Clinical Healthcare ML',
    actionSection: 'about',
  },
  cloud: {
    response: 'Azure-first AI engineering (Azure OpenAI, Azure ML, AKS, Data Factory, Blob Storage, Synapse) + AWS SageMaker & S3.',
    actionSection: 'expertise',
  },
  experience: {
    response: '4+ years of production experience: Wells Fargo (Jul 2025–Present), University of Illinois Springfield (2024–2025), OpsRamp (2022–2024).',
    actionSection: 'experience',
  },
  about: {
    response: 'Rutvi specializes in turning complex multimodal data into intelligent, scalable, and measurable enterprise solutions.',
    actionSection: 'about',
  },
  skills: {
    response: 'Python, Azure OpenAI, LangChain, CrewAI, RAG, PySpark, AKS, Docker, XGBoost, Scikit-learn, SHAP, LIME, MLflow.',
    actionSection: 'expertise',
  },
  projects: {
    response: 'Featured: AI Search Agent (Groq/Agno), CrewAI Multi-Agent System, Ad Sales Prediction, House Price ML, Telecom Churn, Uber Eats EDA.',
    actionSection: 'projects',
  },
  contact: {
    response: 'Reach out directly: rutvidinesh42@gmail.com | Location: Chicago, IL | GitHub: github.com/Rutvi494',
    actionSection: 'contact',
  },
  help: {
    response: 'Available commands: whoami, focus, cloud, experience, skills, projects, about, contact, clear',
  },
};

const SUGGESTIONS = ['whoami', 'focus', 'cloud', 'experience', 'skills', 'projects', 'contact'];

export const AiTerminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      command: 'whoami',
      response: 'AI/ML Engineer building production-ready intelligent systems.',
    },
    {
      command: 'focus',
      response: 'Generative AI • RAG • Agentic AI • MLOps',
    },
    {
      command: 'cloud',
      response: 'Azure-first AI engineering',
    },
    {
      command: 'experience',
      response: '4+ years',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const match = COMMAND_MAP[trimmed];
    const newEntry: TerminalEntry = {
      command: trimmed,
      response: match
        ? match.response
        : `Command not recognized: '${trimmed}'. Type 'help' for available commands.`,
      actionSection: match?.actionSection,
    };

    setHistory((prev) => [...prev, newEntry]);
    setInputVal('');

    // Smooth scroll to target section if relevant
    if (match?.actionSection) {
      const target = document.querySelector(`#${match.actionSection}`);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-2xl glass-panel bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="ml-3 text-xs font-mono text-slate-400 font-medium flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              rutvi@ai-workstation:~
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400">
              <Sparkles className="w-3 h-3" />
              Interactive Shell
            </span>
            <button
              onClick={() => setHistory([])}
              className="p-1 rounded text-slate-500 hover:text-slate-300 transition-colors"
              title="Clear terminal output"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div className="px-5 py-2.5 bg-slate-900/40 border-b border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-slate-500 text-[11px]">Quick Commands:</span>
          {SUGGESTIONS.map((cmd) => (
            <button
              key={cmd}
              onClick={() => runCommand(cmd)}
              className="px-2.5 py-0.5 rounded-md bg-slate-800/70 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-all cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-xs sm:text-sm space-y-4 max-h-[360px] overflow-y-auto">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-slate-500">rutvi@ai:~$</span>
                <span className="font-semibold">{entry.command}</span>
              </div>
              <div className="text-slate-300 pl-4 border-l border-slate-800 leading-relaxed">
                {entry.response}
              </div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-cyan-400 pt-1">
            <span className="text-slate-500">rutvi@ai:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (e.g. skills, projects, contact)..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => runCommand(inputVal)}
              className="p-1 rounded text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
};
