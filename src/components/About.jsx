import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Terminal } from "lucide-react";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="section about-section">
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span>{t.about.eyebrow}</span>
            </div>
            <h2 className="section-title">{t.about.title}</h2>
          </div>

          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        {/* Conteúdo Principal em 2 Colunas */}
        <div className="about-layout">
          {/* Coluna Esquerda: Texto Narrativo Editorial */}
          <div className="about-narrative">
            {t.about.paragraphs.map((p, idx) => (
              <p key={idx} className="about-paragraph">
                {p}
              </p>
            ))}

            <div className="about-quote-box">
              <span className="quote-mark">“</span>
              <p className="quote-text">{t.about.quote}</p>
              <span className="quote-author">— Alexsandro Alves</span>
            </div>
          </div>

          {/* Coluna Direita: Pilares & Diferenciais Estruturados */}
          <div className="about-pillars">
            <h3 className="pillars-heading">{t.about.pillarsTitle}</h3>

            <div className="pillars-list">
              {t.about.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-item">
                  <div className="pillar-number">0{idx + 1}</div>
                  <div className="pillar-info">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-card">
              <div className="cta-card-content">
                <Terminal size={24} className="cta-icon" />
                <div>
                  <h5 className="cta-card-title">{t.about.transparencyTitle}</h5>
                  <p className="cta-card-desc">{t.about.transparencyDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
