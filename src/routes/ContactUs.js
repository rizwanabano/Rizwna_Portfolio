import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImageGeneral from '../components/HeroImageGeneral'
import EmailContact from "../components/EmailContact"
const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <HeroImageGeneral heading ="Contact" text ="Let's have a chat."/>
       
         <EmailContact/>
      <Footer/>

    </div>
  )
}

export default ContactUs