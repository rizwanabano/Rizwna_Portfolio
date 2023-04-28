import "./HeroImageStyles.css";
import React from 'react'
import herosection from "../assests/herobackground.jpg"
import  { Link } from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="Intro">
        <div className="mask">
         <img className="IntroImage" src= {herosection} alt="heroSection" /> 
        </div> 
        <div className="content">
          <p>Hello, I am</p>
            <h1> Rizwana Shaher Bano</h1>
            <p>AN ENERGETIC FRONT END WEB DEVELOPER.</p>
           <br/>

            <Link to= "/Project" className="btn">My Work</Link>

          
            <a href= "http://triosdevelopers.com/~R.ShaherBano/Resume/Rizwana_Resume.pdf" target="_blank" rel="noreferrer" ><button className="btn-light">My Resume</button></a>



        </div>       
        </div>
  )
}

export default HeroImage