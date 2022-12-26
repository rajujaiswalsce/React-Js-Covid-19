
import React from "react";

const TimeAndDate = () => {

     const name = "raju"
    const today = new Date();
    const dateCurrent = today.getDate() + '/' + (today.getMonth()+1) + '/' +today.getFullYear();
    const current = new Date();
    const currentTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

    return(
        <>
            <h1><span style={{color:"blue"}}>{`Hello`}</span> {`My Name is ${name}`}</h1>
            <p>Today Date is <span style={{color:"red"}}>{dateCurrent}</span></p>
            <p>Current Time is <span style={{color:"brown"}}>{currentTime}</span></p>
        </>
    )
}
export default TimeAndDate;