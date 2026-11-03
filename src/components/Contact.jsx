import React, { useState } from "react";
import { socialLinks, directContact } from "../data/socialLinks";
import { useLanguage } from "../context/LanguageContext";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
  TelegramIcon,
} from "./Icons";
import "./Contact.css";

const iconMap = {
  Instagram: InstagramIcon,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  MessageCircle: WhatsAppIcon,
  Send: TelegramIcon,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directContact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contato" className="section contact-section">
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span>{t.contact.eyebrow}</span>
            </div>
            <h2 className="section-title">{t.contact.title}</h2>
          </div>

          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        {/* Bloco Superior Inspirado na Referência: Dados de Contato + Bloco Azul Royal */}
        <div className="contact-hero-banner">
          <div className="contact-details-box">
            <div className="contact-detail-row">
              <div className="detail-icon-circle">
                <Mail size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-label">{t.contact.labels.email}</span>
                <a
                  href={`mailto:${directContact.email}`}
                  className="detail-value link-hover"
                >
                  {directContact.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="copy-email-btn"
                title="Copiar e-mail"
                aria-label="Copiar e-mail"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? t.contact.copiedBtn : t.contact.copyBtn}</span>
              </button>
            </div>

            <div className="contact-detail-row">
              <div className="detail-icon-circle">
                <WhatsAppIcon size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-label">{t.contact.labels.whatsapp}</span>
                <a
                  href={directContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-value link-hover"
                >
                  (74) 99113-8729
                </a>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="detail-icon-circle">
                <MapPin size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-label">{t.contact.labels.location}</span>
                <span className="detail-value">{directContact.location}</span>
              </div>
            </div>
          </div>

          {/* Destaque Azul Royal IDÊNTICO à Referência Visual */}
          <a
            href={directContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta-highlight"
            aria-label="WhatsApp direto"
          >
            <div className="cta-highlight-top">
              <ArrowUpRight size={36} className="cta-highlight-arrow" />
            </div>
            <div className="cta-highlight-bottom">
              <span className="cta-highlight-small">{t.contact.ctaSmall}</span>
              <h3 className="cta-highlight-title">{t.contact.ctaBig}</h3>
            </div>
          </a>
        </div>

        {/* Grade com os 8 Canais Individuais e Reconhecíveis Solicitados */}
        <div className="social-channels-container">
          <div className="social-channels-header">
            <h3 className="social-channels-title">{t.contact.socialTitle}</h3>
            <span className="social-channels-sub">{t.contact.socialSub}</span>
          </div>

          <div className="social-grid">
            {socialLinks.map((item) => {
              const IconComponent = iconMap[item.icon] || WhatsAppIcon;

              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  aria-label={`${item.name}: ${item.username}`}
                >
                  <div className="social-card-icon-wrap">
                    <IconComponent size={24} className="social-card-icon" />
                  </div>

                  <div className="social-card-info">
                    <span className="social-category">{item.category}</span>
                    <h4 className="social-name">{item.name}</h4>
                    <span className="social-user">{item.username}</span>
                  </div>

                  <div className="social-card-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
