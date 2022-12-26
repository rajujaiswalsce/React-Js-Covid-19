import React, { useState } from "react";
import './Timers.css';

const Timers = () => {
    let newTime = new Date().toLocaleTimeString();
    let date = new Date();
    let newTimer = date.getHours >= 12 ? "PM" : "AM";
    // console.log(newTime);
  const [timer,setTimer] = useState(newTime)
    const ChangeTime = () =>{
        newTime = new Date().toLocaleTimeString();
        setTimer(newTime)
    }
    return(
        <>
           <div className="container1">
                <h1>{timer} {newTimer}</h1>
                <button onClick={ChangeTime}>GET TIME</button>
            </div>
        </>
    )
}
export default Timers;