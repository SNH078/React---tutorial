import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("#ffffff");
   
function handleColor(event){
 setColor(event.target.value);
  }
  
  return (
    <div className='color-pick'>
      <h1>Color Picker </h1>
      <div className='color-display' style={{backgroundColor:color}}>
        <p>Selected color : {color}</p>
      </div>
      <label>select a color :</label>
      <input type="color" value={color} onChange={handleColor}/>
       </div>
  );
}

export default App;
