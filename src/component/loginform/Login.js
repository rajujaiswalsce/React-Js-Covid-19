import React, { useState } from "react";
import './Login.css';


const Login = () => {

   const [name,setName] = useState(" ")
   const [firstName,setFirstName] = useState();
   const [lastName,setLastName] = useState();
   const [fullName,setFullName] = useState(" ")

   const onsubmit = (event) => {
    event.preventDefault();
    setFirstName(name)
    setFullName(lastName)
    // console.log("hello")
   }

   const inputName = (event) => {
      setName(event.target.value)
   }
 const inputNameLast = (event) =>{
    setLastName(event.target.value)
 } 

    return(
        <>
         <form onSubmit={onsubmit}>
         <div>
            <h1>Hello {firstName} {fullName}</h1>
            <input type="text" 
            placeholder="Enter Your Name"
             onChange={inputName} 
             value={name} />
             <input type="text" 
            placeholder="Enter Your Last Name"
             onChange={inputNameLast} 
             value={lastName} />
            <button type="submit">SUBMIT</button>
        </div>
         </form>   
        </>
    )
}
export default Login;