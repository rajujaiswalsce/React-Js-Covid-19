
import React, { useState } from "react";
import './Counter.css';


const Counter = () => {
const [count,setCount] = useState(0);

    return(
        <>
          <div className="container">
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count - 1) }}>Decrement</button>
            </div>
        </>
    )
}

export default Counter;