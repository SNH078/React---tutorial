import { useState } from "react";

function Counter(){
  const [count, setCount]=useState(0);
const resetCount=()=>{
    setCount(0);
}
const inc=()=>{
    setCount(count+1);
}
const dec=()=>{
    setCount(count-1);
}

    return ( <>
<button onClick={resetCount}>{count}</button>
<button onClick={inc}>increment</button>
<button onClick={dec}>decrement</button>
</>
    );
}
export default Counter;