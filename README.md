# Portfólio — Vanderson Erlan (Van.dev)

Portfólio profissional de **Vanderson Erlan**, Desenvolvedor Web Full Stack.
Construído com [Astro](https://astro.build/) e [TailwindCSS](https://tailwindcss.com/) com foco em altíssimo desempenho estático (Core Web Vitals 100/100), internacionalização (PT/EN) e arquitetura modular de dados.

---

## 🚀 Como Executar Localmente

1. Certifique-se de ter o Node.js instalado (v18+ ou superior).
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

## 📁 Estrutura de Arquivos

```text
src/
├── components/          # Componentes modulares (Hero, Projects, Skills, About, Contact, Navbar, Footer)
├── data/
│   ├── projects.ts      # Dados da vitrine de projetos (com flag featured: true/false)
│   ├── skills.ts        # Habilidades técnicas categorizadas
│   └── translations.ts  # Textos bilíngues (Português & Inglês)
├── layouts/
│   └── Layout.astro     # Layout HTML base, fontes e SEO
└── pages/
    ├── index.astro      # Página inicial em Português (/)
    └── en/
        └── index.astro  # Página inicial em Inglês (/en)
```

---

## ⭐ Como Trocar os 2 Projetos Principais ou Adicionar Novos

Abra o arquivo [`src/data/projects.ts`](./src/data/projects.ts):

* **Para definir os 2 projetos principais**:
  Basta colocar `featured: true` no projeto desejado e `featured: false` nos demais.
  Os projetos principais ganham automaticamente o estilo especial (card expandido, badge visual `Destaque`, borda destacada e lista detalhada de arquitetura).
* **Para adicionar um novo projeto**:
  Basta adicionar um novo objeto na lista `projectsData` seguindo a interface `Project`.

---

## 🌐 Como Atualizar Textos (PT-BR e EN)

Abra o arquivo [`src/data/translations.ts`](./src/data/translations.ts):
Todos os textos do site (apresentação, sobre mim, labels, CTAs, formação e contato) estão centralizados nos nós `pt` e `en`.

---

## 📦 Build para Produção (cPanel / Apache / Nginx / VPS)

Para gerar os arquivos estáticos finais:

```bash
npm run build
```

O comando compilará todo o site para a pasta **`dist/`**.
Basta fazer o upload do conteúdo da pasta `dist/` para a pasta `public_html` do seu cPanel ou para o diretório raiz configurado no seu servidor Nginx/Apache no domínio **`portfolio-vandev.digital`**.
