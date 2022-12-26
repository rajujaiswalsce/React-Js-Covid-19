
import React from "react";
import './Card.css'
import Card1  from "./Card1";

const Card = (props) => {
    return (
        <>
            <div className="topcontainer">
                <div>
                 <Card1 img2 = {props.img1}/>
                  <h1>{props.text1}</h1>
                   
                  <img src = {props.value1} alt="mynaaa"/>
                </div>
            </div>
        </>
    )
}
export default Card;