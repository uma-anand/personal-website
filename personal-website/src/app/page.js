import Banner from "./banner"
import CenterHome from "./centerHome"
import About from "./about"
import Work from "./work"
import Skills from "./skills"
import Contact from "./contact"
import LandingProjects from "./landingProjects"
import AlphaCalc from "./projects/alphacalc"
import HCMS from "./projects/hcms"
import PersonalWebsite from "./projects/personalwebsite"
import BetterPokeAPI from "./projects/pokeapi"
import AnimalTraining from "./projects/animaltraining"
import LightsOut from "./projects/lightsout"

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
      <br></br>
      <AlphaCalc />
      <br></br>
      <HCMS />
      <br></br>
      <PersonalWebsite />
      <br></br>
      <BetterPokeAPI />
      <br></br>
      <AnimalTraining />
      <br></br>
      <LightsOut />
      <br></br>
      <Contact />
    </>
  )
}
