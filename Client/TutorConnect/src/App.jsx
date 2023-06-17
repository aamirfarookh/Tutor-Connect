import Download from "./Landing/Components/Download";
import Courses from "./Landing/Components/Courses";
import Hero from "./Landing/Components/Hero";
import Testimonials from "./Landing/Components/Testimonials";

import GetStarted from "./Landing/Components/GetStarted";
import Footer from "./Landing/Components/Footer";
import Schools from "./Landing/Components/Schools";
import SlidingImages1 from './Landing/Components/SlidingImages1'
import './App.css'

function App() {

  return (
    <>
      <Hero />
      <Download />
      <SlidingImages1/>
      <Schools/>
      <Courses />
      <Testimonials />
      <GetStarted />
      <Footer />
      <Download />
    </>
  )
}

export default App
