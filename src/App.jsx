import Header from './components/Header.jsx'
import JourneyExplorer from './components/JourneyExplorer.jsx'
import KeyMessages from './components/KeyMessages.jsx'
import OfficeOfAI from './components/OfficeOfAI.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="content" className="nsw-container app-main">
        <JourneyExplorer />
        <KeyMessages />
        <OfficeOfAI />
      </main>
      <Footer />
    </>
  )
}
