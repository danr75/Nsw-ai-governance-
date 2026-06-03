import Header from './components/Header.jsx'
import JourneyExplorer from './components/JourneyExplorer.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="content" className="nsw-container app-main">
        <JourneyExplorer />
      </main>
      <Footer />
    </>
  )
}
