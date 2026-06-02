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
  { type: 'outcome', label: 'Approved AI System' },
  { type: 'end', label: 'Deploy, Monitor & Review' },
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

// The single message most executives miss.
export const importantMessage =
  'Approving a product is not the same as approving a use case. A product can be ' +
  'safe to use and still be unsafe for a specific purpose — so every use case needs ' +
  'its own AIAF evaluation before an AI system is approved.'

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

// Mini self-check — reinforces which step handles each activity.
export const selfCheck = {
  options: [
    { id: 'product', label: 'Product Evaluation' },
    { id: 'usecase', label: 'Use Case Evaluation (AIAF)' },
    { id: 'office', label: 'Office of AI' },
  ],
  questions: [
    {
      prompt: 'Checking data sovereignty, supplier risk and procurement.',
      answer: 'product',
      explanation:
        'Product Evaluation (Agency accountability) asks whether the product itself is safe to use.',
    },
    {
      prompt: 'Assessing human rights, fairness and human impacts for the intended use.',
      answer: 'usecase',
      explanation:
        'Use Case Evaluation (the AIAF, Business accountability) asks whether it is safe for this purpose.',
    },
    {
      prompt: 'Setting the high-risk AI criteria that every agency uses.',
      answer: 'office',
      explanation:
        'The Office of AI owns the policy, the AIAF and the high-risk criteria — the rules both evaluations work within.',
    },
    {
      prompt: 'Confirming the product’s cyber security and architecture.',
      answer: 'product',
      explanation:
        'Cyber security and architecture are part of evaluating the product or solution.',
    },
    {
      prompt: 'Deciding if a purpose is appropriate, with monitoring and redress in place.',
      answer: 'usecase',
      explanation:
        'Transparency, monitoring and appeal & redress are assessed in the Use Case Evaluation (AIAF).',
    },
  ],
  closingMessage:
    'Two questions, two owners: is the product safe to use, and is it safe for this purpose?',
}
