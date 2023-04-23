import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImageGeneral from '../components/HeroImageGeneral'
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
    <Navbar/>
   
   <HeroImageGeneral heading="Projects." text ="Some of my most recent work"/>
   <Work/>
    <Footer/>

  </div>
  );
};

export default Project