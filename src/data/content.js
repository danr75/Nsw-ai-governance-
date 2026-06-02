// Single source of truth for all copy in the tool.
// Edit text here — components read from this file so wording stays consistent.

export const intro = {
  title: 'NSW AI Governance & Assurance',
  tagline: 'Who does what — from policy, to assessment, to approval.',
  lead:
    'Three distinct responsibilities sit behind every AI use case in NSW. ' +
    'The Office of AI sets the rules, the AIAF identifies what must be done, ' +
    'and the agency completes assurance and approves the use.',
}

// The three stages of the value chain — the hero visual.
// owner colours map to keys defined in index.css (--owner-office / --owner-aiaf / --owner-agency)
export const stages = [
  {
    id: 'office',
    owner: 'Office of AI',
    purpose: 'Define minimum requirements',
    title: 'NSW AI Policy & Standards',
    summary: 'Sets the state-wide rules, standards and definitions that every agency works within.',
    items: [
      'NSW AI Policy',
      'NSW AI Assessment Framework (AIAF)',
      'High-Risk AI Definitions',
      'Guidance, Templates and Standards',
    ],
    detail: {
      ownsLabel: 'The Office of AI owns',
      owns: [
        'NSW AI Policy',
        'AIAF',
        'High-risk AI criteria',
        'Guidance and templates',
        'State-wide monitoring and reporting',
        'Strategic advice and capability uplift',
      ],
      notOwnsLabel: 'The Office of AI does not own',
      notOwns: [
        'Agency implementation',
        'Agency approvals',
        'Agency risk acceptance',
        'Privacy reviews',
        'Cyber reviews',
        'Legal reviews',
        'Operational assurance',
      ],
    },
  },
  {
    id: 'aiaf',
    owner: 'AIAF',
    purpose: 'Identify what must be done',
    title: 'AIAF Assessment',
    badge: '~15 mins',
    summary: 'A short assessment that identifies AI risks and the assurance requirements that apply.',
    determines: ['Am I using AI?', 'Is the use case high risk?', 'What requirements apply?'],
    items: [
      'Privacy Impact Assessment',
      'Human Rights Assessment',
      'Records Management Requirements',
      'Cyber and Security Reviews',
      'Governance Approvals',
    ],
    itemsLabel: 'Examples of requirements it may identify',
    detail: {
      ownsLabel: 'What the AIAF is',
      owns: [
        'A 15-minute assessment that identifies AI risks and applicable requirements',
        'A single entry point to existing agency assurance obligations',
        'A mechanism to consistently identify high-risk AI use cases',
        'A way to make existing compliance requirements easier to navigate',
      ],
      notOwnsLabel: 'What the AIAF is not',
      notOwns: [
        'Not an approval process',
        'Not a replacement for agency privacy, legal, cyber, records or risk processes',
        'Not evidence that a solution is compliant',
        'Not an operational assurance function',
      ],
    },
  },
  {
    id: 'agency',
    owner: 'Agency',
    purpose: 'Complete assurance & approve use',
    title: 'Agency Assurance & Approval',
    summary: 'Agencies complete and evidence the required assurance, then approve deployment and use.',
    items: ['Privacy', 'Legal', 'Cyber', 'Data', 'Records', 'Business Risk'],
    itemsLabel: 'Agencies complete and evidence',
    footnote: 'Agencies approve deployment and use.',
    detail: {
      ownsLabel: 'The agency owns',
      owns: [
        'Completing assurance activities',
        'Producing evidence',
        'Risk acceptance',
        'Approvals',
        'Ongoing monitoring',
        'Incident management',
        'Compliance with agency policies',
      ],
    },
  },
]

// "What AIAF is" ✓ / "What AIAF is not" ✗
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
  'The AIAF identifies what assurance activities are required. Agencies remain ' +
  'responsible for completing those activities and approving the use case.'

// The compact separation diagram — central policy, federated agency accountability.
export const separation = [
  { owner: 'Office of AI', lines: ['Sets the Rules'] },
  { owner: 'AIAF', lines: ['Identifies Requirements'] },
  {
    owner: 'Agency',
    lines: ['Provides Evidence', 'Conducts Assurance', 'Approves Use', 'Accepts Risk'],
  },
]

// Mini self-check — reinforces who is responsible for each activity.
export const selfCheck = {
  options: [
    { id: 'office', label: 'Office of AI' },
    { id: 'aiaf', label: 'AIAF' },
    { id: 'agency', label: 'Agency' },
  ],
  questions: [
    {
      prompt: 'Setting the high-risk AI criteria that all agencies use.',
      answer: 'office',
      explanation:
        'The Office of AI owns the high-risk AI criteria, the NSW AI Policy and the AIAF itself.',
    },
    {
      prompt: 'Identifying which assurance requirements apply to a use case.',
      answer: 'aiaf',
      explanation:
        'The AIAF identifies the risks and the requirements — but it does not complete them.',
    },
    {
      prompt: 'Completing the privacy impact assessment and producing the evidence.',
      answer: 'agency',
      explanation:
        'Completing assurance activities and producing evidence is owned by the agency.',
    },
    {
      prompt: 'Approving the deployment and accepting the residual risk.',
      answer: 'agency',
      explanation:
        'Approval and risk acceptance always sit with the agency — the AIAF is not an approval process.',
    },
    {
      prompt: 'State-wide monitoring, reporting and capability uplift.',
      answer: 'office',
      explanation:
        'State-wide monitoring, reporting and capability uplift are owned by the Office of AI.',
    },
  ],
  closingMessage:
    'The AIAF identifies what is required. Agencies complete the assurance and approve the use.',
}
