import { intro } from '../data/content.js'

export default function Header() {
  return (
    <header className="nsw-header app-header" role="banner">
      <a className="app-skip-link" href="#content">
        Skip to content
      </a>
      <div className="nsw-container app-header__inner">
        <div className="app-masthead">NSW Government</div>
        <p className="app-header__title">{intro.title}</p>
        <p className="app-header__tagline">{intro.tagline}</p>
      </div>
    </header>
  )
}
