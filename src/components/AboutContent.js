import React from 'react'
import "./AboutContentStyles.css"
import react2 from "../assests/React.png"
import react1 from "../assests/react1.png"
const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I</h1>
        <p>I am a React Front-End Developer. I Love to create responsive  websites</p>
        <a href= "http://triosdevelopers.com/~R.ShaherBano/Resume/Rizwana_Resume.pdf" ><button className="btn">My Resume</button></a>
     
      </div>
      <div className='right'>
          <div className='img-container'>
            <div className='image-stack top'>
                <img src={react2} className="img"
                alt="true"/>
            </div>
            <div className='image-stack bottom'>
                <img src={react1} className="img"
                alt="true"/>
            </div>
          </div>
      </div>
        </div>
  )
}

export default AboutContent