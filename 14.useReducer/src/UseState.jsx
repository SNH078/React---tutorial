// handling multiple states using useState

import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const[hidden,setHide]=useState(false);

  function handleInc(){
       setCount(count+1); 
  }

  function handleDec(){
setCount(count-1);
  }
  function handlehide(){
setHide(!hidden);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={handleInc}>++</button>
        <button onClick={handleDec}>--</button>
        <button onClick={handlehide}>Hide</button>
        <br/>
        {hidden ? "hidden":"not hidden"}
        </div>
    </>
  )
}

export default App
