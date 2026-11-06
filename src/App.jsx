import About from './components/About'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Install from './components/Install'
import Nav from './components/Nav'

export default function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-espuma focus:px-4 focus:py-2 focus:text-abismo"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido">
        <Hero />
        <About />
        <Gallery />
        <Install />
      </main>
      <Footer />
    </>
  )
}
