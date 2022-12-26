import React, { useState } from "react";
import './form.css';

const Form = () =>{
  
 const [change,setChange] = useState(" ")  
 const [fullName,setFullName] = useState(); 



const inputEvent = (event) =>{
    // console.log(event.target.value)
     setChange(event.target.value)
}
const addFullName = () =>{
    setFullName(change)
 }

   return(
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input 
        type="text" 
        placeholder="Enter Your Name " 
           onChange={inputEvent} 
            value = {change}
        />
        <button onClick={addFullName}>SUBMIT</button>
      </div>
       
    </>
   )
}
export default Form;