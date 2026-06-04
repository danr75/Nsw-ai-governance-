import { useEffect, useState } from 'react'
import { startLabel, steps, reusePlatform } from '../data/content.js'

export default function Ecosystem() {
  const [active, setActive] = useState(0)
  const max = steps.length - 1

  useEffect(() => {
    function onKey(e) {
      if (e.target.matches?.('input, textarea, select')) return
      if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
        e.preventDefault()
        setActive((a) => Math.min(max, a + 1))
      } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
        e.preventDefault()
        setActive((a) => Math.max(0, a - 1))
      } else if (e.key === 'Home') {
        e.preventDefault()
        setActive(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        setActive(max)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [max])

  const col = (i) => ({ gridColumn: i + 2 })
  const step = steps[active]

  return (
    <section id="content" className="app-eco-wrap" aria-label="AI assurance ecosystem">
      <div className="nsw-container">
        <div className="app-eco" role="group" aria-label="Process, today vs future, and the reuse platform">
          {/* Row 1 — the process, one row left to right */}
          <div className="app-eco__lead has-next">
            <span className="material-icons app-eco__person" aria-hidden="true">
              person
            </span>
            <span className="app-eco__leadtext">{startLabel}</span>
          </div>
          {steps.map((s, i) => (
            <button
              key={s.id}
              type="button"
              style={col(i)}
              className={`app-eco__chip app-eco__chip--${s.id}${i === active ? ' is-active' : ''}${
                i < max ? ' has-next' : ''
              }`}
              aria-current={i === active ? 'step' : undefined}
              onClick={() => setActive(i)}
            >
              <span className="app-eco__num">{s.n}</span>
              <span className="app-eco__chiplabel">{s.short}</span>
            </button>
          ))}

          {/* Row 2 — Today (agency siloed) */}
          <div className="app-eco__rowlabel app-eco__rowlabel--today">
            <span className="app-eco__rowlabel-main">Today</span>
          </div>
          {steps.map((s, i) => (
            <div
              key={s.id}
              style={col(i)}
              className={`app-eco__today${i === active ? ' is-active' : ''}`}
            >
              <span className="material-icons app-eco__siloicon" aria-hidden="true">
                lock
              </span>
              <span>{s.today}</span>
            </div>
          ))}

          {/* Row 3 — Future (automated tools) */}
          <div className="app-eco__rowlabel app-eco__rowlabel--future">
            <span className="app-eco__rowlabel-main">Future</span>
          </div>
          {steps.map((s, i) => (
            <button
              key={s.id}
              type="button"
              style={col(i)}
              className={`app-eco__future app-eco__future--${s.id}${i === active ? ' is-active' : ''}`}
              aria-current={i === active ? 'step' : undefined}
              onClick={() => setActive(i)}
            >
              <span className="app-eco__tool">{s.tool}</span>
              <span className="app-eco__question">{s.question}</span>
              <span className="app-eco__actions">
                {reusePlatform.actions.map((a) => (
                  <span key={a} className="app-eco__action">
                    {a}
                  </span>
                ))}
              </span>
              <span className="app-eco__connector" aria-hidden="true" />
              {i === active && (
                <span className="app-eco__cardflow">
                  <span className="app-eco__cardflow-chip">
                    <span className="material-icons" aria-hidden="true">
                      data_object
                    </span>
                    {s.cards}
                  </span>
                  <span className="app-eco__cardflow-arrows" aria-hidden="true">
                    <span className="material-icons app-eco__arrow-down">arrow_downward</span>
                    <span className="material-icons app-eco__arrow-up">arrow_upward</span>
                  </span>
                </span>
              )}
            </button>
          ))}

          {/* Row 4 — the shared Reuse Platform */}
          <div className="app-eco__platform">
            <div className="app-eco__platform-head">
              <span className="material-icons" aria-hidden="true">
                inventory_2
              </span>
              <div>
                <p className="app-eco__platform-name">{reusePlatform.name}</p>
                <p className="app-eco__platform-tag">{reusePlatform.tagline}</p>
              </div>
              <span className="app-eco__platform-flow">create · find · reuse Cards</span>
            </div>
            <ul className="app-eco__platform-attrs">
              {reusePlatform.attributes.map((a) => (
                <li key={a.id} className={step.uses.includes(a.id) ? 'is-used' : ''}>
                  <span className="material-icons" aria-hidden="true">
                    {a.icon}
                  </span>
                  {a.label}
                </li>
              ))}
            </ul>
            <p className="app-eco__platform-runson">
              <span className="material-icons" aria-hidden="true">
                desktop_windows
              </span>
              <span className="material-icons" aria-hidden="true">
                cloud
              </span>
              {reusePlatform.runsOn}
            </p>
          </div>
        </div>

        {/* Detail for the selected step */}
        <div className={`app-detail app-detail--${step.id}`} aria-live="polite">
          <div className="app-detail__head">
            <span className="app-detail__step">Step {step.n}</span>
            <h2 className="app-detail__title">{step.title}</h2>
            <span className="app-detail__owner">{step.accountability}</span>
          </div>
          <p className="app-detail__lead">
            <strong>{step.tool}</strong> uses automation to accelerate this step — it finds and
            reuses <strong>{step.cards}</strong> from the Reuse Platform, and contributes new ones.
          </p>
          <div className="app-detail__assess">
            <span className="app-detail__assess-label">Assesses</span>
            <ul className="app-detail__tags">
              {step.assess.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <p className="app-detail__outcome">
            <span className="material-icons" aria-hidden="true">
              check_circle
            </span>
            Outcome: <strong>{step.outcome}</strong>
          </p>
        </div>

        <p className="app-eco__hint">
          Step {active + 1} of {steps.length} — use ← → or click a step to explore.
        </p>
      </div>
    </section>
  )
}
