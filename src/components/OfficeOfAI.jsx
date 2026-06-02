import { officeOfAI } from '../data/content.js'

export default function OfficeOfAI() {
  return (
    <section className="app-section" aria-labelledby="office-heading">
      <h2 id="office-heading" className="app-section__heading">
        Where the Office of AI fits
      </h2>
      <p className="app-section__intro">{officeOfAI.intro}</p>

      <div className="app-resp__card app-resp__card--office">
        <div className="app-resp__cols">
          <div className="app-resp__col">
            <p className="app-detail__label app-detail__label--owns">
              <span className="material-icons" aria-hidden="true">
                check_circle
              </span>
              Owns
            </p>
            <ul className="app-detail__list">
              {officeOfAI.owns.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="app-resp__col">
            <p className="app-detail__label app-detail__label--not">
              <span className="material-icons" aria-hidden="true">
                cancel
              </span>
              Does not own
            </p>
            <ul className="app-detail__list">
              {officeOfAI.doesNotOwn.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
