import Banner from "./banner"
import CenterHome from "./centerHome"
import About from "./about"
import Work from "./work"
import Skills from "./skills"
import Contact from "./contact"
import LandingProjects from "./landingProjects"

export default function Home() {
  /**
   * <>
      <Banner />
      <CenterHome />
      <About/>
      <Work/>
      <Skills/>
      <Contact/>
    </>
   */
  return (
    <>
      <Banner />
      <LandingProjects />
    </>
  )
}
