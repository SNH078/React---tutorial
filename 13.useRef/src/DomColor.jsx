// change color of button by pressing another button 

import { useEffect, useRef } from 'react'


function App() {
  let btnRef = useRef();
  //it runs on every render
  useEffect(() => {
    console.log("color")
  })
  
  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }


  return (
    <div>

      <button 
      ref={btnRef}>
        Increment
      </button>
      <br/>
<br/>
      <button onClick={changeColor}>
        Change Color of 1st Button
      </button>


      <hr/>
    </div>
  )
}

export default App
