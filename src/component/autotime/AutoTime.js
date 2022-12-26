import React, { useState } from "react";
import './AutoTime.css';

const ContinueTime = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [timerauto,setTimeraito] = useState(newTime)
  

    const Update = () =>{
        newTime = new Date().toLocaleTimeString();
        setTimeraito(newTime)
    }
    

    setInterval(Update,1000)


    return(
        <>
        <div className="container2">
         <h1>{timerauto}</h1>
         </div>
        </>
    )
}

export default ContinueTime;