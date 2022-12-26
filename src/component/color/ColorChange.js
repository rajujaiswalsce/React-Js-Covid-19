import React, { useState } from "react";
 import './ColorChange.css';

const ColorChange = () =>{
    
    let purple = "purple"
     const [color,setColor] = useState(purple)
     const [name1,setName1] = useState("Click Me")
    

    const Update = () =>{
        // console.log(color)
        let gr = "green"
        setColor(gr)
        setName1("Ouch!!")
    
        // console.log("hello raj1")
    }
    const DoubleClick = () =>{
        setColor(purple)
        setName1("yoyo!!")
        // console.log("hello raj2")
    }
    const DoubleClick1 = () =>{
        setColor("blue")
        setName1("Ayy!!")
        // console.log("hello raj3")
    }

    return(
        <>
        <div style={{backgroundColor:color}}>
          <button onMouseEnter={Update} onMouseLeave = {DoubleClick} onMouseMove = {DoubleClick1} >{name1}</button>
          </div>
        </>
    )
}

export default ColorChange;