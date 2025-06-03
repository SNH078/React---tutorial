import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  // function inc(){
  //   setCount(count+1);
  // };

  function inc(){
    setCount(c=>c+1);
    setCount(c=>c+1);
    setCount(c=>c+1);
  };
  return (
   
    <div>
     <p>count : {count}</p> 
     <button onClick={inc}>increase </button> 
    </div>
  )
}

export default App
