import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, ArrowUpRight, Bot, Cpu, TrendingUp, Home, Users, BarChart3 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Agentic AI', label: 'Agentic AI' },
    { id: 'Machine Learning', label: 'Machine Learning' },
    { id: 'Data Analytics', label: 'Data Analytics' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const getProjectIcon = (category: string, id: string) => {
    switch (id) {
      case 'ai-search-agent':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'crewai-multi-agent-system':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'ad-sales-prediction':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'house-price-prediction':
        return <Home className="w-5 h-5 text-sky-400" />;
      case 'telecom-churn-prediction':
        return <Users className="w-5 h-5 text-purple-400" />;
      case 'uber-eats-data-analysis':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Real-world autonomous agents, low-latency search systems, predictive machine learning pipelines, and exploratory data models.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            data-cursor="view"
            className="group relative rounded-2xl glass-panel bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] hover:-translate-y-1"
          >
            {/* Top Bar with Number & Icon */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    PROJECT {project.number}
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                  {getProjectIcon(project.category, project.id)}
                </div>
              </div>

              {/* Title & Short Description */}
              <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
                {project.shortDescription}
              </p>

              {/* Tags / Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950/80 border border-slate-800/80 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950/80 border border-slate-800/80 text-slate-500">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-6 pt-4 border-t border-slate-800/70 flex items-center justify-between gap-3 bg-slate-950/40">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="github"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 border border-slate-700/80 transition-all cursor-pointer"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View for detailed project information */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
