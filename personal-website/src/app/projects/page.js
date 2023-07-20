import Banner from "../components/banner"
import Contact from "../components/contact"
import LandingProjects from "../components/landingProjects"
import AlphaCalc from "./alphacalc"
import HCMS from "./hcms"
import PersonalWebsite from "./personalwebsite"
import BetterPokeAPI from "./pokeapi"
import AnimalTraining from "./animaltraining"
import LightsOut from "./lightsout"

export default function Home() {
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
