import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, ArrowUpRight, Award } from "lucide-react";
import "./Header.css";

export default function Header({ onOpenCertificates }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.header.home, href: "#home" },
    { label: t.header.projects, href: "#projetos" },
    { label: t.header.skills, href: "#habilidades" },
    { label: t.header.about, href: "#sobre" },
    { label: t.header.education, href: "#formacao" },
    { label: t.header.contact, href: "#contato" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleCertificatesClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenCertificates) {
      onOpenCertificates();
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        {/* Navegação Desktop */}
        <nav className="header-nav" aria-label="Navegação Principal">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}

          {/* Botão para a Segunda Página de Certificados */}
          <button
            onClick={handleCertificatesClick}
            className="nav-certificates-btn"
            title={t.header.certificates}
          >
            <Award size={15} />
            <span>{t.header.certificates}</span>
          </button>
        </nav>

        {/* Ações do Header (3 Bandeiras Redondas para Tradução + Theme Toggle + Mobile Menu Button) */}
        <div className="header-actions">
          <LanguageSelector />

          <ThemeToggle />

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">{t.header.mobileNav}</span>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar Menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} className="mobile-link-icon" />
              </a>
            ))}

            {/* Item Certificados no Menu Mobile */}
            <button
              onClick={handleCertificatesClick}
              className="mobile-nav-link mobile-cert-btn"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Award size={20} className="highlight-blue" />
                <span>{t.header.certificates}</span>
              </div>
              <ArrowUpRight size={18} className="mobile-link-icon" />
            </button>
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-lang-wrap" style={{ marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "600" }}>Idioma / Language:</span>
              <LanguageSelector />
            </div>
            <a
              href="#contato"
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={handleLinkClick}
            >
              {t.header.talkToMe}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
