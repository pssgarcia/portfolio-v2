# Portfólio Profissional — Pedro Soares

Portfólio pessoal em estilo **dark tech minimalista**, desenvolvido como projeto acadêmico das sprints de Engenharia de Software da PUC Minas. O site apresenta a trajetória de **Pedro Soares**, desenvolvedor full-stack com foco em back-end, baseado em Belo Horizonte — com seções sobre formação, projetos, experiências e contato.

---

## Visão geral

O objetivo é construir um site moderno, responsivo e de fácil manutenção, servindo como vitrine profissional e ponto de partida para futuras funcionalidades (i18n PT/EN, validação de formulário em tempo real, back-end de contato).

### Principais características

- **Single-page** com navegação por âncoras entre 5 seções: Hero, Sobre, Experiência, Projetos e Contato.
- **Cabeçalho fixo** com _scroll-spy_ (destaque da seção ativa), menu mobile em overlay e alternância de tema.
- **Tema claro/escuro** com preferência persistida no `localStorage` (`portfolio-theme`).
- **Conteúdo centralizado em arquivos de dados** (`src/data/`) para facilitar a manutenção.
- **Responsividade** para desktop, tablet e mobile.
- **Formulário de contato** integrado ao Netlify Forms.

### Planejado (sprints futuras)

- **Internacionalização (PT/EN)** com persistência do idioma escolhido — ainda não implementada.
- **Validação do formulário de contato em tempo real** — atualmente há apenas validação nativa (`required`) e feedback de envio.
- **Back-end de contato** (envio de e-mail / persistência).

---

## Tecnologias

| Camada | Tecnologia | Motivo |
|--------|-----------|--------|
| Biblioteca UI | [Vue 3](https://vuejs.org/) (`<script setup>`) | Componentes declarativos e reativos. |
| Build / dev server | [Vite 6](https://vitejs.dev/) | Dev server rápido com HMR e build otimizado. |
| Roteamento | [Vue Router 4](https://router.vuejs.org/) | Rota única hoje; pronto para expansão. |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS | Utilitários consistentes sobre _design tokens_ em CSS custom properties. |
| Tipografia | [Inter](https://rsms.me/inter/) (Google Fonts) | Fonte sans-serif neutra e legível. |
| Deploy | [Netlify](https://www.netlify.com/) | Hospedagem com CI/CD e Netlify Forms para o contato. |

---

## Estrutura do projeto

```text
.
├── index.html                  # Entry HTML + form oculto do Netlify Forms
├── vite.config.js              # Config do Vite + alias "@" → src/
├── tailwind.config.js          # Tema, cores mapeadas para CSS vars, keyframes de animação
├── postcss.config.js
├── netlify.toml                # Build (dist) + redirect SPA + Node 22
└── src/
    ├── main.js                 # Bootstrap da app (createApp + router + CSS global)
    ├── App.vue                 # Layout raiz: TheNavbar + <router-view> + TheFooter
    ├── router/
    │   └── index.js            # Rota única "/" → HomeView; scrollBehavior com âncoras
    ├── views/
    │   └── HomeView.vue        # Compõe todas as seções da página
    ├── components/
    │   ├── TheNavbar.vue       # Nav fixa, scroll-spy, menu mobile, toggle de tema
    │   ├── TheFooter.vue       # Rodapé com links sociais
    │   ├── HeroSection.vue     # Apresentação + CTAs
    │   ├── AboutSection.vue    # Bio + grade de tecnologias (SkillBadge)
    │   ├── ExperienceSection.vue # Timeline vertical (trabalho + formação)
    │   ├── ProjectsSection.vue # Grade de cards de projetos
    │   ├── ContactSection.vue  # Canais de contato + formulário (Netlify Forms)
    │   ├── SectionHeading.vue  # Título/subtítulo reutilizável de seção
    │   ├── SkillBadge.vue      # Badge de tecnologia
    │   ├── ProjectCard.vue     # Card de projeto
    │   └── TimelineItem.vue    # Item da timeline de experiência
    ├── composables/
    │   ├── useActiveSection.js       # Detecta a seção visível (scroll-spy)
    │   ├── useColorMode.js           # Estado do tema + persistência
    │   └── useIntersectionObserver.js # Animações de revelação ao rolar
    ├── data/
    │   ├── projects.js         # Lista de projetos
    │   ├── experience.js       # Histórico profissional e acadêmico
    │   └── skills.js           # Tecnologias
    └── assets/
        ├── img/               # Foto pessoal e imagens dos projetos
        └── styles/
            └── main.css       # Tokens de cor, tema claro/escuro, classes de componente
```

---

## Seções da página

### 1. Hero
Apresentação pessoal com nome, cargo, resumo e CTAs para "Projetos" e "Contato".

### 2. Sobre (`#about`)
Bio narrativa (Vancouver → Belo Horizonte) e grade de tecnologias com que trabalha.

### 3. Experiência (`#experience`)
Timeline vertical com histórico profissional (Construsite Brasil) e formação (PUC Minas, Tamwood).

### 4. Projetos (`#projects`)
Grade de cards com descrição, tecnologias e links para repositório/demo.

### 5. Contato (`#contact`)
Canais de contato (GitHub, LinkedIn, e-mail) e formulário validado, integrado ao Netlify Forms.

---

## Como rodar localmente

Requisitos: [Node.js](https://nodejs.org/) 22+

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`.

```bash
# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Autores

**Pedro Soares de Souza Garcia**
**Daniel Vieira Verissimo**
**Pedro Henrique Carvalho Pereira**

[GitHub](https://github.com/pssgarcia) · [LinkedIn](https://www.linkedin.com/in/pedro-soares-b996a5263/)
