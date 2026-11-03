# Portfólio Profissional — Alexsandro Alves

Portfólio pessoal e profissional desenvolvido com **React**, **Vite**, **CSS Modular** e **Lucide Icons**, rigorosamente inspirado na referência visual de alto padrão editorial solicitada.

---

## 🎨 Identidade Visual & Design System

- **Fundo Principal (White Mode):** Off-white / Creme editorial (`#F9F8F5`).
- **Fundo Principal (Dark Mode):** Preto / Grafite profundo (`#0D0E12`).
- **Destaques & Acentos:** Azul Royal vibrante (`#1A56DB`) & Ciano `<DAN>` (`#00B4FF`).
- **Tipografia:** Syne (títulos em caixa alta marcantes) + Plus Jakarta Sans (leitura limpa e moderna).
- **Composição da Referência:**
  - Primeira dobra com tipografia editorial e fotografia real emoldurada com círculo azul royal de fundo.
  - Faixa escura horizontal de indicadores institucionais.
  - Grade de conhecimentos com distinção clara entre domínio atual, em aprendizado e interesse.
  - Galeria escura de projetos com abertura direta de links em nova aba (`target="_blank"`).
  - Linha do tempo visual de formação acadêmica e técnica.
  - Bloco de contato com os 8 canais individuais requisitados e destaque no WhatsApp.
  - Alternador imediato entre White Mode e Dark Mode com persistência em `localStorage`.

---

## 📁 Estrutura de Arquivos

```text
meu-portifolio/
├── public/
│   └── favicon.png            # Ícone oficial com a logo Dan Code
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── logo.png       # Logo oficial <DAN> code
│   │       ├── alexsandro.jpg # Fotografia real de Alexsandro Alves
│   │       └── referencia_visual.png
│   ├── components/
│   │   ├── Header.jsx         # Cabeçalho com navegação, status e Dark/White toggle
│   │   ├── Hero.jsx           # Apresentação com tipografia e foto com círculo azul
│   │   ├── Stats.jsx          # Faixa de indicadores institucionais configuráveis
│   │   ├── Skills.jsx         # Conhecimentos e Áreas de Interesse com filtros
│   │   ├── Projects.jsx       # Galeria de Projetos Selecionados
│   │   ├── About.jsx          # Seção Sobre Mim e trajetória multidisciplinar
│   │   ├── Education.jsx      # Linha do tempo de formação e aprendizado
│   │   ├── Contact.jsx        # Seção de contato com os 8 canais individuais
│   │   ├── Footer.jsx         # Rodapé completo com ano dinâmico
│   │   ├── ThemeToggle.jsx    # Alternador White/Dark mode
│   │   └── Icons.jsx          # Ícones vetoriais fiéis (Instagram, GitHub, LinkedIn, etc.)
│   ├── data/
│   │   ├── siteConfig.js      # Textos principais, biografia e status
│   │   ├── projects.js        # Cadastro de projetos, links e tecnologias
│   │   ├── socialLinks.js     # Links individuais das 8 redes e contatos
│   │   ├── skills.js          # Lista de competências e status de domínio
│   │   ├── education.js       # Linha do tempo de graduação e cursos
│   │   └── stats.js           # Destaques da faixa de indicadores
│   ├── styles/
│   │   ├── variables.css      # Variáveis de cores, temas, fontes e sombras
│   │   ├── global.css         # Reset, botões e classes utilitárias
│   │   └── responsive.css     # Ajustes de responsividade para todos os dispositivos
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## 🚀 Como Executar o Projeto

### 1. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse no seu navegador: `http://localhost:5173/`

### 2. Gerar a versão de produção para publicação
```bash
npm run build
```
Os arquivos otimizados e prontos para publicação em serviços como **Vercel** ou **GitHub Pages** serão gerados na pasta `dist/`.

---

## ⚙️ Como Personalizar os Dados

Todos os dados foram separados em arquivos na pasta `src/data/`:
- **Internacionalização (i18n):** Tradução instantânea entre **Português (PT-BR)**, **Espanhol (ES)** e **Inglês (EN)** acionada pelas 3 bandeiras redondas no cabeçalho, com persistência em `localStorage`.
- **Certificados:** Edite `src/data/certificates.js` para cadastrar novos certificados, alterar cursos, adicionar códigos de validação e links.
- **Projetos:** Edite `src/data/projects.js` para atualizar links, descrições ou adicionar capturas de tela.
- **Redes Sociais:** Edite `src/data/socialLinks.js` para atualizar qualquer link (como o Telegram).
- **Habilidades:** Edite `src/data/skills.js` para adicionar novas tecnologias.
- **Formação:** Edite `src/data/education.js` para adicionar novos cursos e certificados.
- **Indicadores:** Edite `src/data/stats.js` caso deseje ativar números ou alterar os pilares.
