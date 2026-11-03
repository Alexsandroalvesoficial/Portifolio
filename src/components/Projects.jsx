import React, { useState } from "react";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./Icons";
import "./Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const projectCategories = [
    { id: "all", label: t.projects.categories.all },
    { id: "sites", label: t.projects.categories.sites },
    { id: "aplicacoes", label: t.projects.categories.aplicacoes },
    { id: "outros", label: t.projects.categories.outros },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryId === activeCategory);

  return (
    <section id="projetos" className="section section-dark projects-section">
      <div className="container">
        {/* Cabeçalho de Projetos */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span>{t.projects.eyebrow}</span>
            </div>
            <h2 className="section-title">{t.projects.title}</h2>
          </div>

          <div className="projects-filter-group" role="tablist">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`projects-filter-btn ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Galeria de Projetos */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const hasLiveSite = Boolean(project.siteUrl && project.siteUrl !== "#");

            return (
              <article key={project.id} className="project-card">
                {/* Visual / Capa do Projeto */}
                <div className="project-cover-container">
                  {project.imageUrl ? (
                    <a
                      href={hasLiveSite ? project.siteUrl : project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-cover-link"
                      tabIndex={hasLiveSite ? 0 : -1}
                      aria-label={`Visualizar projeto ${project.title}`}
                    >
                      <img
                        src={project.imageUrl}
                        alt={`Interface do projeto ${project.title}`}
                        className="project-cover-img"
                      />
                    </a>
                  ) : (
                    /* Mockup de Interface Elegante & Dedicado para cada projeto */
                    <a
                      href={hasLiveSite ? project.siteUrl : project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-cover-mockup"
                      tabIndex={hasLiveSite ? 0 : -1}
                      aria-label={`Acessar ${project.title}`}
                    >
                      <div className="mockup-browser-bar">
                        <div className="mockup-dots">
                          <span className="dot-red"></span>
                          <span className="dot-yellow"></span>
                          <span className="dot-green"></span>
                        </div>
                        <div className="mockup-url-pill">
                          {hasLiveSite
                            ? project.siteUrl.replace("https://", "")
                            : "elocontabil.com.br • em breve"}
                        </div>
                      </div>

                      <div className="mockup-viewport">
                        <div className="mockup-watermark">
                          <span className="mockup-category-badge">
                            {project.category}
                          </span>
                          <h4 className="mockup-title">{project.title}</h4>
                          <span className="mockup-action-hint">
                            {hasLiveSite
                              ? t.projects.buttons.clickToOpen
                              : t.projects.buttons.inDevelopment}
                          </span>
                        </div>
                      </div>
                    </a>
                  )}
                </div>

                {/* Conteúdo Informativo do Card */}
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-status">
                      <span className={`status-indicator ${hasLiveSite ? "active" : "pending"}`}></span>
                      {hasLiveSite ? t.projects.status.online : t.projects.status.inDev}
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-techs">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links e Ações Diretas */}
                  <div className="project-actions">
                    {hasLiveSite ? (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project-primary"
                        aria-label={`Acessar site de ${project.title}`}
                      >
                        <span>{t.projects.buttons.access}</span>
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="btn-project-disabled" title="Site em construção">
                        {t.projects.buttons.comingSoon}
                      </span>
                    )}

                    {project.instagramUrl && (
                      <a
                        href={project.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project-social"
                        aria-label={`Instagram oficial de ${project.title}`}
                        title="Instagram"
                      >
                        <InstagramIcon size={17} />
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
