import Header from './components/Header.jsx'
import Journey from './components/Journey.jsx'
import TodayFuture from './components/TodayFuture.jsx'
import KeyMessages from './components/KeyMessages.jsx'
import OfficeOfAI from './components/OfficeOfAI.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="content" className="nsw-container app-main">
        <div className="app-split">
          <Journey />
          <TodayFuture />
        </div>
        <KeyMessages />
        <OfficeOfAI />
      </main>
      <Footer />
    </>
  )
}
