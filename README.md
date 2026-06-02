# NSW AI Governance & Assurance — explainer tool

A simple, intuitive web tool that helps NSW agencies understand AI governance and
assurance: **who sets the rules, who identifies requirements, and who completes
assurance and approves use.**

It communicates three distinct responsibilities as a value chain:

| Stage | Owner | Purpose |
| --- | --- | --- |
| NSW AI Policy & Standards | Office of AI | Define minimum requirements |
| AIAF Assessment | AIAF | Identify what must be done |
| Agency Assurance & Approval | Agency | Complete assurance activities and approve use |

The central message the tool reinforces:

> The AIAF identifies *what* assurance activities are required. Agencies remain
> responsible for *completing* those activities and *approving* the use case.

## What's on the page

1. **The value chain** — three colour-coded stages, each expandable to show what it
   owns / does not own.
2. **The message most executives miss** — a single, prominent callout.
3. **What the AIAF is / is not** — a clear two-column comparison.
4. **Who owns what** — Office of AI vs Agency responsibilities.
5. **The separation, at a glance** — Sets Rules → Identifies Requirements → Provides
   Evidence / Approves Use.
6. **Quick self-check** — five questions that reinforce the ownership split.

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
