import { stages } from '../data/content.js'
import StageCard from './StageCard.jsx'

export default function ValueChain() {
  return (
    <section className="app-section" aria-labelledby="chain-heading">
      <h2 id="chain-heading" className="app-section__heading">
        The value chain
      </h2>
      <p className="app-section__intro">
        Each AI use case moves through three stages. Each stage has a different owner and a
        different purpose.
      </p>

      <ol className="app-chain" aria-label="AI governance and assurance value chain">
        {stages.map((stage, index) => (
          <li key={stage.id} className="app-chain__item">
            <StageCard stage={stage} step={index + 1} />
            {index < stages.length - 1 && (
              <div className="app-chain__arrow" aria-hidden="true">
                <span className="material-icons">arrow_downward</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
