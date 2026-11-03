export interface SkillCategory {
  category: {
    pt: string;
    en: string;
  };
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: {
      pt: 'Front-end',
      en: 'Front-end'
    },
    skills: [
      { name: 'Angular 17+', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: false },
      { name: 'React', highlight: true },
      { name: 'TailwindCSS', highlight: true },
      { name: 'RxJS', highlight: false },
      { name: 'HTML5 & CSS3', highlight: false },
      { name: 'Angular Material', highlight: false }
    ]
  },
  {
    category: {
      pt: 'Back-end & APIs',
      en: 'Back-end & APIs'
    },
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'Flask', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'JWT & Auth', highlight: false },
      { name: 'Pipelines ETL', highlight: false }
    ]
  },
  {
    category: {
      pt: 'Dados, IA & DevOps',
      en: 'Data, AI & DevOps'
    },
    skills: [
      { name: 'MongoDB', highlight: true },
      { name: 'SQLite3', highlight: false },
      { name: 'Docker', highlight: true },
      { name: 'CI/CD Pipelines', highlight: true },
      { name: 'Google GenAI / LLMs', highlight: true },
      { name: 'Git & GitHub', highlight: false },
      { name: 'Cloud Concepts (AWS/Azure)', highlight: false }
    ]
  }
];
