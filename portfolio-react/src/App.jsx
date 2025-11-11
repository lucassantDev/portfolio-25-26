import { useState } from 'react'
import Redes from './Redes'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
