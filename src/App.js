import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import ContactUs from "./routes/ContactUs";
import Project from "./routes/Project"; 
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
     
       <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element ={<About/>} />
        <Route path ="/project" element ={<Project/>}   />
        <Route path="/contactUs"  element ={<ContactUs/>}  />

       </Routes>
      
    </>
  );
}

export default App;
