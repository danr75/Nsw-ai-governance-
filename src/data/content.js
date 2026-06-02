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

// "What the AIAF is" ✓ / "What the AIAF is not" ✗ — clarifies the Use Case Evaluation step.
export const keyMessages = {
  is: [
    'A 15-minute assessment that identifies AI risks and applicable requirements.',
    'A single entry point to existing agency assurance obligations.',
    'A mechanism to consistently identify high-risk AI use cases.',
    'A way to make existing compliance requirements easier to navigate.',
  ],
  isNot: [
    'Not an approval process.',
    'Not a replacement for agency privacy, legal, cyber, records or risk processes.',
    'Not evidence that a solution is compliant.',
    'Not an operational assurance function.',
  ],
}

// Office of AI context — central policy, federated agency accountability.
export const officeOfAI = {
  intro: 'Both evaluations happen within the rules the Office of AI sets state-wide.',
  owns: [
    'NSW AI Policy',
    'AIAF',
    'High-risk AI criteria',
    'Guidance and templates',
    'State-wide monitoring and reporting',
    'Strategic advice and capability uplift',
  ],
  doesNotOwn: [
    'Product evaluations',
    'Use case evaluations',
    'Agency approvals',
    'Risk acceptance',
    'Privacy, cyber and legal reviews',
    'Operational assurance',
  ],
}
