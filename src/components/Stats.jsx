import React from "react";
import { statsConfig } from "../data/stats";
import { useLanguage } from "../context/LanguageContext";
import { Code2, Cpu, BookOpen, Building2 } from "lucide-react";
import "./Stats.css";

const iconMap = [Code2, Cpu, BookOpen, Building2];

export default function Stats() {
  const { showNumbers, items } = statsConfig;
  const { t } = useLanguage();

  return (
    <section className="stats-section" aria-label="Destaques e Indicadores">
      <div className="container">
        <div className="stats-grid">
          {items.map((item, idx) => {
            const IconComponent = iconMap[idx] || Code2;
            const hasValue = showNumbers && Boolean(item.value);
            const translatedItem = t.stats.items[idx] || item;

            return (
              <div key={item.id} className="stat-card">
                <div className="stat-icon-wrapper">
                  <IconComponent size={22} className="stat-icon" />
                </div>
                <div className="stat-info">
                  {hasValue ? (
                    <span className="stat-value">{item.value}</span>
                  ) : null}
                  <span className={`stat-label ${!hasValue ? "prominent" : ""}`}>
                    {translatedItem.label}
                  </span>
                  {translatedItem.sublabel && (
                    <span className="stat-sublabel">{translatedItem.sublabel}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
