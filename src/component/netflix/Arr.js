import React from "react";
import Card from './Card';
import Sdata from './Sdata'

const Arr = () => {
    return (
        <>
             {
         Sdata.map((x) => {
           return(
            <Card
                 key = {x.id}
                 img1 = {x.imgs}
                 text1 =  {x.text}
                 value1 = {x.value}    
            />
             )
     })
    }
        </>
    )
}
export default Arr