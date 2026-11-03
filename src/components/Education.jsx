import React from "react";
import { educationList } from "../data/education";
import photoImg from "../assets/images/alexsandro.jpg";
import { useLanguage } from "../context/LanguageContext";
import {
  Award,
  CheckCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import "./Education.css";

export default function Education({ onOpenCertificates }) {
  const { t } = useLanguage();

  return (
    <section id="formacao" className="section education-section">
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span>{t.education.eyebrow}</span>
            </div>
            <h2 className="section-title">{t.education.title}</h2>
          </div>

          <p className="section-subtitle">{t.education.subtitle}</p>
        </div>

        {/* Layout inspirado na referência: Composição visual à esquerda + Linha do tempo à direita */}
        <div className="education-layout">
          {/* Lado Esquerdo: Fotografia com Composição Geométrica Azul Royal */}
          <div className="education-visual">
            <div className="education-image-container">
              <div className="education-circle-shape" aria-hidden="true"></div>
              <div className="education-image-mask">
                <img
                  src={photoImg}
                  alt="Alexsandro Alves"
                  className="education-photo"
                />
              </div>
            </div>
          </div>

          {/* Lado Direito: Linha do Tempo Editorial */}
          <div className="education-timeline">
            {educationList.map((item, idx) => {
              const isOngoing = item.status.toLowerCase().includes("andamento");

              return (
                <div key={item.id} className="timeline-item">
                  {/* Coluna da Data/Período */}
                  <div className="timeline-date-col">
                    <span className="timeline-period">{item.period}</span>
                    <span
                      className={`timeline-status-badge ${
                        isOngoing ? "status-ongoing" : "status-finished"
                      }`}
                    >
                      {isOngoing ? (
                        <>
                          <Clock size={11} /> {t.education.statusOngoing}
                        </>
                      ) : (
                        <>
                          <CheckCircle size={11} /> {t.education.statusFinished}
                        </>
                      )}
                    </span>
                  </div>

                  {/* Marcador Central com Linha */}
                  <div className="timeline-marker-col">
                    <div className="timeline-dot"></div>
                    {idx !== educationList.length - 1 && (
                      <div className="timeline-connector"></div>
                    )}
                  </div>

                  {/* Conteúdo da Formação */}
                  <div className="timeline-content-col">
                    <div className="timeline-header">
                      <span className="timeline-category">{item.category}</span>
                      <h3 className="timeline-course">{item.course}</h3>
                      <h4 className="timeline-institution">{item.institution}</h4>
                    </div>

                    <p className="timeline-description">{item.description}</p>

                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-certificate-link"
                      >
                        <Award size={15} />
                        <span>Ver Certificado</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Botão de Destaque para Abrir a Segunda Página de Certificados */}
            <div className="education-cta-row">
              <div className="education-cta-box">
                <div className="cta-box-info">
                  <div className="cta-box-icon-wrap">
                    <Award size={24} className="cta-box-icon" />
                  </div>
                  <div>
                    <h4 className="cta-box-title">{t.education.ctaTitle}</h4>
                    <p className="cta-box-desc">{t.education.ctaDesc}</p>
                  </div>
                </div>

                <button
                  onClick={onOpenCertificates}
                  className="btn btn-primary btn-open-certificates"
                  aria-label="Abrir galeria de certificados"
                >
                  <span>{t.education.ctaButton}</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
