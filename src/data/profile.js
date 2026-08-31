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
      lead: 'Across the stack, with a stronger pull toward the backend: PHP, Laravel, and MySQL, with Vue and JavaScript on the frontend and Node.js when the product calls for it.',
      paragraphs: [
        'My path started in Vancouver, Canada, with an intensive web development program at Tamwood International College. Since then I have gone from intern to Junior Developer III at Construsite Brasil, working on SaaS products, e-commerce platforms, internal systems, and APIs.',
        'Over the past two years I have taken on more ownership, moving beyond feature work into system design, performance, integrations, and technical decisions, and resolving production and performance issues along the way. I like building the parts that make everything else possible, and I care about how software works under the hood.',
        'For a stretch I also stepped in as interim team lead: taking in demands, delegating tasks, reviewing and approving code, testing, and helping teammates get unblocked.',
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
      lead: 'Em toda a stack, com inclinação maior para o backend: PHP, Laravel e MySQL, com Vue e JavaScript no frontend e Node.js quando o produto pede.',
      paragraphs: [
        'Meu caminho começou em Vancouver, no Canadá, num programa intensivo de desenvolvimento web no Tamwood International College. De lá para cá, fui de estagiário a Desenvolvedor Júnior III na Construsite Brasil, trabalhando com produtos SaaS, plataformas de e-commerce, sistemas internos e APIs.',
        'Nos últimos dois anos assumi mais responsabilidade, indo além do desenvolvimento de features para design de sistemas, performance, integrações e decisões técnicas, resolvendo problemas de produção e de performance pelo caminho. Gosto de construir as partes que sustentam todo o resto e me importo com como o software funciona por baixo dos panos.',
        'Por um período também assumi a liderança do time de forma interina: recebendo demandas, delegando tarefas, revisando e aprovando código, testando e ajudando a equipe a destravar.',
        'Atualmente concluindo o bacharelado em Engenharia de Software na PUC Minas.',
      ],
      aside: 'Fora da tecnologia: treino, música e moda. Valorizo consistência, desafios e crescimento contínuo.',
    },

    contact,
  },
}
