import "./HeroImageStyles.css"
import React, { Component } from 'react'
import herosection from "../assests/ImageGeneral.jpg"
class HeroImageGeneral extends Component {
    render(){
  return (

    <div className="Intro">
    <div className="mask">
    
         <img className="IntroImage" src= {herosection} alt="heroSection"/> 
         </div>  
        <div className="content">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
   

    </div>
    </div>
  )
}
}

export default HeroImageGeneral
