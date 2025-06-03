import { useState,useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count +1);
  }

  //it runs on every render
  useEffect(() => {
    console.log("yes ref vla")
  })
  

 
  return (
    <div> 
      <button 
      onClick={handleIncrement}>
       W/a ref
      </button>
     

      <div>
        Count: {count}
        <br/>
        val: {val.current}
      </div>
      <hr/>
      <br/>
    </div>
  )
}

export default App
