// Single source of truth for all copy in the tool.
// Edit text here — components read from this file so wording stays consistent.

export const intro = {
  title: 'NSW AI Governance & Assurance',
  tagline: 'From "I want to use AI" to a safely deployed AI system.',
}

export const startLabel = 'I want to use AI'

// The five process steps.
//  short    = process-bar label
//  tool     = the automated tool that accelerates the step in future
//  question = the question the step answers (shown on the future card)
//  cards    = the Card type it creates / finds / reuses (shown on the connector when selected)
//  uses     = which Reuse Platform capabilities it draws on (attribute ids)
//  assess / outcome / accountability = detail shown when the step is selected
export const steps = [
  {
    id: 'product',
    n: 1,
    short: 'Evaluate Product',
    title: 'Evaluate Product',
    accountability: 'Agency Accountability',
    today: 'Siloed & manual',
    tool: 'AI Powered Assessment',
    question: 'Can we safely use this product or solution?',
    cards: 'Product Cards',
    uses: ['cards', 'register', 'api'],
    assess: [
      'Cyber security',
      'Privacy',
      'Data sovereignty',
      'Supplier risks',
      'Procurement',
      'Architecture',
      'Legal obligations',
    ],
    outcome: 'Approved product / solution',
  },
  {
    id: 'usecase',
    n: 2,
    short: 'Assess Use Case',
    title: 'Assess Use Case (AIAF)',
    accountability: 'Business Accountability',
    today: 'Manual (Excel)',
    tool: 'AIAF Intelligence Platform',
    question: 'Can we safely use this product for this purpose?',
    cards: 'Risk Cards',
    uses: ['cards', 'structured', 'api'],
    assess: [
      'Intended use',
      'Human impacts',
      'Fairness',
      'Privacy impacts',
      'Legal compliance',
      'Human rights',
      'Transparency',
      'Monitoring',
      'Appeal & redress',
    ],
    outcome: 'Assurance requirements identified',
  },
  {
    id: 'assurance',
    n: 3,
    short: 'Approve Use',
    title: 'Approve Use',
    accountability: 'Agency Accountability',
    today: 'Domain-siloed',
    tool: 'Use Case Integrated Assurance',
    question: 'Have we established accountability and accepted the risk?',
    cards: 'Control & Evidence Cards',
    uses: ['cards', 'structured', 'register'],
    assess: [
      'Privacy',
      'Legal',
      'Cyber',
      'Data',
      'Records',
      'Business risk',
      'Evidence',
      'Risk acceptance',
      'Approval & sign-off',
    ],
    outcome: 'Agency approved use case',
  },
  {
    id: 'build',
    n: 4,
    short: 'Build & Deploy',
    title: 'Build & Deploy',
    accountability: 'Delivery Accountability',
    today: 'Bespoke & manual',
    tool: 'Delivery Pipeline',
    question: 'Can we build and deploy it safely and reliably?',
    cards: 'Pattern & Config Cards',
    uses: ['cards', 'api', 'cdn'],
    assess: [
      'Solution design',
      'Integration',
      'Security hardening',
      'Testing & assurance',
      'Change management',
      'Training & readiness',
      'Controlled rollout',
    ],
    outcome: 'Deployed AI system',
  },
  {
    id: 'operate',
    n: 5,
    short: 'Operate & Review',
    title: 'Operate & Review',
    accountability: 'Agency Accountability',
    today: 'Point-in-time checks',
    tool: 'Monitoring Suite',
    question: 'Is it still safe and operating as intended over time?',
    cards: 'Monitoring Cards',
    uses: ['cards', 'cdn', 'api'],
    assess: [
      'Performance monitoring',
      'Model drift',
      'Incident management',
      'Human oversight',
      'Periodic review',
      'Audit & reporting',
      'Decommissioning',
    ],
    outcome: 'Ongoing assurance & improvement',
  },
]

// The shared foundation every future tool creates, finds & reuses Cards from.
export const reusePlatform = {
  name: 'Reuse Platform',
  tagline: 'Lightweight · low-cost · highly efficient',
  actions: ['Create', 'Find', 'Reuse'],
  attributes: [
    { id: 'cards', icon: 'data_object', label: 'JSON Cards & configuration items' },
    { id: 'structured', icon: 'account_tree', label: 'Structured storage' },
    { id: 'api', icon: 'api', label: 'API-accessible' },
    { id: 'register', icon: 'app_registration', label: 'Register-driven' },
    { id: 'cdn', icon: 'hub', label: 'CDN distribution' },
  ],
  runsOn: 'Tools run on the desktop or the shared platform ecosystem',
}
