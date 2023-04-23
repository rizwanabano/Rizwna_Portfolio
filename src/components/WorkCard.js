import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";



const WorkCard= (props) =>  {
  return (
   
        <div className="project-card">
        <img src= {props.imgsrc} alt="heroImageGeneral" /> 
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">{props.text}</div>
            <div className="pro-btns">
                <NavLink to ={props.view} className="btn" target="_blank" rel="noreferrer">View</NavLink>
                <NavLink to ={props.source} className="btn" target="_blank" rel="noreferrer">Source</NavLink>
            </div>


        </div>
  
  )
}

export default WorkCard
