import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaMailBulk, FaFacebook,  FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  const CurrentYear = new Date().getFullYear()
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
              <FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
            
                <p>Ontario, Canada</p>
                
               
                     
            </div> 

            

            <div className="email">            
            
                <h4><FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>Rizwana.ShaherBano@triosstudent.com</h4>
                     
            </div> 
            <div className="copyRight">
            <p>&copy; {CurrentYear} Rizwana Shaher Bano</p>
            </div>
            </div>

            <div className="Right">
                <h4>About Me</h4>
                <p>Energetic and motivated “Web & Mobile developer”
                     able to take initiative and contribute 
                     to a team environment through hard work,
                      attention to detail and excellent organizational skills. </p>
                      <div className="social">
                      <a href="https://www.facebook.com/profile.php?id=100081162704088" target="_blank" rel="noreferrer"><FaFacebook size={30} style={{color:"#fff" , marginRight:"1rem"}}/> </a>  
                      <a href="https://www.linkedin.com/in/rizwana-shaher-bano" target="_blank" rel="noreferrer"><FaLinkedin size={30} style={{color:"#fff" , marginRight:"1rem"}}/></a>
                      <a href="https://www.instagram.com/rizwana040621/" target="_blank" rel="noreferrer"><FaInstagram size={30} style={{color:"#fff" , marginRight:"1rem"}}/></a>

                      </div>
                      
  
            </div>
            
          
        </div>
       
    </div>
  )
}

export default Footer