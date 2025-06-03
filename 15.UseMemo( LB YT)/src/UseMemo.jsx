// 
import { useState,useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for(let i=0; i<=1000000000; i++) {;}
    return num*2;
  }
//un-comment line 16 n comment out line 17 
// 16 - without use memo- slow, 17 - useMemo fast

// let val= expensiveTask(input);
  let val = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <input 
        type='number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        Double: {val}
      </div>
    </div>
  )
}

export default App
