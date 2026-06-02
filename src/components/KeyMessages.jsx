import { keyMessages } from '../data/content.js'

export default function KeyMessages() {
  return (
    <section className="app-section" aria-labelledby="messages-heading">
      <h2 id="messages-heading" className="app-section__heading">
        What the AIAF is — and is not
      </h2>

      <div className="app-messages">
        <div className="app-message-card app-message-card--is">
          <h3 className="app-message-card__title">
            <span className="material-icons" aria-hidden="true">
              check_circle
            </span>
            What the AIAF is
          </h3>
          <ul className="app-message-card__list">
            {keyMessages.is.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <div className="app-message-card app-message-card--not">
          <h3 className="app-message-card__title">
            <span className="material-icons" aria-hidden="true">
              cancel
            </span>
            What the AIAF is not
          </h3>
          <ul className="app-message-card__list">
            {keyMessages.isNot.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
