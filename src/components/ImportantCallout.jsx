import { importantMessage } from '../data/content.js'

export default function ImportantCallout() {
  return (
    <section className="app-section" aria-labelledby="callout-heading">
      <div className="app-callout" role="note">
        <span className="material-icons app-callout__icon" aria-hidden="true">
          priority_high
        </span>
        <div>
          <p id="callout-heading" className="app-callout__label">
            The message most executives miss
          </p>
          <p className="app-callout__text">{importantMessage}</p>
        </div>
      </div>
    </section>
  )
}
