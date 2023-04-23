import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone,FaMailBulk, FaFacebook,  FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
              <FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
            
                <p>117 Addington Crescent Brampton, Canada</p>
               
                     
            </div> 

            <div className="phone">
                           <h4><FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/>647-787-1685</h4>
                      
            </div> 

            <div className="email">            
            
                <h4><FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>Rizwana.ShaherBano@triosstudent.com</h4>
                     
            </div> 

            </div>

            <div className="Right">
                <h4>About Me</h4>
                <p>Energetic and motivated “Web & Mobile developer”
                     able to take initiative and contribute 
                     to a team environment through hard work,
                      attention to detail and excellent organizational skills. </p>
                      <div className="social">
                      <a href="https://www.facebook.com/profile.php?id=100081162704088"><FaFacebook size={30} style={{color:"#fff" , marginRight:"1rem"}}/> </a>  
                      <a href="https://www.linkedin.com/in/rizwana-shaher-bano"><FaLinkedin size={30} style={{color:"#fff" , marginRight:"1rem"}}/></a>
                      <a href="https://www.instagram.com/rizwana040621/"><FaInstagram size={30} style={{color:"#fff" , marginRight:"1rem"}}/></a>

                      </div>
                      
  
            </div>
        </div>
    </div>
  )
}

export default Footer