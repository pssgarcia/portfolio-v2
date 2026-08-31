// Editorial content, EN + PT-BR. Synced to Pedro's CV on 2026-08-30.
// Code identifiers in hero.focus stay in English (they are code).

const contact = {
  channels: [
    { label: 'github.com/pssgarcia', href: 'https://github.com/pssgarcia', icon: 'github' },
    { label: 'linkedin.com/in/pedro-soares', href: 'https://www.linkedin.com/in/pedro-soares-b996a5263/', icon: 'linkedin' },
    { label: 'pedrossgarcia88@gmail.com', href: 'mailto:pedrossgarcia88@gmail.com', icon: 'email' },
  ],
}

export const profileContent = {
  en: {
    name: 'Pedro Soares',

    hero: {
      role: 'full stack developer',
      comment: 'software engineer, backend & systems',
      focus: ['APIs', 'integrations', 'scalable systems'],
    },

    about: {
      lead: 'PHP and Laravel with MySQL on the backend, Vue and JavaScript on the frontend, Node.js where it fits, plus the REST APIs, integrations, and multi-tenant data that hold a SaaS together.',
      paragraphs: [
        'My journey began in Vancouver, Canada, where I completed an intensive web development program at Tamwood International College, working with HTML, CSS, JavaScript, Node.js, React, Vue.js, PHP, and MySQL on real team projects.',
        'At Construsite Brasil I have gone from intern to Junior Developer III over two years, shipping features end-to-end across a multi-tenant SaaS CRM, e-commerce platforms, institutional sites, internal systems, and APIs, resolving production and tenant-isolation issues, and more recently coordinating the team’s demands, reviewing code, and setting the engineering guidelines we build against.',
        'The work is about designing APIs, managing data flow, and building systems that are reliable, efficient, and built to scale. Not just interfaces that look good.',
        'Currently finishing a B.Sc. in Software Engineering at PUC Minas.',
      ],
      aside: 'Outside of tech: fitness, music, and fashion. I value consistency, challenges, and continuous growth.',
    },

    contact,
  },

  pt: {
    name: 'Pedro Soares',

    hero: {
      role: 'full stack developer',
      comment: 'engenheiro de software, backend e sistemas',
      focus: ['APIs', 'integrações', 'sistemas escaláveis'],
    },

    about: {
      lead: 'PHP e Laravel com MySQL no backend, Vue e JavaScript no frontend, Node.js quando faz sentido, além das APIs REST, integrações e dados multi-tenant que sustentam um SaaS.',
      paragraphs: [
        'Minha trajetória começou em Vancouver, no Canadá, onde concluí um programa intensivo de desenvolvimento web no Tamwood International College, trabalhando com HTML, CSS, JavaScript, Node.js, React, Vue.js, PHP e MySQL em projetos reais de equipe.',
        'Na Construsite Brasil passei de estagiário a Desenvolvedor Júnior III em dois anos, entregando features de ponta a ponta em CRM SaaS multi-tenant, plataformas de e-commerce, sites institucionais, sistemas internos e APIs, resolvendo problemas de produção e de isolamento entre tenants e, mais recentemente, coordenando as demandas do time, revisando código e definindo as diretrizes de engenharia que seguimos.',
        'O trabalho é sobre projetar APIs, gerenciar o fluxo de dados e construir sistemas confiáveis, eficientes e escaláveis. Não só interfaces bonitas.',
        'Atualmente concluindo o bacharelado em Engenharia de Software na PUC Minas.',
      ],
      aside: 'Fora da tecnologia: treino, música e moda. Valorizo consistência, desafios e crescimento contínuo.',
    },

    contact,
  },
}
