# NSW AI Governance & Assurance — explainer tool

A simple, intuitive web tool that helps NSW agencies understand AI governance and
assurance: **who sets the rules, who identifies requirements, and who completes
assurance and approves use.**

It centres on the assurance **journey** — the two evaluations every AI system passes
through before it can be deployed:

```
I want to use AI
   ↓
Product Evaluation        "Can we safely use this product or solution?"   (Agency accountability)
   ↓
Approved Product / Solution
   ↓
Use Case Evaluation (AIAF) "Can we safely use this product for this purpose?" (Business accountability)
   ↓
Approved AI System
   ↓
Deploy, Monitor & Review
```

The central message the tool reinforces:

> Approving a product is not the same as approving a use case. A product can be safe to
> use and still be unsafe for a specific purpose — so every use case needs its own AIAF
> evaluation before an AI system is approved.

## What's on the page

1. **The journey** — the two-evaluation flow (Product → Use Case), with each
   evaluation's question, accountability and what it assesses.
2. **The message most executives miss** — a single, prominent callout.
3. **What the AIAF is / is not** — a clear two-column comparison clarifying the Use Case
   Evaluation step.
4. **Where the Office of AI fits** — the central policy, AIAF and standards both
   evaluations work within (owns / does not own).
5. **Quick self-check** — five questions reinforcing which step handles what.

## Built to standard

- [NSW Design System](https://designsystem.nsw.gov.au/) (`nsw-design-system`) for
  typography (Public Sans), colour tokens and accessible base styles.
- WCAG 2.2 AA in mind: semantic landmarks, keyboard-operable controls, visible focus,
  and colour never used as the only signal.

## Tech stack

- [React](https://react.dev/) 18 + [Vite](https://vite.dev/) 5 (plain JavaScript, no
  router).
- All copy lives in `src/data/content.js` — edit there to change wording.

## Run it locally

```bash
npm install
npm run dev      # start the dev server (Vite prints the local URL)
```

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── main.jsx              # React root; imports NSW CSS + bespoke styles
├── App.jsx               # page composition
├── index.css            # bespoke styles (value chain, callouts, self-check)
├── data/content.js      # all copy + self-check questions (single source of truth)
└── components/          # Header, Hero, ValueChain, StageCard, KeyMessages,
                         #   Responsibilities, ImportantCallout, SeparationDiagram,
                         #   SelfCheck, Footer
```

## Scope

This is an **explainer**. It is **not** the AIAF assessment, and it is **not** a record
of compliance or approval.
