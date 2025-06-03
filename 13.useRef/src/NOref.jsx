import { useState,useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);

  let val=0;
  function handleIncrement() {
    val = val + 1;
    console.log("Value of val: ", val);
    setCount(count +1);
  }

  //it runs on every render
  useEffect(() => {

    console.log("No ref vla")

  })
  

 
  return (
    <div> 
      <button 
      onClick={handleIncrement}>
       W/o ref
      </button>
     

      <div>
        Count: {count}
        <br/>
        val: {val} (see console)
      </div>
      <hr/>
      <br/>
    </div>
  )
}

export default App
