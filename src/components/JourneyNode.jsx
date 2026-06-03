// Renders one gate (evaluation) card. `step`, when given, prefixes the heading.
export default function JourneyNode({ node, step }) {
  if (node.type === 'gate') {
    return (
      <article className={`app-gate app-gate--${node.id}`}>
        <div className="app-gate__bar" aria-hidden="true" />
        <div className="app-gate__body">
          <h3 className="app-gate__title">
            {step ? `Step ${step}: ` : ''}
            {node.title}
          </h3>
          {node.subtitle && <p className="app-gate__subtitle">{node.subtitle}</p>}
          <p className="app-gate__question">“{node.question}”</p>
          <span className="app-gate__accountability">{node.accountability}</span>
          <p className="app-gate__assess-label">Assess</p>
          <ul className="app-gate__assess">
            {node.assess.map((item) => (
              <li key={item} className="app-gate__tag">
                {item}
              </li>
            ))}
          </ul>
          {node.outcome && (
            <p className="app-gate__outcome">
              <span className="app-gate__outcome-label">Outcome:</span> {node.outcome}
            </p>
          )}
        </div>
      </article>
    )
  }

  // start / outcome / end banners
  return <p className={`app-banner app-banner--${node.type}`}>{node.label}</p>
}
