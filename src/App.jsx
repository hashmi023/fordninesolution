
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import WorkFlow from './components/WorkFlow'

const App = () => {
  return (
   <>
   <Navbar />
   <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero />
    <Features />
    <WorkFlow />
    <Pricing />
    <Testimonials />
    <Footer />
   </div>
   </>
  )
}

export default App
