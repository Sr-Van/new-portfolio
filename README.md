# Portfólio — Vanderson Erlan (Van.dev)

Portfólio profissional de **Vanderson Erlan**, Desenvolvedor Web Full Stack.
Construído com [Astro v5](https://astro.build/) e [TailwindCSS v3](https://tailwindcss.com/) com foco em estética minimalista *terminal-like*, altíssimo desempenho estático (Core Web Vitals 100/100), tipografia monoespaçada (JetBrains Mono / Nerd Font) e arquitetura modular de dados.

---

## 🚀 Como Executar Localmente

1. Certifique-se de ter o **Node.js** instalado (v18+ ou superior).
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse pelo navegador: `http://localhost:4321`

---

## 📁 Estrutura do Projeto

```text
src/
├── data/
│   ├── projects.ts       # Lista tipada de projetos (ProjectDetail) e estudos de caso
│   ├── skills.ts         # Habilidades técnicas categorizadas e flags de destaque
│   ├── tools.ts          # Ferramentas diárias, ambiente e infraestrutura
│   └── translations.ts   # Estrutura base para conteúdo e metadados
├── layouts/
│   └── Layout.astro      # Layout base, fontes (JetBrains Mono), container e estilos globais
└── pages/
    ├── index.astro       # Página inicial (apresentação e menu de navegação)
    ├── ferramentas.astro # Ferramentas, editores e sistemas
    ├── formacao.astro    # Formação acadêmica e idiomas
    ├── habilidades.astro # Habilidades técnicas com marcadores de foco
    ├── links.astro       # Links externos (GitHub, LinkedIn, e-mail e currículo)
    └── projetos/
        ├── index.astro   # Listagem de projetos ordenados por importância
        └── [slug].astro  # Estudo de caso individual e detalhado gerado dinamicamente
public/
├── favicon.svg           # Ícone do site
└── images/               # Screenshots e capturas de tela dos projetos
```

---

## 🛠️ Como Adicionar e Gerenciar Projetos

Todos os dados de projetos estão centralizados em [`src/data/projects.ts`](./src/data/projects.ts).

### 1. Adicionar um novo projeto
Basta incluir um novo objeto na lista `projectsList` implementando a interface `ProjectDetail`:

```typescript
{
  slug: 'meu-projeto',
  title: 'Título do Projeto',
  subtitle: 'Breve descrição em uma linha.',
  importanceOrder: 3, // Ordem de exibição (1 = mais importante)
  summary: 'Resumo geral sobre o escopo e valor da aplicação.',
  technologies: ['TypeScript', 'Node.js', 'PostgreSQL'],
  githubUrl: 'https://github.com/Sr-Van/meu-projeto', // ou use githubBackendUrl / githubFrontendUrl para projetos desacoplados
  githubBackendUrl: 'https://github.com/Sr-Van/meu-projeto-api', // opcional
  githubFrontendUrl: 'https://github.com/Sr-Van/meu-projeto-web', // opcional
  liveUrl: 'https://exemplo.com',
  videoUrl: '', // opcional: URL do vídeo (se vazio, a seção não é renderizada)
  screenshots: [], // opcional: lista de imagens (se vazio, a seção não é renderizada)
  content: {
    context: 'Contexto e cenário de mercado ou do problema.',
    problem: 'O desafio específico que precisava ser resolvido.',
    solution: 'Como a aplicação foi desenhada para resolver o problema.',
    architecture: [
      'Decisão de arquitetura 1...',
      'Decisão de arquitetura 2...'
    ],
    learnings: [
      'Aprendizado técnico ou resultado alcançado 1...',
      'Aprendizado técnico ou resultado alcançado 2...'
    ]
  }
}
```

> **Nota:** As páginas individuais `/projetos/[slug]` são geradas estaticamente de forma automática pelo Astro via `getStaticPaths()`.

### 2. Alterar a ordem de exibição
Altere o campo `importanceOrder` de cada projeto (`1` para o principal, `2`, `3`, etc.). A listagem em `/projetos` ordena automaticamente de forma crescente.

---

## 🧠 Como Atualizar Habilidades e Ferramentas

* **Habilidades:** Edite [`src/data/skills.ts`](./src/data/skills.ts). Adicione tecnologias nas categorias correspondentes (`Front-end`, `Back-end & APIs`, `Dados, IA & DevOps`) e use `highlight: true` para marcar as competências de foco principal com a tag `[foco]`.
* **Ferramentas:** Edite [`src/data/tools.ts`](./src/data/tools.ts) para atualizar sistemas operacionais, editores, terminais, containers e serviços de nuvem.

---

## 📄 Arquivos Estáticos (Currículo e Imagens)

Para disponibilizar arquivos para download ou exibição:
* **Currículo em PDF:** Coloque o arquivo em `public/curriculo-vanderson.pdf` para corresponder ao link configurado em [`src/pages/links.astro`](./src/pages/links.astro).
* **Screenshots:** Coloque as imagens na pasta `public/images/` referenciando-as nos projetos (ex: `/images/marketplace-preview.png`).

---

## 📦 Build para Produção (VPS / Nginx / Apache / cPanel)

Para gerar os arquivos estáticos finais:

```bash
npm run build
```

O Astro compilará todos os arquivos estáticos na pasta **`dist/`**.
Basta transferir o conteúdo da pasta `dist/` para a raiz de publicação do servidor web (ex: `/var/www/html` no Nginx/Apache ou pasta `public_html` no cPanel).
