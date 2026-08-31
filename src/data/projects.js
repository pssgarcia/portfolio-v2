// Projects. The three with a screenshot lead (full-width); the rest follow in a
// 2-up text ledger. Titles and descriptions are translated. Synced 2026-08-30.

const tayroImg = new URL('../assets/img/tayro.jpg', import.meta.url).href
const barbeariaImg = new URL('../assets/img/barbearia-do-davi.jpg', import.meta.url).href
const readviceImg = new URL('../assets/img/readvice.jpg', import.meta.url).href

const base = [
  {
    title: 'Tayro',
    description:
      'A two-sided SaaS marketplace connecting brands and fitness creators. Campaign lifecycle as a guarded state machine, race-condition-safe application flow, and live media kits from the Instagram API.',
    techs: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: '',
    repoPrivate: true,
    demo: 'https://tayro.app.br/',
    image: tayroImg,
  },
  {
    title: 'Barbearia do Davi',
    description:
      'Booking-first landing page for a Belo Horizonte barbershop: WhatsApp scheduling, an animated rotating headline, and a services and location flow. Built for a real client.',
    techs: ['Next.js', 'React', 'Tailwind CSS'],
    github: '',
    repoPrivate: true,
    demo: 'https://barbearia-do-davi.vercel.app/',
    image: barbeariaImg,
  },
  {
    title: 'Readvice',
    description:
      'A book-discovery website built with a team during my Web Development program in Vancouver: keyword and category search over a books API, book detail views, and a personal reading list.',
    techs: ['Vue.js', 'JavaScript', 'API'],
    github: 'https://github.com/DYagmur/ReadVice',
    demo: '',
    image: readviceImg,
  },
  {
    title: 'CPU Scheduling Simulator',
    description:
      'Four CPU scheduling algorithms in Java (FCFS, SRTF, Round-Robin with an exponential-prediction quantum, and a multilevel queue) behind a Strategy-pattern abstraction, reporting average wait, turnaround, and throughput. An Operating Systems assignment at PUC Minas.',
    techs: ['Java', 'Strategy Pattern', 'Algorithms'],
    github: 'https://github.com/pssgarcia/simulador-escalonamento',
    demo: '',
  },
  {
    title: 'Expense Tracker',
    description: 'Personal finance app for tracking income and expenses, with visual summaries and transaction history.',
    techs: ['Vue.js', 'JavaScript', 'CSS'],
    github: 'https://github.com/pssgarcia/expense_tracker',
    demo: 'https://pedro-expense-tracker.netlify.app',
  },
  {
    title: 'Movie Search Gallery',
    description: 'Movie discovery app on an external API, with search, filtering, and detail views.',
    techs: ['React', 'JavaScript', 'API'],
    github: 'https://github.com/pssgarcia/movie_land',
    demo: '',
  },
]

const ptDescriptions = {
  Tayro:
    'Marketplace SaaS de dois lados conectando marcas e criadores fitness. Ciclo de vida de campanha como máquina de estados guardada, fluxo de aplicação seguro contra condições de corrida e mídia kits ao vivo pela API do Instagram.',
  'Barbearia do Davi':
    'Landing page focada em agendamento para uma barbearia em Belo Horizonte: marcação pelo WhatsApp, um título animado que se alterna e um fluxo de serviços e localização. Feito para um cliente real.',
  Readvice:
    'Website de descoberta de livros feito em equipe durante meu curso de Web Development em Vancouver: busca por palavra-chave e categoria sobre uma API de livros, telas de detalhe e uma lista de leitura pessoal.',
  'CPU Scheduling Simulator':
    'Quatro algoritmos de escalonamento de CPU em Java (FCFS, SRTF, Round-Robin com quantum por previsão exponencial e uma fila multinível) atrás de uma abstração com padrão Strategy, medindo tempo de espera médio, turnaround e vazão. Trabalho de Sistemas Operacionais na PUC Minas.',
  'Expense Tracker':
    'App de finanças pessoais para acompanhar receitas e despesas, com resumos visuais e histórico de transações.',
  'Movie Search Gallery':
    'App de descoberta de filmes sobre uma API externa, com busca, filtros e telas de detalhe.',
}

const ptTitles = {
  'CPU Scheduling Simulator': 'Simulador de Escalonamento de CPU',
}

export const projectsContent = {
  en: base,
  pt: base.map((p) => ({
    ...p,
    title: ptTitles[p.title] ?? p.title,
    description: ptDescriptions[p.title] ?? p.description,
  })),
}
