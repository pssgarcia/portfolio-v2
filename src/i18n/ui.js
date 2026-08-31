// UI chrome strings (navigation, headings, labels, form messages).
// Editorial prose lives in src/data/*.js as { en, pt } trees.
// {placeholders} are filled by t(key, vars) in useLanguage.

export const ui = {
  en: {
    // nav
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
    navHome: 'Pedro Soares, back to top',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    langSwitch: 'Mudar para português',
    langCurrent: 'EN',

    // section headings
    aboutHeading: 'Where the work comes from',
    aboutStackMark: 'What I work with',
    experienceHeading: 'Experience',
    projectsHeading: 'Projects',
    projectsMore: 'Show older',
    projectsLess: 'Show fewer',

    // timeline
    timelineTo: 'to',
    timelinePresent: 'Present',
    chipWork: 'Work',
    chipEducation: 'Education',

    // projects
    linkGithub: 'GitHub',
    linkPrivate: 'Private repo',
    linkDemo: 'Live demo',

    // contact
    contactPullBefore: 'Open to talking about ',
    contactPullBold: 'systems',
    contactPullAfter: ', back-end work, and interesting problems.',
    fieldName: 'Name',
    fieldEmail: 'Email',
    fieldMessage: 'Message',
    formHoneypot: "Don't fill this out:",
    formSubmit: 'Send message',
    formSubmitting: 'Sending…',
    formOk: "Message sent. I'll get back to you soon.",
    formError: 'Something went wrong. Email me directly at pedrossgarcia88@gmail.com.',
    errNameRequired: 'Enter your name',
    errEmailRequired: 'Enter your email',
    errEmailInvalid: 'Enter a valid email address',
    errMessageRequired: 'Enter a message',
    errMessageShort: 'A little more detail, please (at least 10 characters)',

    // footer
    footerLine: '© {year} Pedro Soares · Belo Horizonte, Brazil',
    backToTop: 'Back to top',
  },

  pt: {
    // nav
    navAbout: 'Sobre',
    navExperience: 'Experiência',
    navProjects: 'Projetos',
    navContact: 'Contato',
    navHome: 'Pedro Soares, voltar ao topo',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    themeToLight: 'Mudar para o tema claro',
    themeToDark: 'Mudar para o tema escuro',
    langSwitch: 'Switch to English',
    langCurrent: 'PT',

    // section headings
    aboutHeading: 'De onde vem o trabalho',
    aboutStackMark: 'Com o que eu trabalho',
    experienceHeading: 'Experiência',
    projectsHeading: 'Projetos',
    projectsMore: 'Ver mais antigos',
    projectsLess: 'Ver menos',

    // timeline
    timelineTo: 'até',
    timelinePresent: 'Atual',
    chipWork: 'Trabalho',
    chipEducation: 'Formação',

    // projects
    linkGithub: 'GitHub',
    linkPrivate: 'Repositório privado',
    linkDemo: 'Demo ao vivo',

    // contact
    contactPullBefore: 'Aberto a conversar sobre ',
    contactPullBold: 'sistemas',
    contactPullAfter: ', trabalho back-end e problemas interessantes.',
    fieldName: 'Nome',
    fieldEmail: 'E-mail',
    fieldMessage: 'Mensagem',
    formHoneypot: 'Não preencha isto:',
    formSubmit: 'Enviar mensagem',
    formSubmitting: 'Enviando…',
    formOk: 'Mensagem enviada. Retorno em breve.',
    formError: 'Algo deu errado. Me escreva direto em pedrossgarcia88@gmail.com.',
    errNameRequired: 'Informe seu nome',
    errEmailRequired: 'Informe seu e-mail',
    errEmailInvalid: 'Informe um e-mail válido',
    errMessageRequired: 'Escreva uma mensagem',
    errMessageShort: 'Um pouco mais de detalhe, por favor (no mínimo 10 caracteres)',

    // footer
    footerLine: '© {year} Pedro Soares · Belo Horizonte, Brasil',
    backToTop: 'Voltar ao topo',
  },
}
