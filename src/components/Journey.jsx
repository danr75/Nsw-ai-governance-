import { journey } from '../data/content.js'
import JourneyNode from './JourneyNode.jsx'

export default function Journey() {
  return (
    <section className="app-section app-section--journey" aria-label="The AI assurance journey">
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
