import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { BrazilFlag, SpainFlag, USAFlag } from "./FlagIcons";
import "./LanguageSelector.css";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    {
      id: "pt",
      label: "Português (Brasil)",
      short: "PT-BR",
      Flag: BrazilFlag,
    },
    {
      id: "es",
      label: "Español (España)",
      short: "ES",
      Flag: SpainFlag,
    },
    {
      id: "en",
      label: "English (USA)",
      short: "EN",
      Flag: USAFlag,
    },
  ];

  return (
    <div className="language-selector" role="group" aria-label="Selecionar idioma de tradução">
      {languages.map(({ id, label, short, Flag }) => {
        const isActive = language === id;

        return (
          <button
            key={id}
            onClick={() => setLanguage(id)}
            className={`flag-round-btn ${isActive ? "active" : ""}`}
            title={`Mudar para ${label}`}
            aria-label={`Mudar idioma para ${label}`}
            aria-pressed={isActive}
          >
            <Flag size={22} className="flag-svg" />
            <span className="flag-sr-label">{short}</span>
          </button>
        );
      })}
    </div>
  );
}
