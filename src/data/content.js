// Single source of truth for all copy in the tool.
// Edit text here — components read from this file so wording stays consistent.

export const intro = {
  title: 'NSW AI Governance & Assurance',
  tagline: 'From "I want to use AI" to a safely deployed AI system.',
}

// The journey — the hero visual.
// node types: 'start' | 'gate' | 'outcome' | 'end'
// gate colours map to keys in index.css (--gate-product / --gate-usecase)
export const journey = [
  { type: 'start', label: 'I want to use AI' },
  {
    type: 'gate',
    id: 'product',
    title: 'Product Evaluation',
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
  { type: 'outcome', label: 'Approved Product / Solution' },
  {
    type: 'gate',
    id: 'usecase',
    title: 'Use Case Evaluation (AIAF)',
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
  { type: 'outcome', label: 'Agency approved use case' },
  { type: 'end', label: 'Deploy, Monitor & Review' },
]

// Today vs future state for each step of the journey.
// id matches the journey gate so the colour coding lines up.
export const todayFuture = [
  {
    id: 'product',
    step: 'Step 1',
    label: 'Product Evaluation',
    today: 'Siloed and manual',
    future: 'AI-augmented and connected',
  },
  {
    id: 'usecase',
    step: 'Step 2',
    label: 'Use Case Evaluation (AIAF)',
    today: 'Manual (Excel)',
    future: 'Automated system',
  },
  {
    id: 'assurance',
    step: 'Step 3',
    label: 'Agency Assurance',
    today: 'Domain-siloed — cyber, data, privacy, AI, architecture',
    future: 'Integrated',
    highlight: 'Reaching the integrated future requires agency focus and priority.',
  },
]
