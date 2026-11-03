/**
 * Dados da Página de Certificados
 * Estrutura pronta para Alexsandro cadastrar e atualizar seus certificados.
 */
export const certificateCategories = [
  { id: "all", label: "Todos os Certificados" },
  { id: "tech", label: "Tecnologia & Programação" },
  { id: "business", label: "Contabilidade & Negócios" },
  { id: "foundations", label: "Fundamentos & Outros" }
];

export const certificates = [
  {
    id: "cert-dev-web",
    title: "Desenvolvimento Web & JavaScript Moderno",
    institution: "Plataforma de Tecnologia",
    category: "tech",
    categoryLabel: "Tecnologia & Programação",
    issueDate: "2024",
    workload: "60 horas",
    credentialCode: "DEV-JS-2024",
    skills: ["JavaScript", "HTML5", "CSS3", "Git"],
    description: "Construção de aplicações interativas, manipulação do DOM e boas práticas de código.",
    certificateUrl: null, // Cole o link do seu certificado (ex: link do PDF ou plataforma)
    imageUrl: null // Cole o caminho da imagem do certificado se houver (ex: "/assets/images/certificados/web.png")
  },
  {
    id: "cert-logica-algoritmos",
    title: "Lógica de Programação e Estruturas de Dados",
    institution: "Formação Técnica",
    category: "foundations",
    categoryLabel: "Fundamentos de Software",
    issueDate: "2023",
    workload: "40 horas",
    credentialCode: "LOG-ALG-2023",
    skills: ["Lógica", "Algoritmos", "Resolução de Problemas"],
    description: "Fundamentos essenciais da ciência da computação e raciocínio lógico estruturado.",
    certificateUrl: null,
    imageUrl: null
  },
  {
    id: "cert-contabilidade-fiscal",
    title: "Gestão Financeira e Contabilidade Prática",
    institution: "Área Acadêmica Contábil",
    category: "business",
    categoryLabel: "Contabilidade & Negócios",
    issueDate: "2023",
    workload: "80 horas",
    credentialCode: "CONT-FIN-2023",
    skills: ["Análise Financeira", "Processos Contábeis", "Fluxo de Caixa"],
    description: "Visão estratégica de negócios, processos contábeis e conformidade financeira.",
    certificateUrl: null,
    imageUrl: null
  },
  {
    id: "cert-git-github",
    title: "Controle de Versão com Git & GitHub",
    institution: "Cursos Livres de Tecnologia",
    category: "tech",
    categoryLabel: "Tecnologia & Programação",
    issueDate: "2024",
    workload: "20 horas",
    credentialCode: "GIT-GH-2024",
    skills: ["Git", "GitHub", "Versionamento", "Commits"],
    description: "Gerenciamento de repositórios, fluxo de trabalho em equipe e versionamento profissional.",
    certificateUrl: null,
    imageUrl: null
  }
];
