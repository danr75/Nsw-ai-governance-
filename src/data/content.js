// Single source of truth for all copy in the tool.
// Edit text here — components read from this file so wording stays consistent.

export const intro = {
  title: 'NSW AI Governance & Assurance',
  tagline: 'From "I want to use AI" to a safely deployed AI system.',
}

export const startLabel = 'I want to use AI'

// The five process steps. For each: today = siloed state; future = connected
// state; tool + cards = how its future tooling uses the Reuse Platform.
export const steps = [
  {
    id: 'product',
    n: 1,
    short: 'Product',
    title: 'Product Evaluation',
    today: 'Siloed & manual',
    future: 'AI-augmented & connected',
    tool: 'Product Assessment',
    cards: 'Product Cards',
  },
  {
    id: 'usecase',
    n: 2,
    short: 'Use Case (AIAF)',
    title: 'Use Case Evaluation (AIAF)',
    today: 'Manual (Excel)',
    future: 'Automated & connected',
    tool: 'AIAF Tool',
    cards: 'Risk Cards',
  },
  {
    id: 'assurance',
    n: 3,
    short: 'Agency Assurance',
    title: 'Agency Assurance',
    today: 'Domain-siloed',
    future: 'Integrated',
    tool: 'Assurance Workspace',
    cards: 'Control & Evidence Cards',
  },
  {
    id: 'build',
    n: 4,
    short: 'Build & Deploy',
    title: 'Build & Deploy',
    today: 'Bespoke & manual',
    future: 'Reusable & automated',
    tool: 'Delivery Pipeline',
    cards: 'Pattern & Config Cards',
  },
  {
    id: 'operate',
    n: 5,
    short: 'Operate & Review',
    title: 'Operate & Review',
    today: 'Point-in-time checks',
    future: 'Continuous monitoring',
    tool: 'Monitoring Suite',
    cards: 'Monitoring Cards',
  },
]

// The shared foundation every future tool creates, finds & reuses Cards from.
export const reusePlatform = {
  name: 'Reuse Platform',
  tagline: 'Lightweight · low-cost · highly efficient',
  // what each tool does with the platform
  actions: ['Create', 'Find', 'Reuse'],
  // what the platform is
  attributes: [
    { icon: 'data_object', label: 'JSON Cards & configuration items' },
    { icon: 'account_tree', label: 'Structured storage' },
    { icon: 'api', label: 'API-accessible' },
    { icon: 'app_registration', label: 'Register-driven' },
    { icon: 'hub', label: 'CDN distribution' },
  ],
  runsOn: 'Tools run on the desktop or the shared platform ecosystem',
}
