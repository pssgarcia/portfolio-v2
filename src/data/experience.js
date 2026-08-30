// Accomplishments as discrete lines, not one paragraph.
export const experience = [
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
    title: "B.Sc. Software Engineering",
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
]
