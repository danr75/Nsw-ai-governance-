// Single source of truth for all copy in the tool.
// Edit text here — components read from this file so wording stays consistent.

export const intro = {
  title: 'NSW AI Governance & Assurance',
  tagline: 'From "I want to use AI" to a safely deployed AI system.',
}

// Lead-in label shown at the start of the process bar.
export const startLabel = 'I want to use AI'

// The end-to-end process — five steps. `short` is used in the top process bar,
// `title` in the step card. Gate colours map to --gate-<id> in index.css.
export const journey = [
  {
    type: 'gate',
    id: 'product',
    title: 'Product Evaluation',
    short: 'Product',
    question: 'Can we safely use this product or solution?',
    accountability: 'Agency Accountability',
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
    type: 'gate',
    id: 'usecase',
    title: 'Use Case Evaluation (AIAF)',
    short: 'Use Case (AIAF)',
    question: 'Can we safely use this product for this purpose?',
    accountability: 'Business Accountability',
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
    type: 'gate',
    id: 'assurance',
    title: 'Agency Assurance',
    short: 'Agency Assurance',
    subtitle: 'Agency Risk Management & Assurance Processes',
    question: 'Have we completed the assurance and accepted the risk?',
    accountability: 'Agency Accountability',
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
    type: 'gate',
    id: 'build',
    title: 'Build & Deploy',
    short: 'Build & Deploy',
    question: 'Can we build and deploy it safely and reliably?',
    accountability: 'Delivery Accountability',
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
    type: 'gate',
    id: 'operate',
    title: 'Operate & Review',
    short: 'Operate & Review',
    question: 'Is it working as intended, and still safe over time?',
    accountability: 'Agency Accountability',
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

// Today vs future state for each step. id matches the journey gate.
export const todayFuture = [
  {
    id: 'product',
    today: 'Siloed and manual',
    future: 'AI-augmented and connected',
  },
  {
    id: 'usecase',
    today: 'Manual (Excel)',
    future: 'Automated system',
  },
  {
    id: 'assurance',
    today: 'Domain-siloed — cyber, data, privacy, AI, architecture',
    future: 'Integrated',
    highlight: 'Reaching the integrated future requires agency focus and priority.',
  },
  {
    id: 'build',
    today: 'Bespoke, manual delivery',
    future: 'Reusable, automated delivery',
  },
  {
    id: 'operate',
    today: 'Point-in-time checks',
    future: 'Continuous monitoring & review',
  },
]
