// import React from 'react'
import Download from "./Components/Download"
import Courses from "./Components/Courses"
import Hero from "./Components/Hero"
import Testimonials from "./Components/Testimonials"
import GetStarted from "./Components/GetStarted"
import Footer from "./Components/Footer"
import Schools from "./Components/Schools"
import SlidingImages1 from "./Components/SlidingImages1"

const Landing = () => {
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

export default Landing