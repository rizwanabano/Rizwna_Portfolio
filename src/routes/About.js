import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImageGeneral from '../components/HeroImageGeneral'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
    <HeroImageGeneral heading ="About" text ="An Energetic Application Developer"/>
<AboutContent/>
      <Footer/>

    </div>
  )
}

export default About