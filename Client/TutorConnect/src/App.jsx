import Companies from "./Landing/Components/Companies";
import Guide from "./Landing/Components/Guide";
import Hero from "./Landing/Components/Hero";
import Properties from "./Landing/Components/Properties";
import Details from "./Landing/Components/Details";
import GetStarted from "./Landing/Components/GetStarted";
import Footer from "./Landing/Components/Footer";
import Schools from "./Landing/Components/Schools";
import SlidingImages1 from './Landing/Components/SlidingImages1'
import './App.css'

function App() {

  return (
    <>
      <Hero />
      <Companies />
      <SlidingImages1/>
      <Schools/>
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
    </>
  )
}

export default App
