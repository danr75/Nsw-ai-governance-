// Presentational: renders the Today -> Future comparison for one step.
export default function TodayFuture({ row }) {
  return (
    <div className="app-tf__row" key={row.id}>
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
  )
}
