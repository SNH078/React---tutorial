// handling multiple states using useReducer

import {useReducer} from 'react'

function Red() {

const reducer = (state,action)=>{
  switch(action.type){
    case "INCREMENT":
  return {...state, count:state.count+1};
  case "DECREMENT":
    return {...state, count:state.count+1};
    case "HIDE":
      return {...state, hidden:!state.hidden};
      default:
          return state;

  }
};

const [state , dispatch] =useReducer(reducer,{count:0,hidden:false})
 // 
  function handleInc(){
     dispatch({type:"INCREMENT"});
  }
  function handleDec(){
    dispatch({type:"DECREMENT"});
  }
  function handlehide(){
    dispatch({type:"HIDE"});
  }
  
  return (
    <>
      <div>
        <p>{state.count}</p>
        {/* <p>{String(state.count).padStart(2, "0")}</p> */}
        <button onClick={handleInc}>++</button>
        <button onClick={handleDec}>--</button>
        <button onClick={handlehide}>Hide</button>
        <br/>
       { state.hidden ? <h3>hidden</h3>:<h3>not hidden</h3>}
        </div>
    </>
  )
}

export default Red;