import { separation } from '../data/content.js'

export default function SeparationDiagram() {
  return (
    <section className="app-section" aria-labelledby="separation-heading">
      <h2 id="separation-heading" className="app-section__heading">
        The separation, at a glance
      </h2>

      <ol className="app-separation" aria-label="Separation of responsibilities">
        {separation.map((row, index) => (
          <li key={row.owner} className={`app-separation__row app-separation__row--${index}`}>
            <span className="app-separation__owner">{row.owner}</span>
            <span className="app-separation__lines">
              {row.lines.map((line) => (
                <span key={line} className="app-separation__line">
                  {line}
                </span>
              ))}
            </span>
            {index < separation.length - 1 && (
              <span className="app-separation__arrow material-icons" aria-hidden="true">
                arrow_downward
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
