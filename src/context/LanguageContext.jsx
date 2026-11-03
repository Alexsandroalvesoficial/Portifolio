import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("pt");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_language");
    if (saved && (saved === "pt" || saved === "es" || saved === "en")) {
      setLanguageState(saved);
      document.documentElement.setAttribute("lang", saved === "pt" ? "pt-BR" : saved);
    } else {
      setLanguageState("pt");
      document.documentElement.setAttribute("lang", "pt-BR");
    }
  }, []);

  const setLanguage = (lang) => {
    if (lang === "pt" || lang === "es" || lang === "en") {
      setLanguageState(lang);
      localStorage.setItem("portfolio_language", lang);
      document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);
    }
  };

  const t = translations[language] || translations.pt;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
