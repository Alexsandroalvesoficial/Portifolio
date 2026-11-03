import React, { useState } from "react";
import { skills } from "../data/skills";
import { useLanguage } from "../context/LanguageContext";
import {
  Globe,
  FileCode2,
  Code,
  Layers,
  Sparkles,
  BarChart3,
  Calculator,
  GitBranch,
} from "lucide-react";
import "./Skills.css";

const iconMap = {
  Globe: Globe,
  FileCode2: FileCode2,
  Code: Code,
  Layers: Layers,
  Sparkles: Sparkles,
  BarChart3: BarChart3,
  Calculator: Calculator,
  GitBranch: GitBranch,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const skillCategories = [
    { id: "all", label: t.skills.categories.all },
    { id: "atual", label: t.skills.categories.atual },
    { id: "aprendizado", label: t.skills.categories.aprendizado },
    { id: "interesse", label: t.skills.categories.interesse },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.type === activeCategory);

  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span>{t.skills.eyebrow}</span>
            </div>
            <h2 className="section-title">{t.skills.title}</h2>
          </div>

          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        {/* Filtros de Categoria */}
        <div className="skills-filters" role="tablist">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`skills-filter-btn ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grade de Cartões */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Globe;
            const badgeLabel =
              skill.type === "atual"
                ? t.skills.badges.atual
                : skill.type === "aprendizado"
                ? t.skills.badges.aprendizado
                : t.skills.badges.interesse;

            const badgeTypeClass =
              skill.type === "atual"
                ? "badge-current"
                : skill.type === "aprendizado"
                ? "badge-learning"
                : "badge-interest";

            return (
              <div key={skill.id} className="skill-card">
                <div className="skill-card-top">
                  <div className="skill-icon-box">
                    <IconComponent size={24} className="skill-icon" />
                  </div>
                  <span className={`skill-status-badge ${badgeTypeClass}`}>
                    {badgeLabel}
                  </span>
                </div>

                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.shortDescription}</p>

                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
