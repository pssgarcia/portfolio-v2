// Flat cloud, ordered by weight; backend and data first, practices last.
// Most names are proper nouns (shared); the descriptive ones are translated for PT.

const en = [
  { name: 'PHP', icon: '🐘' },
  { name: 'Laravel', icon: '🔺' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'NestJS', icon: '🪺' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'SQL', icon: '🧮' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'AWS S3', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Git', icon: '📦' },
  { name: 'CI/CD', icon: '🔁' },
  { name: 'OOP', icon: '🧩' },
  { name: 'SOLID', icon: '🏛️' },
  { name: 'Clean Code', icon: '🧼' },
  { name: 'Design Patterns', icon: '📐' },
  { name: 'Software Architecture', icon: '🏗️' },
  { name: 'Agile / Kanban', icon: '📋' },
]

const ptNames = {
  'REST APIs': 'APIs REST',
  OOP: 'POO',
  'Design Patterns': 'Padrões de Projeto',
  'Software Architecture': 'Arquitetura de Software',
  'Agile / Kanban': 'Ágil / Kanban',
}

export const skillsContent = {
  en,
  pt: en.map((s) => ({ ...s, name: ptNames[s.name] ?? s.name })),
}
