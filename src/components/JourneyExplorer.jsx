import { Fragment, useEffect, useRef, useState } from 'react'
import { journey, todayFuture } from '../data/content.js'
import JourneyNode from './JourneyNode.jsx'
import TodayFuture from './TodayFuture.jsx'

// The focusable "steps" are the gates; surrounding nodes (start, outcomes, end)
// are milestones shown as white boxes that bridge the steps.
const gates = journey.filter((n) => n.type === 'gate')
const tfById = Object.fromEntries(todayFuture.map((r) => [r.id, r]))

const startLabel = journey[0].label
const endLabel = journey.find((n) => n.type === 'end').label

function Arrow() {
  return (
    <div className="app-flowarrow" aria-hidden="true">
      <span className="material-icons">arrow_downward</span>
    </div>
  )
}

function Milestone({ label, variant }) {
  return <div className={`app-milestone${variant ? ` app-milestone--${variant}` : ''}`}>{label}</div>
}

// A clickable box that navigates to an adjacent step.
function StepBox({ label, dir, onClick }) {
  return (
    <button type="button" className={`app-stepbox app-stepbox--${dir}`} onClick={onClick}>
      {dir === 'up' && (
        <span className="material-icons" aria-hidden="true">
          keyboard_arrow_up
        </span>
      )}
      <span className="app-stepbox__text">{label}</span>
      {dir === 'down' && (
        <span className="material-icons" aria-hidden="true">
          keyboard_arrow_down
        </span>
      )}
    </button>
  )
}

export default function JourneyExplorer() {
  const [active, setActive] = useState(0)
  const max = gates.length - 1
  const scrollRef = useRef(null)

  const go = (dir) => setActive((a) => Math.min(max, Math.max(0, a + dir)))

  // Arrow keys / Page / Home / End move between steps, from anywhere on the page.
  useEffect(() => {
    function onKey(e) {
      if (e.target.matches?.('input, textarea, select')) return
      if (['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key)) {
        e.preventDefault()
        go(1)
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        go(-1)
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

  // Scrolling moves one step at a time. If a step is taller than the viewport
  // (small screens), let it scroll normally instead of stepping.
  useEffect(() => {
    let lock = false
    function onWheel(e) {
      const el = scrollRef.current
      if (el && el.scrollHeight > el.clientHeight + 2) return
      if (Math.abs(e.deltaY) < 8) return
      e.preventDefault()
      if (lock) return
      lock = true
      const down = e.deltaY > 0
      setActive((prev) => Math.min(max, Math.max(0, prev + (down ? 1 : -1))))
      setTimeout(() => {
        lock = false
      }, 550)
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [max])

  const gate = gates[active]
  const row = tfById[gate.id]

  return (
    <section
      id="content"
      className="app-explorer"
      aria-label="AI assurance journey, step by step"
      ref={scrollRef}
    >
      <div className="nsw-container app-explorer__inner">
        <div className="app-explorer__stage" role="group" aria-roledescription="step viewer">
        {/* Top — end-to-end process overview */}
        <nav className="app-process" aria-label="End-to-end process">
          <span className="app-process__end">{startLabel}</span>
          <span className="app-process__sep material-icons" aria-hidden="true">
            chevron_right
          </span>
          {gates.map((g, i) => {
            const state = i === active ? 'is-active' : i < active ? 'is-done' : 'is-todo'
            return (
              <Fragment key={g.id}>
                <button
                  type="button"
                  className={`app-process__step app-process__step--${g.id} ${state}`}
                  aria-current={i === active ? 'step' : undefined}
                  onClick={() => setActive(i)}
                >
                  <span className="app-process__num">{i + 1}</span>
                  <span className="app-process__label">{g.title}</span>
                </button>
                <span className="app-process__sep material-icons" aria-hidden="true">
                  chevron_right
                </span>
              </Fragment>
            )
          })}
          <span className="app-process__end">{endLabel}</span>
        </nav>

        <div className="app-split">
          {/* LEFT — the step in focus, with the prev/next stage above and below */}
          <div className="app-explorer__flow" key={gate.id}>
            {/* incoming: start box on step 1, otherwise the previous step */}
            {active === 0 ? (
              <Milestone label={startLabel} variant="start" />
            ) : (
              <StepBox dir="up" label={`Step ${active}: ${gates[active - 1].title}`} onClick={() => go(-1)} />
            )}

            <Arrow />

            {/* the active step (outcome shown as text inside the card) */}
            <div className="app-explorer__active" aria-live="polite">
              <JourneyNode node={gate} step={active + 1} />
            </div>

            <Arrow />

            {/* outgoing: the next step, or the deploy box on the last step */}
            {active < max ? (
              <StepBox
                dir="down"
                label={`Step ${active + 2}: ${gates[active + 1].title}`}
                onClick={() => go(1)}
              />
            ) : (
              <Milestone label={endLabel} variant="end" />
            )}
          </div>

          {/* RIGHT — today vs future for this step (two boxes only) */}
          <div className="app-explorer__tf">
            <div key={row.id} className="app-explorer__tf-inner">
              <TodayFuture row={row} />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="app-explorer__controls">
          <button
            type="button"
            className="nsw-button nsw-button--dark"
            onClick={() => go(-1)}
            disabled={active === 0}
          >
            ‹ Back
          </button>
          <button
            type="button"
            className="nsw-button nsw-button--dark"
            onClick={() => go(1)}
            disabled={active === max}
          >
            Next ›
          </button>
        </div>

        <p className="app-explorer__hint">
          Step {active + 1} of {gates.length} — use ← → to move through the process.
        </p>
        </div>
      </div>
    </section>
  )
}
