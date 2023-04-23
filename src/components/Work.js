import "./WorkCardStyles.css";
import React from 'react'

import WordCardData from "./WorkCardData";
import WorkCard from "./WorkCard";
function Work() {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        
        
        <div className="project-container">
        {WordCardData.map((val,ind)=>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                
                
                />
            )
        }
            )}
      
    </div>
    </div>
  )
}

export default Work
