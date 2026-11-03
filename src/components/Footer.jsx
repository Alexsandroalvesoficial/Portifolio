import React from "react";
import logoImg from "../assets/images/logo.png";
import { siteConfig } from "../data/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from "./Icons";
import "./Footer.css";

export default function Footer({ onOpenCertificates }) {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: t.header.home, href: "#home" },
    { label: t.header.projects, href: "#projetos" },
    { label: t.header.skills, href: "#habilidades" },
    { label: t.header.about, href: "#sobre" },
    { label: t.header.education, href: "#formacao" },
    { label: t.header.certificates, action: onOpenCertificates },
    { label: t.header.contact, href: "#contato" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Parte Superior do Rodapé */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand" onClick={scrollToTop}>
              <img src={logoImg} alt="DAN code logo" className="footer-logo-img" />
              <div className="footer-brand-text">
                <span className="brand-name">ALEXSANDRO</span>
                <span className="brand-sub">ALVES</span>
              </div>
            </a>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-heading">{t.footer.navTitle}</span>
            <ul className="footer-links-list">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.action ? (
                    <button
                      onClick={item.action}
                      className="footer-link footer-btn-link"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <span className="footer-heading">{t.footer.contactTitle}</span>
            <p className="footer-email">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p className="footer-phone">
              <a
                href={`https://wa.me/${siteConfig.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 (74) 99113-8729
              </a>
            </p>

            <div className="footer-social-quick">
              <a
                href="https://github.com/Alexsandroalvesoficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-icon"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexsandroalvesoficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/dan_bnh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/5574991138729"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-icon"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="footer-divider"></div>

        {/* Parte Inferior do Rodapé: Copyright & Voltar ao Topo */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© {currentYear} Alexsandro Alves. {t.footer.rights}</span>
            <span className="footer-sub-copyright">
              {t.footer.builtWith}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="footer-scroll-top-btn"
            aria-label={t.footer.scrollTop}
            title={t.footer.scrollTop}
          >
            <span>{t.footer.scrollTop}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
