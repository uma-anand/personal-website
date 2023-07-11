import Banner from "./banner"
import CenterHome from "./centerHome"
import About from "./about"
import Work from "./work"
import Skills from "./skills"
import Contact from "./contact"

export default function Home() {
  return (
    <>
      <Banner />
      <CenterHome />
      <About/>
      <Work/>
      <Skills/>
      <Contact/>
    </>
  )
}
