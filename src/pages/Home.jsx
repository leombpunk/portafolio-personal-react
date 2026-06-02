import AboutMe from "../components/aboutme"
import Education from "../components/education"
import Experience from "../components/experience"
import Footer from "../components/footer"
import NavMenu from "../components/nav"
import Presentation from "../components/presentation"
import Projects from "../components/projects"
import Skills from "../components/skills"

const Home = () => {
  return (
    <>
    <div className="w-full min-h-screen h-full flex flex-col items-center">
      <NavMenu />
      <Presentation />
      <AboutMe />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Footer />
    </div>
        
    </>
  )
}

export default Home
