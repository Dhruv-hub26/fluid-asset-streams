import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import Economics from './components/Economics'
import Developers from './components/Developers'
import Governance from './components/Governance'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] flex flex-col items-center p-3 md:p-5 gap-6">
      <Hero />
      <Ecosystem />
      <Economics />
      <Developers />
      <Governance />
      <ScrollToTop />
    </main>
  )
}

export default App
