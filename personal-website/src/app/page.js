import Banner from "./components/banner"
import CenterHome from "./components/centerHome"
import About from "./components/about"
import Work from "./components/work"
import Skills from "./components/skills"
import Contact from "./components/contact"

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
