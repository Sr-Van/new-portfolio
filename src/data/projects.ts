export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  importanceOrder: number; // 1 = mais importante, 2, 3...
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string; // URL do vídeo demonstrativo (mp4 ou embed youtube/loom)
  screenshots?: {
    url: string;
    caption: string;
  }[];
  content: {
    context: string;
    problem: string;
    solution: string;
    architecture: string[];
    learnings: string[];
  };
}

export const projectsList: ProjectDetail[] = [
  {
    slug: 'marketplace-p2p',
    title: 'Marketplace P2P para Jogos Online',
    subtitle: 'Plataforma para negociação e troca segura de itens entre jogadores em tempo real.',
    importanceOrder: 1,
    summary: 'Sistema completo (Front-end e Back-end) desenvolvido para tornar seguras as trocas de itens entre jogadores de um jogo online, com autenticação, validação de transações e atualização reativa.',
    technologies: ['Angular 17', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'RxJS', 'JWT', 'CI/CD'],
    githubUrl: 'https://github.com/Sr-Van',
    liveUrl: 'https://portfolio-vandev.digital',
    videoUrl: '', // Adicione o link do vídeo quando disponível
    screenshots: [
      {
        url: '/images/marketplace-preview.png',
        caption: 'Interface de listagem de itens e negociação P2P'
      }
    ],
    content: {
      context: 'Em jogos online com economia ativa, as trocas diretas entre jogadores costumam ser alvo de fraudes, falta de histórico confiável e baixa praticidade.',
      problem: 'Jogadores precisavam de um ambiente intermediário confiável que garantisse que os itens negociados fossem entregues com segurança e autenticação das partes envolvidas.',
      solution: 'Desenvolvi um marketplace Player-to-Player completo com catálogo de itens, gerenciamento de propostas de troca, autenticação via JSON Web Tokens e integração contínua (CI/CD) para deploy automatizado.',
      architecture: [
        'Back-end em Node.js com Express e arquitetura modular de rotas e controllers.',
        'Autenticação stateless robusta com JWT e senhas criptografadas.',
        'Banco de dados NoSQL MongoDB para persistência flexível de itens, inventários e transações.',
        'Front-end em Angular 17 usando Standalone Components, tipagem estrita com TypeScript e RxJS para gerenciamento reativo do estado da aplicação.',
        'Pipeline automatizada de CI/CD para build, testes e deploy consistente entre ambientes.'
      ],
      learnings: [
        'Aprofundamento na reatividade do Angular 17 e operadores do RxJS para fluxos assíncronos complexos.',
        'Estruturação de APIs REST seguras e modelagem de dados NoSQL para cenários transacionais.',
        'Padronização de esteiras de automação com CI/CD.'
      ]
    }
  },
  {
    slug: 'classificador-emails-genai',
    title: 'Classificador de E-mails com Python & GenAI',
    subtitle: 'Pipeline de ETL, extração de texto de anexos e categorização inteligente com LLMs.',
    importanceOrder: 2,
    summary: 'Aplicação full stack para classificação automatizada de e-mails em produtivos ou não-produtivos, com suporte a texto bruto e arquivos (.pdf e .txt), pipeline de preparação de dados e sugestão de respostas via IA.',
    technologies: ['Python', 'Flask', 'Google GenAI (LLM)', 'NLTK', 'PyPDF', 'Docker', 'HTML5', 'TailwindCSS'],
    githubUrl: 'https://github.com/Sr-Van',
    liveUrl: '',
    videoUrl: '',
    screenshots: [
      {
        url: '/images/genai-classifier-preview.png',
        caption: 'Painel de upload e resultado da classificação da IA'
      }
    ],
    content: {
      context: 'Caixas de entrada corporativas recebem diariamente centenas de e-mails, exigindo tempo manual expressivo para filtrar o que exige ação imediata versus informativos ou spam.',
      problem: 'Identificar com precisão o conteúdo relevante, extrair dados de anexos em formatos variados e gerar rascunhos de respostas inteligentes sem sobrecarregar a equipe.',
      solution: 'Criação de uma API em Python/Flask dividida em microsserviços/módulos para ingestão de dados, sanitização com NLTK, integração com Google GenAI para tomada de decisão e interface limpa para consumo.',
      architecture: [
        'API em Python e Flask com suporte a CORS e Rate Limiting para controle de requisições.',
        'Pipeline ETL dedicada: leitura e validação de tamanho de PDFs com PyPDF, tokenização e stemmização com NLTK para estruturação da base de dados.',
        'Módulo inteligente integrando o modelo de linguagem do Google GenAI para inferência de produtividade e geração de resposta sugerida.',
        'Monorepo empacotado em containers Docker para testes locais rápidos e deploy replicável.',
        'Front-end direto e funcional com HTML5, JavaScript moderno e estilização via TailwindCSS.'
      ],
      learnings: [
        'Prática aprofundada de pré-processamento de dados textuais para alimentação de modelos de linguagem.',
        'Isolamento de serviços de inferência e tratamento de limites de taxa de APIs de LLMs.',
        'Contêinerização de ambientes Python com Docker.'
      ]
    }
  }
];
