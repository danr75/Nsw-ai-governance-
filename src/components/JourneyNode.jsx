// Renders one node of the journey. Gate nodes are the evaluation cards;
// start/outcome/end nodes are banners that mark progress through the flow.
export default function JourneyNode({ node }) {
  if (node.type === 'gate') {
    return (
      <article className={`app-gate app-gate--${node.id}`}>
        <div className="app-gate__bar" aria-hidden="true" />
        <div className="app-gate__body">
          <h3 className="app-gate__title">{node.title}</h3>
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
        </div>
      </article>
    )
  }

  // start / outcome / end banners
  return <p className={`app-banner app-banner--${node.type}`}>{node.label}</p>
}
