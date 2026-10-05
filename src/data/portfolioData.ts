import { ExperienceItem, Project, SkillCategory, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Rutvi Patel',
  title: 'AI/ML Engineer',
  specializations: ['Generative AI', 'Agentic AI', 'MLOps', 'Cloud-Native ML'],
  email: 'rutvidinesh42@gmail.com',
  location: 'Chicago, IL',
  github: 'https://github.com/Rutvi494',
  linkedin: 'https://linkedin.com/in/rutvi-patel-ai', // Configurable LinkedIn profile
  availability: 'AVAILABLE FOR AI/ML OPPORTUNITIES',
  heroRoles: [
    'AI/ML Engineer',
    'Generative AI Engineer',
    'Agentic AI Builder',
    'MLOps Engineer'
  ],
  heroHeadline: 'Engineering Intelligence Into Production Systems',
  heroMainDesc:
    'I build production AI systems that turn complex data into intelligent, scalable and measurable solutions.',
  heroSupportingText:
    '4+ years building production ML, Generative AI, RAG, fraud detection, risk modeling and cloud-native AI platforms.',
  aboutBio:
    'Rutvi is an AI/ML Engineer with 4+ years of experience developing production machine learning and Generative AI solutions across financial services, healthcare, and enterprise software. She works heavily with Azure OpenAI, Azure Machine Learning, LangChain, Kubernetes, Python and modern AI infrastructure.',
};

