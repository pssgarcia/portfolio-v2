// Roles + education, EN + PT-BR. Accomplishments as discrete lines.
// Synced to Pedro's CV on 2026-08-30.

export const experienceContent = {
  en: [
    {
      dateFrom: 'Jun 2026',
      dateTo: 'Present',
      title: 'Junior Developer III',
      org: 'Construsite Brasil · Belo Horizonte',
      type: 'work',
      points: [
        'Architected and shipped a rule-based lead-distribution engine (concurrent round-robin queues with priority ordering and configurable entry rules) across schema design, a standalone rule-evaluation service, and the management UI.',
        'Designed an end-to-end notification system (bell, toasts, preferences, history) on an event-driven Observer pattern, capturing lead creation and ownership changes across web forms, REST APIs, and workflow automations.',
        'Led a performance initiative across the multi-tenant CRM’s REST API, eliminating N+1 queries and unintended lazy loading on key endpoints.',
        'Took on technical leadership during the manager’s absence: coordinating team demands, reviewing code, validating sprint deliveries, and approving pull requests and merges.',
        'Set the team’s engineering guidelines for eager loading, backend validation, testing, and multi-tenant migrations, now used in code review and AI-assisted development.',
      ],
    },
    {
      dateFrom: 'Oct 2025',
      dateTo: 'Jun 2026',
      title: 'Junior Developer II',
      org: 'Construsite Brasil · Belo Horizonte',
      type: 'work',
      points: [
        'Investigated and resolved a critical cross-database authentication issue affecting tenant isolation in a CRM used by multiple companies, closing a potential production data-exposure risk.',
        'Designed and implemented an AWS S3 integration for file storage in a legacy PHP 7.4 ERP: a progressive rollout with secure download validation that removed the local-storage dependency.',
        'Built end-to-end CRM features and automations, including a WhatsApp template module with REST APIs and webhooks and an AI-powered deal-summary feature on the OpenAI API.',
        'Modernized payment and shipping integrations in an e-commerce platform: REDE OAuth 2.0 migration, Mercado Pago checkout fixes, and Melhor Envio integration.',
      ],
    },
    {
      dateFrom: 'Apr 2025',
      dateTo: 'Oct 2025',
      title: 'Junior Developer I',
      org: 'Construsite Brasil · Belo Horizonte',
      type: 'work',
      points: [
        'Automated ERP workflows with PHP/MySQL and scheduled jobs, cutting manual work across billing and operational processes.',
        'Developed and maintained features for a proprietary CMS used by thousands of websites, integrating third-party services and improving production stability through defensive programming and SQL optimization.',
      ],
    },
    {
      dateFrom: 'Aug 2024',
      dateTo: 'Apr 2025',
      title: 'Web Development Intern',
      org: 'Construsite Brasil · Belo Horizonte',
      type: 'work',
      points: [
        'Developed responsive interfaces, fixed production issues, and ran database queries and data manipulation to support existing features.',
      ],
    },
    {
      dateFrom: 'Feb 2024',
      dateTo: 'Present',
      title: 'B.Sc. Software Engineering',
      org: 'PUC Minas · Belo Horizonte',
      type: 'education',
      points: [
        'Focused on software architecture, scalable systems, algorithms, and modern development practices.',
      ],
    },
    {
      dateFrom: '2023',
      dateTo: '',
      title: 'Web Development Program',
      org: 'Tamwood International College · Vancouver',
      type: 'education',
      points: [
        'Intensive full-stack course: HTML, CSS, JavaScript, Node.js, React, Vue.js, PHP, MySQL, and Tailwind. Team projects with Git.',
        'Star Student Recognition.',
      ],
    },
  ],

  pt: [
    {
      dateFrom: 'jun 2026',
      dateTo: 'Atual',
      title: 'Desenvolvedor Júnior III',
      org: 'Construsite Brasil · Belo Horizonte',
      type: 'work',
      points: [
        'Arquitetei e entreguei um motor de distribuição de leads baseado em regras (filas round-robin concorrentes com ordenação por prioridade e regras de entrada configuráveis), abrangendo modelagem de schema, um serviço isolado de avaliação de regras e a interface de gestão.',
        'Projetei um sistema de notificações de ponta a ponta (sino, toasts, preferências, histórico) sobre um padrão Observer orientado a eventos, capturando criação de leads e mudanças de posse em formulários web, APIs REST e automações de workflow.',
        'Liderei uma iniciativa de performance na API REST do CRM multi-tenant, eliminando queries N+1 e lazy loading indevido em endpoints-chave.',
        'Assumi a liderança técnica durante a ausência do gestor: coordenando demandas do time, revisando código, validando entregas de sprint e aprovando pull requests e merges.',
        'Defini as diretrizes de engenharia do time para eager loading, validação no backend, testes e migrations multi-tenant, hoje usadas em code review e no desenvolvimento assistido por IA.',
      ],
    },
    {
      dateFrom: 'out 2025',
      dateTo: 'jun 2026',
      title: 'Desenvolvedor Júnior II',
      org: 'Construsite Brasil · Belo Horizonte',
      type: 'work',
      points: [
        'Investiguei e resolvi um problema crítico de autenticação entre bancos que afetava o isolamento de tenants em um CRM usado por várias empresas, fechando um risco de exposição de dados em produção.',
        'Projetei e implementei uma integração com AWS S3 para armazenamento de arquivos em um ERP legado em PHP 7.4: um rollout progressivo com validação segura de download que removeu a dependência de armazenamento local.',
        'Construí features e automações de CRM de ponta a ponta, incluindo um módulo de templates de WhatsApp com APIs REST e webhooks e um recurso de resumo de negócios com IA sobre a API da OpenAI.',
        'Modernizei integrações de pagamento e frete em uma plataforma de e-commerce: migração para REDE OAuth 2.0, correções no checkout do Mercado Pago e integração com o Melhor Envio.',
      ],
    },
    {
      dateFrom: 'abr 2025',
      dateTo: 'out 2025',
      title: 'Desenvolvedor Júnior I',
      org: 'Construsite Brasil · Belo Horizonte',
      type: 'work',
      points: [
        'Automatizei fluxos de ERP com PHP/MySQL e jobs agendados, reduzindo trabalho manual em processos de faturamento e operação.',
        'Desenvolvi e mantive features de um CMS proprietário usado por milhares de sites, integrando serviços de terceiros e melhorando a estabilidade em produção com programação defensiva e otimização de SQL.',
      ],
    },
    {
      dateFrom: 'ago 2024',
      dateTo: 'abr 2025',
      title: 'Estagiário de Desenvolvimento Web',
      org: 'Construsite Brasil · Belo Horizonte',
      type: 'work',
      points: [
        'Desenvolvi interfaces responsivas, corrigi problemas em produção e executei queries e manipulação de dados para dar suporte a features existentes.',
      ],
    },
    {
      dateFrom: 'fev 2024',
      dateTo: 'Atual',
      title: 'Bacharelado em Engenharia de Software',
      org: 'PUC Minas · Belo Horizonte',
      type: 'education',
      points: [
        'Foco em arquitetura de software, sistemas escaláveis, algoritmos e práticas modernas de desenvolvimento.',
      ],
    },
    {
      dateFrom: '2023',
      dateTo: '',
      title: 'Programa de Desenvolvimento Web',
      org: 'Tamwood International College · Vancouver',
      type: 'education',
      points: [
        'Curso intensivo full-stack: HTML, CSS, JavaScript, Node.js, React, Vue.js, PHP, MySQL e Tailwind. Projetos em equipe com Git.',
        'Reconhecimento de Aluno Destaque.',
      ],
    },
  ],
}
