import { journey } from '../data/content.js'
import JourneyNode from './JourneyNode.jsx'

export default function Journey() {
  return (
    <section className="app-section" aria-labelledby="journey-heading">
      <h2 id="journey-heading" className="app-section__heading">
        The journey: two evaluations
      </h2>
      <p className="app-section__intro">
        Every AI system passes through two evaluations — one for the product, one for the
        use case — before it is approved, deployed and monitored.
      </p>

      <ol className="app-journey" aria-label="AI assurance journey">
        {journey.map((node, index) => (
          <li key={node.label ?? node.id} className="app-journey__item">
            <JourneyNode node={node} />
            {index < journey.length - 1 && (
              <div className="app-journey__arrow" aria-hidden="true">
                <span className="material-icons">arrow_downward</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
