import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ValueChain from './components/ValueChain.jsx'
import KeyMessages from './components/KeyMessages.jsx'
import Responsibilities from './components/Responsibilities.jsx'
import ImportantCallout from './components/ImportantCallout.jsx'
import SeparationDiagram from './components/SeparationDiagram.jsx'
import SelfCheck from './components/SelfCheck.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="content" className="nsw-container app-main">
        <Hero />
        <ValueChain />
        <ImportantCallout />
        <KeyMessages />
        <Responsibilities />
        <SeparationDiagram />
        <SelfCheck />
      </main>
      <Footer />
    </>
  )
}
