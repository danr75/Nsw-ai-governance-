import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Journey from './components/Journey.jsx'
import ImportantCallout from './components/ImportantCallout.jsx'
import KeyMessages from './components/KeyMessages.jsx'
import OfficeOfAI from './components/OfficeOfAI.jsx'
import SelfCheck from './components/SelfCheck.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="content" className="nsw-container app-main">
        <Hero />
        <Journey />
        <ImportantCallout />
        <KeyMessages />
        <OfficeOfAI />
        <SelfCheck />
      </main>
      <Footer />
    </>
  )
}
