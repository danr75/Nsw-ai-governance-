import { stages } from '../data/content.js'

const office = stages.find((s) => s.id === 'office')
const agency = stages.find((s) => s.id === 'agency')

function OwnsList({ label, items, variant }) {
  return (
    <div className="app-resp__col">
      <p className={`app-detail__label app-detail__label--${variant}`}>
        <span className="material-icons" aria-hidden="true">
          {variant === 'owns' ? 'check_circle' : 'cancel'}
        </span>
        {label}
      </p>
      <ul className="app-detail__list">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Responsibilities() {
  return (
    <section className="app-section" aria-labelledby="resp-heading">
      <h2 id="resp-heading" className="app-section__heading">
        Who owns what
      </h2>
      <p className="app-section__intro">
        Central policy and standards, with federated agency accountability.
      </p>

      <div className="app-resp">
        <div className="app-resp__card app-resp__card--office">
          <h3 className="app-resp__title">Office of AI</h3>
          <div className="app-resp__cols">
            <OwnsList label="Owns" items={office.detail.owns} variant="owns" />
            <OwnsList label="Does not own" items={office.detail.notOwns} variant="not" />
          </div>
        </div>

        <div className="app-resp__card app-resp__card--agency">
          <h3 className="app-resp__title">Agency</h3>
          <div className="app-resp__cols">
            <OwnsList label="Owns" items={agency.detail.owns} variant="owns" />
          </div>
        </div>
      </div>
    </section>
  )
}
