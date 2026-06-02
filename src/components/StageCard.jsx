import { useState } from 'react'

export default function StageCard({ stage, step }) {
  const [open, setOpen] = useState(false)
  const panelId = `stage-detail-${stage.id}`

  return (
    <article className={`app-stage app-stage--${stage.id}`}>
      <div className="app-stage__bar" aria-hidden="true" />

      <div className="app-stage__body">
        <div className="app-stage__top">
          <span className="app-stage__step" aria-hidden="true">
            {step}
          </span>
          <div>
            <span className="app-stage__owner">{stage.owner}</span>
            <p className="app-stage__purpose">{stage.purpose}</p>
          </div>
        </div>

        <h3 className="app-stage__title">
          {stage.title}
          {stage.badge && <span className="app-stage__badge">{stage.badge}</span>}
        </h3>
        <p className="app-stage__summary">{stage.summary}</p>

        {stage.determines && (
          <div className="app-stage__group">
            <p className="app-stage__group-label">Determines</p>
            <ul className="app-stage__list">
              {stage.determines.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="app-stage__group">
          {stage.itemsLabel && <p className="app-stage__group-label">{stage.itemsLabel}</p>}
          <ul className="app-stage__list">
            {stage.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {stage.footnote && <p className="app-stage__footnote">{stage.footnote}</p>}

        <button
          type="button"
          className="app-stage__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-icons" aria-hidden="true">
            {open ? 'expand_less' : 'expand_more'}
          </span>
          {open ? 'Hide what this stage owns' : 'Show what this stage owns'}
        </button>

        {open && (
          <div id={panelId} className="app-stage__detail">
            <div className="app-stage__detail-col">
              <p className="app-detail__label app-detail__label--owns">
                <span className="material-icons" aria-hidden="true">
                  check_circle
                </span>
                {stage.detail.ownsLabel}
              </p>
              <ul className="app-detail__list">
                {stage.detail.owns.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>

            {stage.detail.notOwns && (
              <div className="app-stage__detail-col">
                <p className="app-detail__label app-detail__label--not">
                  <span className="material-icons" aria-hidden="true">
                    cancel
                  </span>
                  {stage.detail.notOwnsLabel}
                </p>
                <ul className="app-detail__list">
                  {stage.detail.notOwns.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
