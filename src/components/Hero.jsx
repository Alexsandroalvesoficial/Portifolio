import React from "react";
import photoImg from "../assets/images/alexsandro.jpg";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Lado Esquerdo: Conteúdo Textual & Chamadas */}
        <div className="hero-content">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>{t.hero.tag}</span>
          </div>

          <h1 className="hero-title">
            {t.hero.titlePrefix} <br />
            <span className="highlight-blue">{t.hero.titleName}</span> <br />
            {t.hero.titleSuffix}
          </h1>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <a href="#projetos" className="btn btn-primary">
              <span>{t.hero.viewProjects}</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contato" className="btn btn-secondary">
              <Mail size={18} />
              <span>{t.hero.contactMe}</span>
            </a>
          </div>
        </div>

        {/* Lado Direito: Fotografia Perfeitamente Integrada NO Círculo Azul Royal */}
        <div className="hero-visual">
          <div className="hero-circle-wrapper">
            {/* Círculo Azul Royal de Destaque */}
            <div className="hero-circle-backdrop" aria-hidden="true"></div>

            {/* Imagem do Perfil no Círculo */}
            <div className="hero-image-frame">
              <img
                src={photoImg}
                alt="Alexsandro Alves - Desenvolvedor em formação"
                className="hero-photo"
              />
            </div>
          </div>

          {/* Selo Vertical à direita */}
          <div className="hero-vertical-tag" aria-hidden="true">
            <span>{t.hero.verticalTag}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
