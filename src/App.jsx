import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App