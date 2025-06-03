import { useState } from 'react'


function App() {
  const [foods, setFood] = useState(["apple","orange","coconut"]);

  function handleRemove(index){
    // setFood(foods.filter((element,i) => i!==index));    
    setFood(foods.filter((_,i) => i!==index));   // _ to ignore unused argument
  }

 function handleAdd(){
  const newFood =document.getElementById("102").value;
  document.getElementById("102").value=""; 

  setFood(f=>[...f,newFood]);
 }
 
  return (
    <>
      <h1>List of fruits</h1>
      <div>
<ul>
 { foods.map((food,index)=> 
   <li key={index} onClick={()=>handleRemove(index)}>{food}</li>
 )
 }
</ul>
<input  id="102"></input>
<button onClick={handleAdd}>add</button>

      </div>
    </>
  )
}

export default App
