
import React from "react";
import "./Morning.css"

const Morning = () => {
    const time1 = new Date();
    const time = time1.getHours();
   
    let x = " ";
    let cssStyle = { backgroundColor: "azure"}
    if(time>=1 && time <12){
        // console.log(time)
        x = "Good Morning"
        cssStyle.color = "green"
    }else if(time>=12 && time<19){
        x = "Good Afternoon"
        cssStyle.color = "blue"
    }else{
        x = "Good Night"
        cssStyle.color = "red"
       
    }
   
    
    return(
        <>
           <div className="container4">
           <p className="goodby"><span className="hellos">Hello Sir,</span> <span style={cssStyle}>{x}</span></p> 
           </div>
        </>
    )
}

export default Morning;