import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedSection from './components/AnimatedSection'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><Skills /></AnimatedSection>
      <AnimatedSection><Blog /></AnimatedSection>
      <AnimatedSection><Resume /></AnimatedSection>
      <AnimatedSection><Contact /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </div>
  )
}

export default App