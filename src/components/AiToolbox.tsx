import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Search, Sparkles, Filter } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  categoryId: string;
  level: string;
  highlight?: boolean;
  description: string;
}

export const AiToolbox: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Flatten skills into a searchable list
  const allTechnologies: TechItem[] = useMemo(() => {
    return SKILL_CATEGORIES.flatMap((category) =>
      category.skills.map((skill) => ({
        ...skill,
        category: category.name,
        categoryId: category.id,
      }))
    );
  }, []);

  const filterTabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'genai', label: 'AI & LLMs' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'mlops', label: 'MLOps' },
    { id: 'vector', label: 'Vector Search & Data' },
    { id: 'programming', label: 'Programming & Analytics' },
  ];

  const filteredTechnologies = useMemo(() => {
    return allTechnologies.filter((tech) => {
      const matchesFilter =
        activeFilter === 'all' || tech.categoryId === activeFilter;
      const matchesSearch =
        searchQuery.trim() === '' ||
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [allTechnologies, activeFilter, searchQuery]);

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            Skills & Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4">
            AI TOOLBOX
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Full-stack machine learning, generative intelligence, vector search, cloud-native orchestration, and production MLOps frameworks.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
          />
        </div>
      </div>

      {/* Filter Tabs (Interactive Segmented Bar) */}
      <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/70 border border-slate-800/80 rounded-2xl overflow-x-auto scrollbar-none mb-10">
        <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-500 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          Filter:
        </span>
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-medium font-mono uppercase tracking-wider rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Filtered Grid of Interactive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTechnologies.map((tech) => (
          <div
            key={tech.name}
            className={`group p-5 rounded-2xl glass-panel bg-slate-950/60 border transition-all duration-300 flex flex-col justify-between hover:translate-y-[-2px] ${
              tech.highlight
                ? 'border-slate-800 hover:border-cyan-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                : 'border-slate-800/70 hover:border-slate-700'
            }`}
          >
            <div>
              {/* Category label and status tag */}
              <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                <span className="text-[11px] font-mono text-slate-400 truncate">
                  {tech.category}
                </span>
                <span className="text-[10px] font-mono text-cyan-300/80 uppercase">
                  {tech.level}
                </span>
              </div>

              {/* Technology Name */}
              <div className="flex items-center gap-1.5 mb-2">
                <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </h3>
                {tech.highlight && (
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                )}
              </div>

              {/* Description / Real Production Use-case */}
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {tech.description}
              </p>
            </div>

            {/* Subtle bottom indicator */}
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="text-slate-400">Production Ready</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:scale-125 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {filteredTechnologies.length === 0 && (
        <div className="p-12 text-center rounded-2xl glass-panel bg-slate-950/40 border border-slate-800">
          <p className="text-slate-400 text-sm">
            No technologies found matching "<span className="text-white">{searchQuery}</span>".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="mt-4 text-xs font-mono text-cyan-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};
