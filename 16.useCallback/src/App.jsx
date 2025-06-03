// 1. prevent un necessary rendering 

import { useCallback, useState } from 'react'
import Child from './Child.jsx'
import Child2 from './Child2.jsx'
import Child1 from './Child1.jsx'
function App() {
  const [count, setCount] = useState(0)

// try with either of  1 / 2 / 3

  //1  w/o hook useCallback

  // const handleClick=()=>{
  //   setCount(count+1)
  //   }

  // 2   w/a hook useCallback..no dependency..fn freezes after one call ..counter stops at 1

  // const handleClick = useCallback(()=>{
  //   setCount(count+1);
  //   });

  // 3 
  //when count(dependency)changes ..useCallback is  called nd new fn is created..child gets rendered 

    const handleClick = useCallback(()=>{
      setCount(count+1);
      },[count]);


  return (
    <>
    <button onClick={handleClick}>++</button> &nbsp;

{count}<br/>

<div>
{/* w/o memo */}
{/* memo is not used hence it will be re rendered */}
    <Child btnname="btn0"/> 
    {/* w/a memo ..so, re-render nhi hota*/}
    <Child1 btnname="btn1" />
    {/* w/a memo but w/a function passed--..memo failed */}
    <Child2 btnname="btn1" handleClick={handleClick} />
 

 </div>   

    </>
  )
}

export default App
