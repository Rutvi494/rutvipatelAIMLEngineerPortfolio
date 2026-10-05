export interface Project {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  tags: string[];
  githubUrl: string;
  category: 'Agentic AI' | 'Generative AI' | 'Machine Learning' | 'Data Analytics';
  featuredMetric?: string;
  problem: string;
  approach: string;
  architecture: string[];
  techStack: string[];
  outcome: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  theme: string;
  tags: string[];
  highlights: string[];
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced" | "Expert" | "Production"
    highlight?: boolean;
    description: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  focus: string[];
}
