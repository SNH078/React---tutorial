import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './components/MySlice'
import { useState } from 'react'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  //counter - name of slice
  const dispatch = useDispatch()

  const [amount,setAmount]=useState();
  return (
    <div>
      <div>
        <button
          
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h3>{count}</h3>
        <button
          
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
<br/>
        <input
         value={amount} 
         type='number'
          onChange={(e)=>{setAmount(e.target.value)}}></input>
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Inc by amount
        </button>

      </div>
    </div>
  )
}

export default Counter;