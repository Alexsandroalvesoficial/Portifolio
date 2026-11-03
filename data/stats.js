/**
 * Indicadores e Destaques Institucionais
 * Faixa horizontal escura semelhante à referência.
 * 
 * Regra: Quando `value` for nulo ou vazio, a interface renderiza de forma
 * elegante como destaque institucional sem métricas fictícias.
 */
export const statsConfig = {
  showNumbers: false, // Alterne para true quando quiser exibir números e métricas reais
  items: [
    {
      id: "stat-1",
      iconName: "Code2",
      value: "", // Ex: "03+" quando quiser ativar
      label: "Desenvolvimento Web",
      sublabel: "Foco em React & JavaScript moderno"
    },
    {
      id: "stat-2",
      iconName: "Cpu",
      value: "", // Ex: "04+"
      label: "Tecnologia & Sistemas",
      sublabel: "Soluções práticas e funcionais"
    },
    {
      id: "stat-3",
      iconName: "BookOpen",
      value: "", // Ex: "100%"
      label: "Aprendizado Contínuo",
      sublabel: "Evolução e estudo diário"
    },
    {
      id: "stat-4",
      iconName: "Building2",
      value: "",
      label: "Contabilidade & Negócios",
      sublabel: "Visão estratégica de processos"
    }
  ]
};
