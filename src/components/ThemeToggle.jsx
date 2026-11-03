import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio_theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Padrão: light (off-white / creme conforme a referência)
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("portfolio_theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Alternar para ${theme === "light" ? "Modo Escuro" : "Modo Claro"}`}
      title={`Alternar para ${theme === "light" ? "Dark Mode" : "White Mode"}`}
    >
      <span className="theme-toggle-icon">
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </span>
      <span className="theme-toggle-label">
        {theme === "light" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
