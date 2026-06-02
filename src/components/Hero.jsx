import { intro } from '../data/content.js'

export default function Hero() {
  return (
    <section className="app-section app-hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="app-hero__heading">
        From idea to a safely deployed AI system
      </h1>
      <p className="app-hero__lead">{intro.lead}</p>
    </section>
  )
}
