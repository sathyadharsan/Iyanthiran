import React from "react"
import Hero from "../components/sections/Hero.jsx"
import TrustSignals from "../components/sections/TrustSignals.jsx"
import WhyIyanthiran from "../components/sections/WhyIyanthiran.jsx"
import ProgramHighlights from "../components/sections/ProgramHighlights.jsx"
import Curriculum from "../components/sections/Curriculum.jsx"
import Tools from "../components/sections/Tools.jsx"
import Projects from "../components/sections/Projects.jsx"
import Certifications from "../components/sections/Certifications.jsx"
import Mentors from "../components/sections/Mentors.jsx"
import Placement from "../components/sections/Placement.jsx"
import SuccessStories from "../components/sections/SuccessStories.jsx"
import FAQ from "../components/sections/FAQ.jsx"
import FinalCTA from "../components/sections/FinalCTA.jsx"

const HomePage = () => {
  return (
    <>
      <Hero id="home" />
      <TrustSignals />
      <WhyIyanthiran id="about" />
      <ProgramHighlights />
      <Curriculum id="courses" />
      <Tools />
      <Projects />
      <Certifications />
      <Mentors />
      <Placement id="placements" />
      <SuccessStories />
      <FAQ />
      <FinalCTA id="contact" />
    </>
  )
}
export default HomePage
