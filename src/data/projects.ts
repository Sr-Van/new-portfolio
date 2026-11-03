export interface Project {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  summary: {
    pt: string;
    en: string;
  };
  description: {
    pt: string[];
    en: string[];
  };
  technologies: string[];
  featured: boolean; // Defina como true para os 2 projetos principais
  badgeText?: {
    pt: string;
    en: string;
  };
  category: 'fullstack' | 'backend' | 'frontend' | 'ai';
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'marketplace-p2p',
    title: {
      pt: 'Marketplace P2P para Jogos Online',
      en: 'P2P Marketplace for Online Games'
    },
    summary: {
      pt: 'Sistema seguro de troca e negociação de itens entre jogadores com autenticação e tempo real.',
      en: 'Secure item trading and negotiation platform between players with authentication and real-time state.'
    },
    description: {
      pt: [
        'Criei um Marketplace Player-to-Player para gerenciamento seguro e prático de trocas de itens.',
        'Desenvolvi a REST API completa utilizando Node.js, Express, autenticação JWT e MongoDB.',
        'Construí o Front-end moderno e reativo em Angular 17, TypeScript, padrão RxJS e Angular Material.',
        'Implementei pipeline de CI/CD automatizado garantindo consistência entre desenvolvimento e produção.'
      ],
      en: [
        'Built a Player-to-Player marketplace for secure and practical item trades.',
        'Developed full REST API using Node.js, Express, JWT authentication and MongoDB.',
        'Constructed reactive modern front-end using Angular 17, TypeScript, RxJS and Angular Material.',
        'Implemented automated CI/CD pipeline ensuring consistency between dev and production environments.'
      ]
    },
    technologies: ['Angular 17', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'RxJS', 'JWT', 'CI/CD'],
    featured: true,
    badgeText: {
      pt: 'Projeto Principal • Destaque',
      en: 'Flagship Project • Featured'
    },
    category: 'fullstack',
    githubUrl: 'https://github.com/Sr-Van',
    liveUrl: 'https://portfolio-vandev.digital'
  },
  {
    id: 'genai-email-classifier',
    title: {
      pt: 'Classificador de E-mails com Python & GenAI',
      en: 'Email Classifier with Python & GenAI'
    },
    summary: {
      pt: 'Classificação inteligente de e-mails produtivos com extração de arquivos, pipeline ETL e sugestão de respostas com IA.',
      en: 'Intelligent productivity email classifier featuring document text extraction, ETL pipeline and AI suggested replies.'
    },
    description: {
      pt: [
        'Solução de processamento de texto e anexos (.pdf, .txt) classificando e-mails como produtivos ou improdutivos.',
        'Back-end em Python com Flask, rate limiter, nltk e integração com Google GenAI / LLMs.',
        'Pipeline de ETL com tokenização e stemmização para preparação de dados textuais para o modelo.',
        'Arquitetura em monorepo Dockerizada para testes locais e deploy isolado.'
      ],
      en: [
        'Automated text and attachment (.pdf, .txt) processing classifying emails as productive or non-productive.',
        'Python Flask backend with rate limiting, NLTK, and Google GenAI / LLM integration.',
        'ETL pipeline with tokenization and stemming for textual data preparation.',
        'Dockerized monorepo architecture for local testing and isolated deployment.'
      ]
    },
    technologies: ['Python', 'Flask', 'Google GenAI', 'NLTK', 'Docker', 'ETL', 'TailwindCSS', 'JavaScript'],
    featured: true,
    badgeText: {
      pt: 'Projeto Principal • Destaque',
      en: 'Flagship Project • Featured'
    },
    category: 'ai',
    githubUrl: 'https://github.com/Sr-Van',
    liveUrl: 'https://portfolio-vandev.digital'
  },
  {
    id: 'portfolio-vandev',
    title: {
      pt: 'Portfólio Web Moderno & Performático',
      en: 'Modern & High-Performance Web Portfolio'
    },
    summary: {
      pt: 'Portfólio desenvolvido com arquitetura estática, ilhas de hidratação, suporte bilíngue e alta performance.',
      en: 'Portfolio developed with static architecture, hydration islands, bilingual support and 100/100 Lighthouse performance.'
    },
    description: {
      pt: [
        'Construído com Astro e TailwindCSS visando pontuação máxima em SEO, acessibilidade e Core Web Vitals.',
        'Suporte nativo a múltiplos idiomas (PT-BR e EN) com alternância fluida.',
        'Componentes modulares e tipagem estrita em TypeScript.'
      ],
      en: [
        'Engineered with Astro and TailwindCSS targeting maximum scores in SEO, accessibility and Core Web Vitals.',
        'Native multilingual support (PT-BR and EN) with seamless switching.',
        'Modular architecture and strict TypeScript typing.'
      ]
    },
    technologies: ['Astro', 'TypeScript', 'TailwindCSS', 'HTML5', 'i18n'],
    featured: false,
    badgeText: {
      pt: 'Projeto Secundário',
      en: 'Secondary Project'
    },
    category: 'frontend',
    githubUrl: 'https://github.com/Sr-Van/portfolio',
    liveUrl: 'https://portfolio-vandev.digital'
  }
];
