import React from "react";

/**
 * Bandeiras Redondas Oficiais (Brasil, Espanha, EUA)
 * Recortadas em círculo perfeito (border-radius: 50%) com alta fidelidade visual
 */

export function BrazilFlag({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      style={{ borderRadius: "50%", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="circle-clip-br">
        <circle cx="18" cy="18" r="18" />
      </clipPath>
      <g clipPath="url(#circle-clip-br)">
        {/* Fundo Verde */}
        <rect width="36" height="36" fill="#009B3A" />
        {/* Losango Amarelo */}
        <polygon points="18,4 32,18 18,32 4,18" fill="#FEDF00" />
        {/* Círculo Azul */}
        <circle cx="18" cy="18" r="7.5" fill="#002776" />
        {/* Faixa Branca */}
        <path
          d="M 11.2,19.2 A 7.5,7.5 0 0,1 24.8,15.5 A 7.5,7.5 0 0,0 11.2,19.2 Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}

export function SpainFlag({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      style={{ borderRadius: "50%", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="circle-clip-es">
        <circle cx="18" cy="18" r="18" />
      </clipPath>
      <g clipPath="url(#circle-clip-es)">
        {/* Faixa Vermelha Superior */}
        <rect width="36" height="9" y="0" fill="#AA151B" />
        {/* Faixa Amarela Central */}
        <rect width="36" height="18" y="9" fill="#F1BF00" />
        {/* Faixa Vermelha Inferior */}
        <rect width="36" height="9" y="27" fill="#AA151B" />
        {/* Brasão Espanhol estilizado */}
        <g transform="translate(10, 14)">
          <rect width="4.5" height="7" rx="1.5" fill="#AA151B" />
          <rect width="3" height="5" x="0.75" y="1" fill="#F1BF00" />
          <circle cx="2.25" cy="-0.5" r="1.2" fill="#D43F3F" />
        </g>
      </g>
    </svg>
  );
}

export function USAFlag({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      style={{ borderRadius: "50%", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="circle-clip-us">
        <circle cx="18" cy="18" r="18" />
      </clipPath>
      <g clipPath="url(#circle-clip-us)">
        {/* Listras Vermelhas e Brancas */}
        <rect width="36" height="36" fill="#B22234" />
        <rect width="36" height="2.77" y="2.77" fill="#FFFFFF" />
        <rect width="36" height="2.77" y="8.31" fill="#FFFFFF" />
        <rect width="36" height="2.77" y="13.85" fill="#FFFFFF" />
        <rect width="36" height="2.77" y="19.38" fill="#FFFFFF" />
        <rect width="36" height="2.77" y="24.92" fill="#FFFFFF" />
        <rect width="36" height="2.77" y="30.46" fill="#FFFFFF" />
        {/* Cantão Azul */}
        <rect width="16" height="18" fill="#3C3B6E" />
        {/* Estrelas */}
        <circle cx="4" cy="4" r="0.8" fill="#FFFFFF" />
        <circle cx="8" cy="4" r="0.8" fill="#FFFFFF" />
        <circle cx="12" cy="4" r="0.8" fill="#FFFFFF" />
        <circle cx="6" cy="7.5" r="0.8" fill="#FFFFFF" />
        <circle cx="10" cy="7.5" r="0.8" fill="#FFFFFF" />
        <circle cx="4" cy="11" r="0.8" fill="#FFFFFF" />
        <circle cx="8" cy="11" r="0.8" fill="#FFFFFF" />
        <circle cx="12" cy="11" r="0.8" fill="#FFFFFF" />
        <circle cx="6" cy="14.5" r="0.8" fill="#FFFFFF" />
        <circle cx="10" cy="14.5" r="0.8" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
