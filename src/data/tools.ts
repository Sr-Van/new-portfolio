export interface ToolGroup {
  category: string;
  items: {
    name: string;
    description: string;
  }[];
}

export const toolsList: ToolGroup[] = [
  {
    category: 'Ambiente & Sistema',
    items: [
      { name: 'Windows / WSL2 & Linux', description: 'Ambientes principais para desenvolvimento e execução de containers.' },
      { name: 'PowerShell / Zsh', description: 'Terminais para automação, navegação e comandos de build.' }
    ]
  },
  {
    category: 'Editores & Ferramentas',
    items: [
      { name: 'Visual Studio Code', description: 'Editor principal de código configurado para TypeScript, Python e Angular.' },
      { name: 'Git & GitHub CLI', description: 'Controle de versão, ramificações e gerenciamento de repositórios.' },
      { name: 'Docker & Docker Compose', description: 'Isolamento de dependências, bancos de dados locais e containers de serviços.' },
      { name: 'Postman / Insomnia / Bruno', description: 'Teste e documentação de endpoints REST APIs.' }
    ]
  },
  {
    category: 'Nuvem & Infraestrutura',
    items: [
      { name: 'Servidor VPS / Nginx', description: 'Hospedagem estática e gerenciamento de proxies reversos para APIs.' },
      { name: 'Conceitos AWS & Azure', description: 'Computação em nuvem, armazenamento de objetos e esteiras de integração.' }
    ]
  }
];
