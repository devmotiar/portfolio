import Hero from './Components/HeroSection/Hero'
import Navbar from './Components/Navbar/Navbar'
import styles from './App.module.css'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.App}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App