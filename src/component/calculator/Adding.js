
import React from "react";
import {Sum1,Sub,Div,Mul} from "./Sum"


const Adding = () => {
    return(
        <>
            <ul>
                <li>
                    Sum of two number is {Sum1(4,5)}
                </li>
                <li>
                    Sub of two number is {Sub(10,5)}
                </li>
                <li>
                    Div of two number is {Div(7,3)}
                </li>
                <li>
                    Mult of two number is {Mul(10,5)}
                </li>
            </ul>
        </>
    )
}

export default Adding;
