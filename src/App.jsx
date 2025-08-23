import About from "./components/About/About"
import Background from "./components/Background/Background"
import Contact from "./components/Contact/Contact"
import Education from "./components/Education/Education"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"


function App() {

  return (
    <>
     <Background/>

     <Nav/>
     <Home/>
     <About/>
     <Skills/>
     {/* <Education/> */}
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
