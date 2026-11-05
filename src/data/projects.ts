export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  importanceOrder: number; // 1 = mais importante, 2, 3...
  summary: string;
  technologies: string[];
  githubUrl?: string;
  githubBackendUrl?: string;
  githubFrontendUrl?: string;
  liveUrl?: string;
  videoUrl?: string; // Opcional: URL do vídeo demonstrativo (mp4 ou embed youtube/loom)
  screenshots?: {
    url: string;
    caption: string;
  }[]; // Opcional: Lista de capturas de tela
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
    slug: 'rota-financeira',
    title: 'Rota Financeira — Plataforma de Gestão para Motoristas',
    subtitle: 'Sistema full stack com FastAPI, PostgreSQL e Angular SSR focado em métricas reais de rentabilidade.',
    importanceOrder: 1,
    summary: 'Plataforma SaaS desenvolvida para motoristas de aplicativo (Uber, 99) calcularem seu lucro real por hora e custo por quilômetro rodado, superando a ilusão de faturamento bruto com controle detalhado de custos fixos e variáveis do veículo.',
    technologies: ['FastAPI', 'Python', 'Angular 17+', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'JWT & OAuth', 'SSR'],
    githubBackendUrl: 'https://github.com/Sr-Van/rota_fin_api',
    githubFrontendUrl: 'https://github.com/Sr-Van/rota-financeira',
    liveUrl: '',
    videoUrl: '',
    screenshots: [],
    content: {
      context: 'Motoristas autônomos no Brasil frequentemente têm dificuldade em calcular se sua operação é verdadeiramente lucrativa após descontar combustível, manutenção periódica, seguro e depreciação veicular.',
      problem: 'A maioria dos aplicativos de finanças são complexos ou demandam tempo de preenchimento inviável para quem está na rua. O motorista precisa de entrada ágil de dados com uma só mão e visualização imediata da rentabilidade real entre corridas.',
      solution: 'Desenvolvi um ecossistema full stack com uma API REST assíncrona em FastAPI (Python) com PostgreSQL e migrações versionadas, acompanhado por um front-end moderno em Angular com Server-Side Rendering (SSR) e layout utilitário focado em agilidade no mobile.',
      architecture: [
        'Back-end em Python assíncrono com FastAPI, validação estrita com Pydantic e documentação automática Swagger/OpenAPI.',
        'Persistência em PostgreSQL orquestrada com SQLAlchemy, utilizando migrations rigorosamente versionadas com Alembic.',
        'Autenticação stateless robusta via JWT e Google OAuth, com hashing seguro de senhas (bcrypt) e hashing unidirecional para proteção de dados sensíveis (como CPF).',
        'Front-end em Angular com arquitetura modular baseada em features (rotas, core, models e shared) e suporte a Server-Side Rendering (SSR).',
        'Design mobile-first de alto contraste, sem distrações visuais, desenhado especificamente para uso dinâmico em smartphones.'
      ],
      learnings: [
        'Gerenciamento profissional de ciclo de vida de banco de dados e migrações com Alembic em ambientes produtivos.',
        'Modelagem financeira com agregação eficiente de dados para cálculo de métricas em tempo real (lucro por hora e custo por km).',
        'Implementação de Server-Side Rendering (SSR) no Angular para garantir renderização instantânea em conexões móveis.'
      ]
    }
  },
  {
    slug: 'auto-cut-video',
    title: 'AutoCut Video — Automação de Cortes com IA & Whisper',
    subtitle: 'Aplicação desktop em Python e PySide6 para transcrição local e geração de cortes inteligentes via LLMs.',
    importanceOrder: 2,
    summary: 'Software desktop para automação do fluxo de pós-produção audiovisual: realiza a extração de áudio, transcrição local via Whisper, identificação de ganchos virais com a API do Google Gemini e renderização automática de cortes com legendas sincronizadas.',
    technologies: ['Python', 'PySide6 (Qt)', 'Faster-Whisper', 'Google GenAI (Gemini)', 'FFmpeg', 'Audio/Video Processing'],
    githubUrl: 'https://github.com/Sr-Van/auto-cut-video',
    liveUrl: '',
    videoUrl: '',
    screenshots: [],
    content: {
      context: 'Com a ascensão de formatos curtos como Reels, TikTok e YouTube Shorts, criadores e editores perdem horas preciosas assistindo a vídeos longos para garimpar trechos de alto engajamento.',
      problem: 'O trabalho manual de minutagem, corte de trechos relevantes e adição de legendas sincronizadas consome um tempo desproporcional que poderia ser dedicado à criação de conteúdo.',
      solution: 'Construção de uma aplicação desktop em Python com PySide6 (Qt) que automatiza a esteira completa: gera a transcrição com timestamps precisos usando o Faster-Whisper localmente, consulta o Google Gemini para selecionar os momentos mais impactantes e renderiza os clipes finais com cortes precisos via FFmpeg.',
      architecture: [
        'Interface gráfica reativa e moderna para desktop construída em Python com PySide6 (Qt for Python).',
        'Pipeline de áudio desacoplado: extração e normalização sonora combinadas ao modelo de Speech-to-Text Faster-Whisper com timestamps por palavra.',
        'Módulo inteligente de análise semântica integrando o Google GenAI (Gemini) com prompts estruturados para identificação de tópicos, ganchos e retenção de público.',
        'Motor de operações de mídia e renderização com FFmpeg para cortes cirúrgicos de vídeo e geração dinâmica de legendas animadas.',
        'Sistema de cache inteligente em disco para evitar transcrições redundantes e chamadas desnecessárias à API de IA.'
      ],
      learnings: [
        'Engenharia de processamento assíncrono em aplicações desktop com workers desacoplados para não congelar a interface gráfica durante renderizações pesadas.',
        'Manipulação programática de mídia e sincronização precisa de legendas com timestamps temporais.',
        'Integração de modelos de linguagem (LLMs) com respostas estritas para automação determinística de edição audiovisual.'
      ]
    }
  },
  {
    slug: 'marketplace-p2p',
    title: 'Marketplace P2P para Jogos Online',
    subtitle: 'Plataforma para negociação e troca segura de itens entre jogadores em tempo real.',
    importanceOrder: 3,
    summary: 'Sistema full stack (Front-end e Back-end) desenvolvido para tornar seguras as transações de itens entre jogadores de um jogo online, com autenticação, validação de integridade e atualização reativa.',
    technologies: ['Angular 17', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'RxJS', 'JWT', 'CI/CD'],
    githubBackendUrl: 'https://github.com/Sr-Van/otp-P2P-api',
    githubFrontendUrl: 'https://github.com/Sr-Van/otp2p-frontend',
    liveUrl: 'https://portfolio-vandev.digital',
    videoUrl: '',
    screenshots: [],
    content: {
      context: 'Em jogos online com economia ativa, as trocas diretas entre jogadores costumam ser alvo de fraudes, falta de histórico confiável e baixa praticidade.',
      problem: 'Jogadores precisavam de um ambiente intermediário confiável que garantisse que os itens negociados fossem entregues com segurança e autenticação das partes envolvidas.',
      solution: 'Desenvolvi um marketplace Player-to-Player completo com catálogo de itens, gerenciamento de propostas de troca, autenticação via JSON Web Tokens e integração contínua (CI/CD) para deploy automatizado.',
      architecture: [
        'Back-end em Node.js com Express e arquitetura modular de rotas, middlewares de segurança e controllers.',
        'Autenticação stateless robusta com JWT e criptografia de credenciais.',
        'Banco de dados NoSQL MongoDB para persistência flexível de itens, inventários e transações.',
        'Front-end em Angular 17 usando Standalone Components, tipagem estrita com TypeScript e RxJS para gerenciamento reativo do estado da aplicação.',
        'Pipeline automatizada de CI/CD para build, testes e deploy consistente entre ambientes.'
      ],
      learnings: [
        'Aprofundamento na reatividade do Angular 17 e operadores do RxJS para fluxos assíncronos complexos.',
        'Estruturação de APIs REST seguras e modelagem de dados NoSQL para cenários transacionais.',
        'Padronização de esteiras de automação com CI/CD e publicação em ambiente próprio de produção.'
      ]
    }
  },
  {
    slug: 'classificador-emails-genai',
    title: 'Classificador de E-mails com Python & GenAI',
    subtitle: 'Pipeline de ETL, extração de texto de anexos e categorização inteligente com LLMs.',
    importanceOrder: 4,
    summary: 'Aplicação full stack para classificação automatizada de e-mails em produtivos ou não-produtivos, com suporte a texto bruto e arquivos (.pdf e .txt), pipeline de preparação de dados e sugestão de respostas via IA.',
    technologies: ['Python', 'Flask', 'Google GenAI (LLM)', 'NLTK', 'PyPDF', 'Docker', 'HTML5', 'TailwindCSS'],
    githubUrl: 'https://github.com/Sr-Van/projeto-ia-monorepo',
    liveUrl: '',
    videoUrl: '',
    screenshots: [],
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
  },
  {
    slug: 'kanban-oficina-rad',
    title: 'OficinaRAD — Gestão Visual Kanban com Metodologia Ágil',
    subtitle: 'Sistema interativo de ordens de serviço com drag-and-drop e metodologia RAD em Angular 17.',
    importanceOrder: 5,
    summary: 'Aplicação de gestão visual de ordens de serviço para oficinas mecânicas construída sob a metodologia ágil Rapid Application Development (RAD), permitindo o acompanhamento de veículos e serviços em tempo real através de um quadro Kanban dinâmico.',
    technologies: ['Angular 17', 'TypeScript', 'Angular CDK (Drag & Drop)', 'Angular SSR', 'TailwindCSS', 'Metodologia RAD'],
    githubUrl: 'https://github.com/Sr-Van/kanban-oficina-RAD',
    liveUrl: '',
    videoUrl: '',
    screenshots: [],
    content: {
      context: 'Em oficinas mecânicas e centros automotivos, o status de cada ordem de serviço (diagnóstico, aguardando peças, em execução, pronto) frequentemente se perde em ordens em papel ou planilhas desatualizadas.',
      problem: 'A falta de visibilidade em tempo real gera atrasos na entrega dos veículos, ociosidade na oficina e ruídos constantes na comunicação com os clientes.',
      solution: 'Desenvolvimento de uma aplicação web com quadro Kanban fluido e interativo, construída sob os preceitos da metodologia RAD (prototipagem e iteração rápidas com foco no usuário final), permitindo mover veículos entre colunas com arrastar e soltar instantâneo.',
      architecture: [
        'Front-end construído em Angular 17 com Standalone Components e tipagem estrita com TypeScript.',
        'Interação avançada de arrastar e soltar (Drag and Drop) implementada com @angular/cdk/drag-drop, suportando transição suave entre múltiplas colunas e reordenação interna.',
        'Configuração com Angular Server-Side Rendering (SSR) para renderização inicial otimizada e velocidade de carregamento.',
        'Organização modular de código com isolamento de responsabilidades entre quadro de tarefas (board) e componentes compartilhados (shared).',
        'Estilização moderna e responsiva utilizando TailwindCSS para adaptação em tablets e desktops de bancada.'
      ],
      learnings: [
        'Domínio da manipulação de estados complexos e reordenação de arrays bidimensionais com o CDK do Angular.',
        'Aplicação prática dos ciclos iterativos da metodologia RAD no design de software corporativo.',
        'Configuração e boas práticas de Server-Side Rendering no ecossistema moderno do Angular.'
      ]
    }
  }
];
