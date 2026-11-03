/**
 * Conhecimentos e Áreas de Interesse
 * Classificados rigorosamente em:
 * 1. "atual" -> Conhecimentos Atuais / Em Prática
 * 2. "aprendizado" -> Tecnologias em Aprendizado
 * 3. "interesse" -> Áreas de Interesse / Exploração
 */
export const skillCategories = [
  { id: "all", label: "Todos os Conhecimentos" },
  { id: "atual", label: "Conhecimentos Atuais" },
  { id: "aprendizado", label: "Em Aprendizado" },
  { id: "interesse", label: "Áreas de Interesse" }
];

export const skills = [
  {
    id: "dev-web",
    name: "Desenvolvimento Web",
    type: "atual",
    typeLabel: "Conhecimento Atual",
    iconName: "Globe",
    shortDescription:
      "Construção de interfaces e páginas modernas com foco em semântica HTML5, estilização estruturada em CSS3 e boas práticas.",
    tags: ["HTML5", "CSS3", "Design Responsivo", "Vercel"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    type: "atual",
    typeLabel: "Conhecimento Atual",
    iconName: "FileCode2",
    shortDescription:
      "Fundamentos da linguagem, manipulação do DOM, funções assíncronas, consumo de dados e lógica de programação aplicada.",
    tags: ["ES6+", "Lógica", "Frontend", "Scripts"]
  },
  {
    id: "react",
    name: "Ecossistema React",
    type: "aprendizado",
    typeLabel: "Em Aprendizado",
    iconName: "Code",
    shortDescription:
      "Desenvolvimento de interfaces baseadas em componentes reutilizáveis, gerenciamento de estado e arquitetura SPA.",
    tags: ["React", "Vite", "Componentização", "Hooks"]
  },
  {
    id: "dev-sistemas",
    name: "Desenvolvimento de Sistemas",
    type: "aprendizado",
    typeLabel: "Em Aprendizado",
    iconName: "Layers",
    shortDescription:
      "Estudo da estruturação de sistemas, fluxo de dados, lógica de backend, modelagem de banco de dados e APIs.",
    tags: ["Arquitetura", "Lógica de Sistemas", "Fluxo de Dados"]
  },
  {
    id: "ia",
    name: "Inteligência Artificial",
    type: "interesse",
    typeLabel: "Área de Interesse",
    iconName: "Sparkles",
    shortDescription:
      "Exploração do uso prático de IA generativa, agentes de código e automação para potencializar o desenvolvimento.",
    tags: ["IA Aplicada", "Engenharia de Prompt", "Automação"]
  },
  {
    id: "analise-dados",
    name: "Análise de Dados",
    type: "interesse",
    typeLabel: "Área de Interesse",
    iconName: "BarChart3",
    shortDescription:
      "Interesse no tratamento, análise e visualização de dados para geração de insights e tomada de decisões estratégicas.",
    tags: ["Visualização", "Insights", "Métricas", "Relatórios"]
  },
  {
    id: "contabilidade-tech",
    name: "Contabilidade e Tecnologia",
    type: "atual",
    typeLabel: "Conhecimento Aplicado",
    iconName: "Calculator",
    shortDescription:
      "Integração entre conhecimento contábil e ferramentas digitais para controle financeiro, processos e conformidade fiscal.",
    tags: ["Gestão Financeira", "Processos Contábeis", "Visão de Negócio"]
  },
  {
    id: "git-versionamento",
    name: "Controle de Versão (Git/GitHub)",
    type: "atual",
    typeLabel: "Conhecimento Atual",
    iconName: "GitBranch",
    shortDescription:
      "Controle de versionamento de projetos, colaboração em repositórios remotos e gerenciamento de commits no GitHub.",
    tags: ["Git", "GitHub", "Versionamento"]
  }
];
