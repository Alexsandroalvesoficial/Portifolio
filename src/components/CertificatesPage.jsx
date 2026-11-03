import React, { useState, useEffect } from "react";
import { certificates } from "../data/certificates";
import logoImg from "../assets/images/logo.png";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";
import {
  ArrowLeft,
  Award,
  Calendar,
  Clock,
  ExternalLink,
  ShieldCheck,
  Search,
  BookOpen,
} from "lucide-react";
import "./CertificatesPage.css";

export default function CertificatesPage({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);
  const { t } = useLanguage();

  const certificateCategories = [
    { id: "all", label: t.certificatesPage.categories.all },
    { id: "tech", label: t.certificatesPage.categories.tech },
    { id: "business", label: t.certificatesPage.categories.business },
    { id: "foundations", label: t.certificatesPage.categories.foundations },
  ];

  // Rolagem para o topo quando a página carregar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory =
      activeCategory === "all" || cert.category === activeCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="certificates-page">
      {/* Barra de Navegação Superior da Página de Certificados */}
      <header className="certificates-navbar">
        <div className="container cert-nav-container">
          <button
            onClick={onBackToHome}
            className="back-to-home-btn"
            aria-label={t.certificatesPage.backBtn}
          >
            <ArrowLeft size={18} />
            <span>{t.certificatesPage.backBtn}</span>
          </button>

          <div className="cert-nav-brand">
            <img src={logoImg} alt="DAN code logo" className="cert-logo-img" />
            <div className="cert-brand-text">
              <span className="brand-name">ALEXSANDRO ALVES</span>
              <span className="brand-sub">{t.certificatesPage.brandSub}</span>
            </div>
          </div>

          <div className="cert-nav-actions" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="certificates-main">
        <div className="container">
          {/* Cabeçalho da Página */}
          <div className="cert-hero">
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span>{t.certificatesPage.eyebrow}</span>
            </div>

            <h1 className="cert-title">
              {t.certificatesPage.titlePrefix}{" "}
              <span className="highlight-blue">{t.certificatesPage.titleHighlight}</span> <br />
              {t.certificatesPage.titleSuffix}
            </h1>

            <p className="cert-subtitle">{t.certificatesPage.subtitle}</p>
          </div>

          {/* Barra de Controles: Filtros de Categoria + Campo de Busca */}
          <div className="cert-controls">
            <div className="cert-categories-pills" role="tablist">
              {certificateCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`cert-pill-btn ${
                    activeCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="cert-search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder={t.certificatesPage.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="cert-search-input"
              />
            </div>
          </div>

          {/* Grade de Cartões de Certificados */}
          {filteredCertificates.length > 0 ? (
            <div className="certificates-grid">
              {filteredCertificates.map((cert) => {
                const hasLink = Boolean(cert.certificateUrl);
                const hasImage = Boolean(cert.imageUrl);

                return (
                  <article key={cert.id} className="certificate-card">
                    {/* Visual / Moldura do Certificado */}
                    <div className="cert-card-preview">
                      {hasImage ? (
                        <img
                          src={cert.imageUrl}
                          alt={`Certificado de ${cert.title}`}
                          className="cert-card-img"
                        />
                      ) : (
                        /* Mockup de Certificado Elegante */
                        <div className="cert-mockup">
                          <div className="cert-mockup-pattern"></div>
                          <div className="cert-seal-badge">
                            <Award size={28} />
                          </div>
                          <span className="cert-mockup-type">
                            {cert.categoryLabel}
                          </span>
                          <span className="cert-mockup-inst">
                            {cert.institution}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Dados do Certificado */}
                    <div className="cert-card-body">
                      <div className="cert-card-meta">
                        <span className="cert-badge-category">
                          {cert.categoryLabel}
                        </span>
                        <div className="cert-workload">
                          <Clock size={13} />
                          <span>{cert.workload}</span>
                        </div>
                      </div>

                      <h3 className="cert-card-title">{cert.title}</h3>
                      <h4 className="cert-card-institution">
                        <BookOpen size={14} />
                        <span>{cert.institution}</span>
                      </h4>

                      <p className="cert-card-desc">{cert.description}</p>

                      <div className="cert-skills-wrap">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="cert-skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="cert-card-footer">
                        <div className="cert-date">
                          <Calendar size={13} />
                          <span>
                            {t.certificatesPage.issuedIn}: {cert.issueDate}
                          </span>
                        </div>

                        {cert.credentialCode && (
                          <div className="cert-code" title="Código de validação">
                            <ShieldCheck size={13} />
                            <span>{cert.credentialCode}</span>
                          </div>
                        )}
                      </div>

                      {/* Botão de Ação */}
                      <div className="cert-action-row">
                        {hasLink ? (
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cert-primary"
                          >
                            <span>{t.certificatesPage.accessCert}</span>
                            <ExternalLink size={15} />
                          </a>
                        ) : (
                          <button
                            onClick={() => setSelectedCert(cert)}
                            className="btn-cert-preview"
                          >
                            <span>{t.certificatesPage.viewDetails}</span>
                            <Award size={15} />
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="cert-empty-state">
              <Award size={48} className="empty-icon" />
              <h3>{t.certificatesPage.emptyTitle}</h3>
              <p>{t.certificatesPage.emptyDesc}</p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="btn btn-secondary"
                style={{ marginTop: "16px" }}
              >
                {t.certificatesPage.clearFilters}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal de Detalhes do Certificado */}
      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div className="cert-modal-seal">
                <Award size={32} />
              </div>
              <div>
                <span className="cert-badge-category">
                  {selectedCert.categoryLabel}
                </span>
                <h3 className="cert-modal-title">{selectedCert.title}</h3>
                <h4 className="cert-modal-inst">{selectedCert.institution}</h4>
              </div>
            </div>

            <div className="cert-modal-body">
              <p className="cert-modal-desc">{selectedCert.description}</p>

              <div className="cert-modal-info-grid">
                <div className="modal-info-item">
                  <span className="info-label">{t.certificatesPage.workload}</span>
                  <span className="info-val">{selectedCert.workload}</span>
                </div>
                <div className="modal-info-item">
                  <span className="info-label">{t.certificatesPage.issuedIn}</span>
                  <span className="info-val">{selectedCert.issueDate}</span>
                </div>
                <div className="modal-info-item">
                  <span className="info-label">{t.certificatesPage.validationCode}</span>
                  <span className="info-val">{selectedCert.credentialCode}</span>
                </div>
              </div>

              <div className="cert-modal-skills">
                <span className="info-label">{t.certificatesPage.skillsLearned}</span>
                <div className="cert-skills-wrap" style={{ marginTop: "8px" }}>
                  {selectedCert.skills.map((s) => (
                    <span key={s} className="cert-skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="cert-modal-footer">
              <button
                onClick={() => setSelectedCert(null)}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                {t.certificatesPage.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
