import { useEffect, useRef, useState } from 'react'
import { journey, todayFuture } from '../data/content.js'
import JourneyNode from './JourneyNode.jsx'
import TodayFuture from './TodayFuture.jsx'

// The focusable "steps" are the gates; surrounding nodes give before/after context.
const gates = journey.filter((n) => n.type === 'gate')
const tfById = Object.fromEntries(todayFuture.map((r) => [r.id, r]))
const START = journey[0].label
const END = journey[journey.length - 1].label

// The outcome a gate produces, if the next node in the flow is an outcome.
function resultFor(gate) {
  const next = journey[journey.indexOf(gate) + 1]
  return next && next.type === 'outcome' ? next.label : null
}

export default function JourneyExplorer() {
  const [active, setActive] = useState(0)
  const max = gates.length - 1
  const stageRef = useRef(null)
  const activeRef = useRef(0)

  useEffect(() => {
    activeRef.current = active
  }, [active])

  const go = (dir) => setActive((a) => Math.min(max, Math.max(0, a + dir)))

  function onKeyDown(e) {
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

  // Scroll within the stage advances one step at a time; releases at the ends
  // so the rest of the page scrolls normally.
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    let lock = false
    function onWheel(e) {
      if (Math.abs(e.deltaY) < 8) return
      const a = activeRef.current
      const down = e.deltaY > 0
      if ((a === 0 && !down) || (a === max && down)) return
      e.preventDefault()
      if (lock) return
      lock = true
      setActive((prev) => Math.min(max, Math.max(0, prev + (down ? 1 : -1))))
      setTimeout(() => {
        lock = false
      }, 550)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [max])

  const gate = gates[active]
  const row = tfById[gate.id]
  const result = resultFor(gate)
  const topPeek = active === 0 ? START : `Step ${active}: ${gates[active - 1].title}`
  const bottomPeek = active === max ? END : `Step ${active + 2}: ${gates[active + 1].title}`

  return (
    <section className="app-explorer" aria-label="AI assurance journey, step by step">
      <div
        className="app-explorer__stage"
        ref={stageRef}
        tabIndex={0}
        role="group"
        aria-roledescription="step viewer"
        onKeyDown={onKeyDown}
      >
        <div className="app-split">
          {/* LEFT — the step in focus, with before/after context peeking */}
          <div className="app-explorer__flow">
            <button
              type="button"
              className="app-peek app-peek--prev"
              onClick={() => go(-1)}
              disabled={active === 0}
            >
              <span className="material-icons" aria-hidden="true">
                keyboard_arrow_up
              </span>
              <span className="app-peek__text">{topPeek}</span>
            </button>

            <div className="app-explorer__active" key={gate.id} aria-live="polite">
              <JourneyNode node={gate} />
              {result && (
                <p className="app-explorer__result">
                  <span className="material-icons" aria-hidden="true">
                    arrow_downward
                  </span>
                  Result:&nbsp;<strong>{result}</strong>
                </p>
              )}
            </div>

            <button
              type="button"
              className="app-peek app-peek--next"
              onClick={() => go(1)}
              disabled={active === max}
            >
              <span className="app-peek__text">{bottomPeek}</span>
              <span className="material-icons" aria-hidden="true">
                keyboard_arrow_down
              </span>
            </button>
          </div>

          {/* RIGHT — today vs future for this step only */}
          <div className="app-explorer__tf">
            <h2 className="app-section__heading">Today vs the future</h2>
            <p className="app-section__intro">
              How this step works today, and where it is heading.
            </p>
            <div key={row.id} className="app-explorer__tf-inner">
              <TodayFuture row={row} />
            </div>
          </div>
        </div>

        {/* Controls + progress */}
        <div className="app-explorer__controls">
          <button
            type="button"
            className="nsw-button nsw-button--dark"
            onClick={() => go(-1)}
            disabled={active === 0}
          >
            Previous
          </button>

          <ol className="app-dots" aria-label="Steps">
            {gates.map((g, i) => (
              <li key={g.id}>
                <button
                  type="button"
                  className={`app-dot${i === active ? ' is-active' : ''}`}
                  aria-current={i === active ? 'step' : undefined}
                  aria-label={`Step ${i + 1}: ${g.title}`}
                  onClick={() => setActive(i)}
                />
              </li>
            ))}
          </ol>

          <button
            type="button"
            className="nsw-button nsw-button--dark"
            onClick={() => go(1)}
            disabled={active === max}
          >
            Next
          </button>
        </div>

        <p className="app-explorer__hint">
          Step {active + 1} of {gates.length} — use ↑ ↓ or scroll to move between steps.
        </p>
      </div>
    </section>
  )
}
