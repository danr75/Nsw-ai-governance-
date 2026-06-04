import { Fragment, useEffect, useRef, useState } from 'react'
import { journey, startLabel, todayFuture } from '../data/content.js'
import JourneyNode from './JourneyNode.jsx'
import TodayFuture from './TodayFuture.jsx'

const gates = journey.filter((n) => n.type === 'gate')
const tfById = Object.fromEntries(todayFuture.map((r) => [r.id, r]))

export default function JourneyExplorer() {
  const [active, setActive] = useState(0)
  const max = gates.length - 1
  const scrollRef = useRef(null)

  // Left / right arrows (and Page / Home / End) move through the process.
  useEffect(() => {
    function onKey(e) {
      if (e.target.matches?.('input, textarea, select')) return
      if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault()
        setActive((a) => Math.min(max, a + 1))
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
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

  // Scrolling moves one step at a time; if a step is taller than the viewport
  // (small screens) let it scroll normally instead of stepping.
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
        {/* The process is the hero */}
        <nav className="app-process" aria-label="End-to-end process">
          <span className="app-process__lead">{startLabel}</span>
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
                  <span className="app-process__label">{g.short}</span>
                </button>
                {i < gates.length - 1 && (
                  <span className="app-process__sep material-icons" aria-hidden="true">
                    chevron_right
                  </span>
                )}
              </Fragment>
            )
          })}
        </nav>

        {/* Streamlined detail for the selected step */}
        <div className="app-split">
          <div className="app-explorer__flow">
            <div className="app-explorer__active" key={gate.id} aria-live="polite">
              <JourneyNode node={gate} step={active + 1} />
            </div>
          </div>

          <div className="app-explorer__tf">
            <div key={row.id} className="app-explorer__tf-inner">
              <TodayFuture row={row} />
            </div>
          </div>
        </div>

        <p className="app-explorer__hint">
          Step {active + 1} of {gates.length} — use ← → to move through the process.
        </p>
      </div>
    </section>
  )
}
