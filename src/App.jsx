import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificatesPage from "./components/CertificatesPage";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/responsive.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Gerenciador de rotas baseado no hash da URL (compatível com hospedagem estática)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#certificados") {
        setCurrentPage("certificates");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setCurrentPage("home");
      }
    };

    // Checagem inicial
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openCertificatesPage = () => {
    window.location.hash = "#certificados";
  };

  const backToHomePage = () => {
    window.location.hash = "#formacao";
  };

  return (
    <div className="app-wrapper">
      {currentPage === "certificates" ? (
        // SEGUNDA PÁGINA: Galeria Completa de Certificados
        <>
          <CertificatesPage onBackToHome={backToHomePage} />
          <Footer onOpenCertificates={openCertificatesPage} />
        </>
      ) : (
        // PRIMEIRA PÁGINA: Portfólio Principal Completo
        <>
          <Header onOpenCertificates={openCertificatesPage} />
          <main id="main-content">
            <Hero />
            <Stats />
            <Skills />
            <Projects />
            <About />
            <Education onOpenCertificates={openCertificatesPage} />
            <Contact />
          </main>
          <Footer onOpenCertificates={openCertificatesPage} />
        </>
      )}
    </div>
  );
}
