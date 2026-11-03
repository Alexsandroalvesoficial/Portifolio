/**
 * Projetos Selecionados
 * Categorias disponíveis: "Sites", "Aplicações", "Outros projetos"
 * 
 * Regra: Quando `siteUrl` for null/vazio, a interface não renderiza botão quebrado.
 * Se `imageUrl` for null/vazio, a interface renderiza um mockup elegante com o nome e badges do projeto.
 */
export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "sites", label: "Sites" },
  { id: "aplicacoes", label: "Aplicações" },
  { id: "outros", label: "Outros projetos" }
];

export const projects = [
  {
    id: "dev-academy",
    title: "DEV ACADEMY",
    category: "Sites",
    categoryId: "sites",
    featured: true,
    siteUrl: "https://dev-academy-rouge.vercel.app/",
    instagramUrl: "https://www.instagram.com/devacademybrasil/",
    description:
      "Plataforma digital focada em formação, recursos e capacitação prática para novos desenvolvedores de software.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Vercel"],
    imageUrl: null, // Caso tenha captura de tela, informe o caminho (ex: "/assets/images/dev-academy.png")
    status: "Online",
    year: "2024"
  },
  {
    id: "design-academy",
    title: "DESIGN ACADEMY",
    category: "Sites",
    categoryId: "sites",
    featured: true,
    siteUrl: "https://site-design-future-two.vercel.app/",
    instagramUrl: "https://www.instagram.com/designacademy.psd/",
    description:
      "Ambiente digital dedicado a referências visuais, design de interfaces UI/UX, estética moderna e criatividade visual.",
    technologies: ["Web Design", "UI/UX", "Frontend", "Vercel"],
    imageUrl: null, // Suporta screenshot real quando adicionada
    status: "Online",
    year: "2024"
  },
  {
    id: "elo-contabil",
    title: "ELO CONTÁBIL BRASIL",
    category: "Aplicações",
    categoryId: "aplicacoes",
    featured: true,
    siteUrl: null, // Site ainda em desenvolvimento — nenhum link quebrado é exibido!
    instagramUrl: "https://www.instagram.com/elocontabilbrasil/",
    description:
      "Iniciativa integrando inteligência contábil, processos gerenciais e tecnologia para negócios e profissionais.",
    technologies: ["Contabilidade", "Gestão", "Tecnologia", "Em Breve"],
    imageUrl: null,
    status: "Em Desenvolvimento",
    year: "2024"
  },
  {
    id: "dan-portfolio",
    title: "PORTFÓLIO DAN CODE",
    category: "Sites",
    categoryId: "sites",
    featured: false,
    siteUrl: "#", // Link local ou atual
    instagramUrl: "https://www.instagram.com/dan_bnh/",
    description:
      "Identidade visual e portfólio autoral projetado com arquitetura moderna em React, Vite e design editorial responsivo.",
    technologies: ["React", "Vite", "CSS Modular", "Lucide Icons"],
    imageUrl: null,
    status: "Em Produção",
    year: "2024"
  }
];
