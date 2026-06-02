import { todayFuture } from '../data/content.js'

export default function TodayFuture() {
  return (
    <section className="app-section app-tf" aria-labelledby="tf-heading">
      <h2 id="tf-heading" className="app-section__heading">
        Today vs the future
      </h2>
      <p className="app-section__intro">
        How each step works today, and where it is heading.
      </p>

      <div className="app-tf__table">
        <span className="app-tf__colhead app-tf__colhead--today">Today</span>
        <span className="app-tf__colhead app-tf__colhead--future">Future</span>

        {todayFuture.map((row) => (
          <div key={row.id} className="app-tf__row">
            <p className={`app-tf__steplabel app-tf__steplabel--${row.id}`}>
              <span className="app-tf__step">{row.step}</span>
              {row.label}
            </p>

            <div className="app-tf__cells">
              <div className="app-tf__cell app-tf__cell--today">
                <span className="app-tf__minilabel">Today</span>
                <p className="app-tf__text">{row.today}</p>
              </div>
              <span className="app-tf__arrow material-icons" aria-hidden="true">
                arrow_forward
              </span>
              <div className="app-tf__cell app-tf__cell--future">
                <span className="app-tf__minilabel">Future</span>
                <p className="app-tf__text">{row.future}</p>
              </div>
            </div>

            {row.highlight && (
              <p className="app-tf__highlight">
                <span className="material-icons" aria-hidden="true">
                  priority_high
                </span>
                {row.highlight}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