export const IMPACT_METRICS = [
  {
    value: 4,
    suffix: '+',
    label: 'Years',
    sublabel: 'AI/ML Experience in production systems',
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    value: 35,
    suffix: '%',
    label: 'Higher Search Accuracy',
    sublabel: 'With Azure OpenAI & hybrid RAG pipelines',
    accent: 'from-cyan-400 to-teal-400',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Faster Analyst Workflows',
    sublabel: 'Automated financial & audit intelligence',
    accent: 'from-indigo-400 to-violet-400',
  },
  {
    value: 92,
    suffix: '%',
    label: 'Medical Image Accuracy',
    sublabel: 'Deep learning classification for CT/MRI scans',
    accent: 'from-purple-400 to-pink-400',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'wells-fargo',
    company: 'Wells Fargo',
    role: 'AI/ML Engineer',
    location: 'Chicago, IL',
    period: 'Jul 2025 – Present',
    theme: 'Enterprise AI for Financial Services',
    tags: [
      'Azure OpenAI',
      'LangChain',
      'Azure AI Search',
      'XGBoost',
      'PySpark',
      'AKS',
      'Docker',
      'SHAP',
      'LIME',
      'Azure Monitor',
    ],
    highlights: [
      'Built an enterprise Retrieval-Augmented Generation (RAG) platform using Azure OpenAI, LangChain and Azure AI Search for enterprise compliance.',
      'Improved regulatory knowledge search accuracy by 35% through semantic chunking, hybrid retrieval and reciprocal rank fusion.',
      'Developed XGBoost credit-risk models supporting loan underwriting, reducing non-performing loans by 15%.',
      'Built real-time fraud detection pipelines using anomaly detection and ensemble learning on streaming transactions.',
      'Automated financial reporting and document analysis with Azure OpenAI, reducing analyst turnaround time by 40%.',
      'Productionized high-throughput ML inference using Azure Kubernetes Service (AKS) and containerized Docker runtimes.',
      'Implemented model monitoring, data drift tracking and explainability using Azure Monitor, SHAP, and LIME.',
      'Developed robust NLP workflows for Know Your Customer (KYC), Anti-Money Laundering (AML), and regulatory documentation analysis.',
    ],
    stats: [
      { label: 'Search Accuracy', value: '+35%' },
      { label: 'Analyst Turnaround', value: '-40%' },
      { label: 'Non-Performing Loans', value: '-15%' },
    ],
  },
  {
    id: 'uis',
    company: 'University of Illinois Springfield',
    role: 'AI/ML Engineer',
    location: 'Springfield, IL',
    period: 'Aug 2024 – Jun 2025',
    theme: 'AI for Healthcare & Clinical Intelligence',
    tags: [
      'Azure ML',
      'Azure Data Factory',
      'Azure Blob Storage',
      'CNNs',
      'Azure OpenAI',
      'spaCy',
      'SHAP',
      'LIME',
      'Power BI',
    ],
    highlights: [
      'Built cloud-native healthcare ML pipelines orchestrated with Azure ML, Azure Data Factory, and Azure Blob Storage.',
      'Developed clinical patient risk models achieving 89% ROC-AUC for inpatient readmission and deterioration warning.',
      'Improved early clinical intervention accuracy by 22% across multi-cohort hospital datasets.',
      'Developed Convolutional Neural Network (CNN) medical imaging models for CT/MRI scans achieving 92% classification accuracy.',
      'Built medical NLP pipelines leveraging Azure OpenAI and spaCy for structured entity extraction from clinical progress notes.',
      'Reduced distributed model training time by 30% using optimized hyperparameter tuning and Azure ML compute clusters.',
      'Implemented explainable AI frameworks (SHAP and LIME) to deliver transparent risk factors to attending physicians.',
      'Designed interactive Power BI operational dashboards for clinical leadership and stakeholders.',
    ],
    stats: [
      { label: 'ROC-AUC Risk Score', value: '89%' },
      { label: 'Imaging Accuracy', value: '92%' },
      { label: 'Distributed Training', value: '-30%' },
    ],
  },
  {
    id: 'opsramp',
    company: 'OpsRamp',
    role: 'AI Engineer',
    location: 'India',
    period: 'May 2022 – Jul 2024',
    theme: 'Enterprise AI & Automation',
    tags: [
      'Azure OpenAI',
      'LangChain',
      'Azure Data Factory',
      'PySpark',
      'Docker',
      'GitHub Actions',
      'Azure DevOps',
      'SQL',
      'Power BI',
    ],
    highlights: [
      'Built Generative AI document intelligence solutions using Azure OpenAI and LangChain for automated contract and log analysis.',
      'Reduced manual validation and auditing effort by 40% through automated semantic cross-referencing.',
      'Developed an internal AI assistant for enterprise support automation, resolving tier-1 IT tickets autonomously.',
      'Built scalable Azure Data Factory ETL pipelines consolidating operational telemetry across distributed enterprise workloads.',
      'Created robust PySpark feature-engineering and data-validation pipelines processing multi-gigabyte daily telemetry feeds.',
      'Implemented end-to-end ML CI/CD automation using GitHub Actions, Azure DevOps, and Docker container registries.',
      'Developed Power BI executive dashboards and automated SQL validation suites ensuring high data fidelity.',
      'Mentored junior engineers on Azure ML, prompt engineering techniques, and production MLOps practices.',
    ],
    stats: [
      { label: 'Audit Effort', value: '-40%' },
      { label: 'ETL Pipelines', value: 'Production' },
      { label: 'CI/CD Automation', value: 'Zero-Downtime' },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-search-agent',
    number: '01',
    name: 'AI Search Agent',
    category: 'Agentic AI',
    shortDescription:
      'Intelligent AI-powered search agent utilizing Groq ultra-low-latency LLM inference and the Agno framework for contextual information synthesis.',
    tags: ['Groq LLM', 'Agno Framework', 'Prompt Engineering', 'Low-Latency Inference', 'Information Retrieval', 'AI Summarization'],
    githubUrl: 'https://github.com/Rutvi494/ai-search-agent',
    featuredMetric: 'Ultra-low latency inference via Groq LPUs',
    problem:
      'Traditional search engines return disparate, noisy web links requiring manual filtering and reading, while standard conversational LLMs suffer from high inference latency and outdated knowledge.',
    approach:
      'Engineered an autonomous search agent using the Agno framework coupled with Groq LPUs for sub-second inference. Integrated intelligent query decomposition, multi-source retrieval, and precise synthesis prompts.',
    architecture: [
      'User query parsing & autonomous intent classifier',
      'Targeted web & document search tool execution via Agno',
      'Streaming token generation powered by Groq LPUs',
      'Source-grounded citation extraction and concise summarization layer',
    ],
    techStack: ['Python', 'Groq API', 'Agno Framework', 'Prompt Engineering', 'DuckDuckGo API', 'Streamlit / CLI'],
    outcome:
      'Delivers near-instant contextual search responses with verifiable citations and structured executive summaries, eliminating manual link browsing.',
  },
  {
    id: 'crewai-multi-agent-system',
    number: '02',
    name: 'CrewAI Multi-Agent System',
    category: 'Agentic AI',
    shortDescription:
      'Collaborative multi-agent workflow architecture built with CrewAI, orchestrating specialized AI personas, modular task execution, and dynamic tool integration.',
    tags: ['CrewAI', 'Multi-Agent Systems', 'Tool Integration', 'Autonomous Workflows', 'Python', 'LangChain'],
    githubUrl: 'https://github.com/Rutvi494/crewai-multi-agent-system',
    featuredMetric: 'Modular multi-persona autonomous collaboration',
    problem:
      'Complex multi-stage knowledge tasks (e.g. comprehensive research, drafting, reviewing, and code verification) fail when handled by a single monolithic prompt.',
    approach:
      'Designed a multi-agent orchestration architecture where distinct agents (Researcher, Analyst, Synthesizer, Quality Reviewer) collaborate asynchronously with defined goals, backstories, memory, and delegated tool privileges.',
    architecture: [
      'Role-based agent definitions with individual system prompts and memory buffers',
      'Hierarchical task delegation pipeline with inter-agent critique loops',
      'Dynamic external tool invocation (APIs, search, calculators, validators)',
      'Final artifact compilation and automated formatting checkpoint',
    ],
    techStack: ['CrewAI', 'LangChain', 'Python', 'OpenAI / Azure Models', 'Serper API', 'Vector Memory'],
    outcome:
      'Enables autonomous end-to-end execution of complex research and analysis workflows with cross-verification between agents to minimize hallucinations.',
  },
  {
    id: 'ad-sales-prediction',
    number: '03',
    name: 'Ad Sales Prediction',
    category: 'Machine Learning',
    shortDescription:
      'Regression-based machine learning forecasting system for analyzing multi-channel advertising spend and accurately predicting revenue outcomes.',
    tags: ['Regression ML', 'Scikit-learn', 'Feature Engineering', 'Data Visualization', 'Python', 'Statistical Modeling'],
    githubUrl: 'https://github.com/Rutvi494/Ad-sales-prediction',
    featuredMetric: 'Multi-channel marketing budget optimization',
    problem:
      'Enterprises allocate significant budgets across TV, radio, and digital channels without clear visibility into marginal return on ad spend (ROAS) and non-linear saturation effects.',
    approach:
      'Implemented robust regression pipelines featuring exploratory data analysis, correlation heatmaps, feature interaction terms, cross-validation, and regression performance evaluation.',
    architecture: [
      'Data cleaning, missing-value imputation & outlier handling',
      'Multi-variable regression models (Linear, Ridge, Lasso, Random Forest)',
      'Residual analysis and homoscedasticity evaluation',
      'Interactive sensitivity analysis tool for budget allocation scenario testing',
    ],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    outcome:
      'Provides actionable sensitivity coefficients and regression models to optimize marketing spend distribution across communication channels.',
  },
  {
    id: 'house-price-prediction',
    number: '04',
    name: 'House Price Prediction ML',
    category: 'Machine Learning',
    shortDescription:
      'Machine learning regression system with extensive exploratory data analysis, feature selection, outlier handling, and feature-impact visualization.',
    tags: ['Supervised ML', 'Feature Selection', 'XGBoost', 'Scikit-learn', 'Pandas', 'Model Explainability'],
    githubUrl: 'https://github.com/Rutvi494/house-price-prediction-ml',
    featuredMetric: 'High-precision tabular valuation model',
    problem:
      'Real estate valuation suffers from high variance, skewed distributions, multi-collinear geographic variables, and high-dimensional categorical features.',
    approach:
      'Built an end-to-end ML pipeline comprising log-transformation of target variables, target encoding, automated feature selection, and ensemble gradient boosting with hyperparameter tuning.',
    architecture: [
      'Data preprocessing pipeline: missing value strategy & robust scaling',
      'Feature engineering: age derivation, spatial clusters, quality indices',
      'Ensemble modeling comparing Gradient Boosting, Random Forest & Ridge',
      'Model evaluation (RMSE, MAE, R²) and feature importance diagnostics',
    ],
    techStack: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
    outcome:
      'Yielded a robust predictive regression model with minimal generalization error and transparent feature contribution analysis.',
  },
  {
    id: 'telecom-churn-prediction',
    number: '05',
    name: 'Telecom Churn Prediction',
    category: 'Machine Learning',
    shortDescription:
      'Classification system for identifying at-risk telecom subscribers, predicting churn probability, and generating customer retention insights.',
    tags: ['Classification ML', 'Customer Analytics', 'Imbalanced Data', 'ROC-AUC', 'Scikit-learn', 'Python'],
    githubUrl: 'https://github.com/Rutvi494/telecom-churn-prediction',
    featuredMetric: 'Early warning customer retention classification',
    problem:
      'Customer acquisition costs in telecommunications exceed retention costs by 5x; early detection of dissatisfied subscribers is critical to preventing revenue attrition.',
    approach:
      'Formulated customer retention as an imbalanced binary classification problem. Leveraged SMOTE resampling, engineered usage delta features, and trained calibrated probabilistic classifiers.',
    architecture: [
      'Customer tenure and behavioral contract feature transformation',
      'Class imbalance mitigation using synthetic minority oversampling (SMOTE)',
      'Classifier tuning focusing on Recall and Precision-Recall AUC optimization',
      'Risk cohort tiering (High, Medium, Low) for customer success intervention',
    ],
    techStack: ['Python', 'Scikit-learn', 'Imbalanced-learn', 'Pandas', 'Matplotlib'],
    outcome:
      'Enables retention teams to proactively intervene with targeted incentives for top-tier churn risk subscribers before contract expiration.',
  },
  {
    id: 'uber-eats-data-analysis',
    number: '06',
    name: 'Uber Eats Data Analysis',
    category: 'Data Analytics',
    shortDescription:
      'End-to-end data analysis exploring ordering behavior, delivery time factors, customer trends, and business operations insights.',
    tags: ['Exploratory Data Analysis', 'Business Intelligence', 'Data Wrangling', 'Python', 'Statistical Insights'],
    githubUrl: 'https://github.com/Rutvi494/uber-eats-data-analysis',
    featuredMetric: 'Data-driven delivery & customer behavior insights',
    problem:
      'On-demand food delivery platforms require granular operational understanding of restaurant clustering, peak demand windows, and delivery delay bottlenecks.',
    approach:
      'Executed systematic exploratory data analysis (EDA) across multi-dimensional order records, examining geospatial patterns, rating correlations, cuisine trends, and order preparation latencies.',
    architecture: [
      'Data cleaning, datetime parsing, and categorical normalization',
      'Univariate & bivariate statistical distributions analysis',
      'Geospatial and temporal demand curve decomposition',
      'Strategic operational recommendations for delivery dispatch efficiency',
    ],
    techStack: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Jupyter Notebook'],
    outcome:
      'Uncovered peak dispatch friction points and localized cuisine demand concentrations to guide delivery platform operations.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'genai',
    name: 'Generative AI & Agents',
    skills: [
      { name: 'Azure OpenAI', level: 'Production', highlight: true, description: 'Enterprise GPT-4o deployments, Private Endpoints, API quotas, safety filters' },
      { name: 'LangChain & LangGraph', level: 'Advanced', highlight: true, description: 'Chains, stateful graph agents, cognitive memory, custom tool wrappers' },
      { name: 'CrewAI', level: 'Advanced', highlight: true, description: 'Multi-agent collaboration, autonomous role delegation, tool integration' },
      { name: 'RAG Architecture', level: 'Production', highlight: true, description: 'Hybrid search, semantic chunking, reciprocal rank fusion (RRF), re-ranking' },
      { name: 'Semantic Search & Embeddings', level: 'Production', description: 'text-embedding-3, vector similarities, cosine distance, metadata filters' },
      { name: 'Prompt Engineering', level: 'Expert', description: 'Few-shot, chain-of-thought, system instruction design, output schema enforcement' },
      { name: 'AI Agents & Tool Calling', level: 'Production', highlight: true, description: 'Function calling, deterministic JSON validation, autonomous loop controls' },
      { name: 'Hugging Face & Transformers', level: 'Advanced', description: 'Open-weights LLMs, tokenizers, PEFT, LoRA fine-tuning workflows' },
      { name: 'Claude & Gemini APIs', level: 'Advanced', description: 'Multi-modal reasoning, large context windows, grounded search integration' },
    ],
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 'Expert', highlight: true, description: 'Pipelines, cross-validation, feature selectors, ensemble regressors & classifiers' },
      { name: 'XGBoost & LightGBM', level: 'Production', highlight: true, description: 'Gradient boosted trees, credit risk modeling, fraud anomaly detection' },
      { name: 'PyTorch & TensorFlow', level: 'Advanced', description: 'Deep neural networks, CNNs for medical imaging, transfer learning' },
      { name: 'Statistical Modeling', level: 'Expert', description: 'Hypothesis testing, regression diagnostics, residual distribution analysis' },
      { name: 'Natural Language Processing (NLP)', level: 'Production', highlight: true, description: 'spaCy, clinical document extraction, sentiment & entity recognition' },
      { name: 'Explainable AI (SHAP & LIME)', level: 'Production', highlight: true, description: 'Local & global interpretability, feature contribution vectors for audits' },
      { name: 'H2O.ai & AutoML', level: 'Advanced', description: 'Automated model exploration, leaderboard benchmarking, stacking ensembles' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    skills: [
      { name: 'Azure Machine Learning', level: 'Production', highlight: true, description: 'Automated ML, managed endpoints, compute clusters, environment assets' },
      { name: 'Azure Kubernetes Service (AKS)', level: 'Production', highlight: true, description: 'Microservices container orchestration, autoscaling, ingress control' },
      { name: 'Azure Data Factory (ADF)', level: 'Production', description: 'Scalable ETL pipelines, scheduled triggers, cross-service orchestrations' },
      { name: 'Azure Blob & Data Lake Storage', level: 'Production', description: 'Hierarchical namespace, Parquet lake storage, secure private endpoints' },
      { name: 'Azure SQL & Synapse', level: 'Advanced', description: 'Enterprise data warehousing, analytical queries, schema optimization' },
      { name: 'Azure Monitor & App Insights', level: 'Production', description: 'Model drift alerting, telemetry metrics, latency tracking' },
      { name: 'AWS SageMaker & S3', level: 'Advanced', description: 'Model training instances, S3 object storage, Lambda triggers' },
    ],
  },
  {
    id: 'mlops',
    name: 'MLOps & DevOps',
    skills: [
      { name: 'Docker', level: 'Production', highlight: true, description: 'Multi-stage container builds, low-overhead inference images' },
      { name: 'Kubernetes', level: 'Production', highlight: true, description: 'Deployment manifests, resource limits, rolling model updates' },
      { name: 'CI/CD (GitHub Actions / Azure DevOps)', level: 'Production', highlight: true, description: 'Automated test suites, model validation gates, automated registry pushes' },
      { name: 'MLflow & Weights & Biases', level: 'Production', description: 'Experiment tracking, model registry, artifact storage, metric tracking' },
      { name: 'Terraform', level: 'Intermediate', description: 'Infrastructure as Code (IaC) for reproducible cloud resources' },
      { name: 'Evidently AI & Data Drift', level: 'Advanced', description: 'Data distribution shifts, prediction degradation monitoring, drift alarms' },
    ],
  },
  {
    id: 'vector',
    name: 'Vector Search & Data',
    skills: [
      { name: 'Azure AI Search', level: 'Production', highlight: true, description: 'Vector + full-text hybrid indexes, semantic ranker, index projections' },
      { name: 'Pinecone', level: 'Advanced', description: 'Serverless vector indexes, metadata filtering, low-latency similarity query' },
      { name: 'FAISS & ChromaDB', level: 'Production', description: 'High-performance vector indices, local in-memory semantic clustering' },
      { name: 'Apache Spark & PySpark', level: 'Production', highlight: true, description: 'Distributed data transformations, feature engineering at scale' },
      { name: 'Azure Databricks', level: 'Advanced', description: 'Spark runtime, collaborative notebooks, delta lake integration' },
      { name: 'Snowflake & MySQL & MongoDB', level: 'Advanced', description: 'Relational data modeling, semi-structured document storage, analytical queries' },
    ],
  },
  {
    id: 'programming',
    name: 'Languages & Analytics',
    skills: [
      { name: 'Python', level: 'Expert', highlight: true, description: 'NumPy, Pandas, AsyncIO, FastAPI, Typer, production software engineering' },
      { name: 'SQL', level: 'Expert', highlight: true, description: 'Complex analytical queries, window functions, CTEs, performance profiling' },
      { name: 'Java', level: 'Intermediate', description: 'Object-oriented backend design, data structures, enterprise services' },
      { name: 'R', level: 'Intermediate', description: 'Statistical computing, exploratory analysis, distribution verification' },
      { name: 'Power BI & Tableau', level: 'Advanced', description: 'Interactive clinical & financial dashboards, DAX queries, metric reporting' },
      { name: 'Matplotlib & Seaborn', level: 'Advanced', description: 'Publication-quality exploratory visualizations, ROC curves, confusion matrices' },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'University of Illinois Springfield',
    degree: 'Master of Science in Computer Science',
    location: 'Springfield, Illinois',
    period: 'Aug 2024 – Dec 2025',
    focus: [
      'Advanced Machine Learning & Deep Learning Architectures',
      'Distributed Cloud Systems & MLOps Pipelines',
      'Clinical Decision Support & Healthcare AI Research',
      'Natural Language Processing & LLM Grounding',
    ],
  },
  {
    institution: 'SAL Engineering and Technical Institute',
    degree: 'Bachelor of Science in Computer Engineering',
    location: 'Ahmedabad, Gujarat',
    period: 'May 2019 – May 2023',
    focus: [
      'Data Structures, Algorithms & Computational Complexity',
      'Database Management Systems & Distributed Storage',
      'Artificial Intelligence & Predictive Analytics',
      'Software Engineering & Cloud Computing Fundamentals',
    ],
  },
];

export const SYSTEM_ARCHITECTURE_LAYERS = [
  {
    step: '01',
    name: 'DATA SOURCES',
    desc: 'Heterogeneous ingestion of streaming feeds, enterprise databases, and multimodal clinical data.',
    technologies: ['Financial Market Feeds', 'Clinical PACS/EMR', 'Enterprise SQL/NoSQL', 'Azure Blob Storage'],
    icon: 'Database',
  },
  {
    step: '02',
    name: 'DATA PIPELINE',
    desc: 'Scalable ETL, schema validation, data sanitation, and distributed feature engineering.',
    technologies: ['Azure Data Factory', 'PySpark', 'Apache Spark', 'Databricks'],
    icon: 'Layers',
  },
  {
    step: '03',
    name: 'FEATURE / EMBEDDING LAYER',
    desc: 'Dense vector representations, hybrid tokenization, and semantic indexing with metadata tags.',
    technologies: ['Azure AI Search', 'OpenAI Embeddings', 'FAISS', 'Pinecone'],
    icon: 'Cpu',
  },
  {
    step: '04',
    name: 'ML MODEL / LLM',
    desc: 'Foundation reasoning models, gradient-boosted estimators, and autonomous agent loops.',
    technologies: ['Azure OpenAI', 'XGBoost', 'LangChain', 'CrewAI', 'PyTorch'],
    icon: 'Brain',
  },
  {
    step: '05',
    name: 'MODEL SERVING',
    desc: 'Low-latency containerized inference endpoints with autoscaling, health probes, and API gateways.',
    technologies: ['AKS (Kubernetes)', 'Docker', 'FastAPI Microservices', 'Private Endpoints'],
    icon: 'Server',
  },
  {
    step: '06',
    name: 'MONITORING & EXPLAINABILITY',
    desc: 'Data drift telemetry, latency tracking, hallucination guardrails, and audit-ready explainability.',
    technologies: ['Azure Monitor', 'MLflow', 'SHAP', 'LIME', 'Evidently AI'],
    icon: 'Activity',
  },
  {
    step: '07',
    name: 'BUSINESS APPLICATION',
    desc: 'High-impact enterprise products delivering measurable, high-precision outcomes.',
    technologies: ['Credit Risk Engine', 'Regulatory Knowledge Assistant', 'Clinical Diagnostics', 'Power BI'],
    icon: 'Zap',
  },
];
