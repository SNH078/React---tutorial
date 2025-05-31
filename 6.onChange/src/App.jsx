// onChange : input , radio, select, text area
import { useState } from "react"
function App() {
  const [name, setName] = useState("");
  const [quantity, setquant] = useState();
  const [comment, setcom] = useState("");
  const [payment, setPay] = useState("");
  const [delivery, setDel] = useState("");
  

function handleName(event){
   setName(event.target.value);
}
function handleQuant(event){
  setquant(event.target.value);
}
function handleCom(event){
  setcom(event.target.value);
}

function handlePay(event){
  setPay(event.target.value);
}

function handleDel(event){
  setDel(event.target.value);
}
  return (
    <>
     <input value={name} placeholder="your name here " onChange={handleName}></input><br/>
     Name : {name}
<br/><br/>

     <input value={quantity} onChange={handleQuant} type="number"></input><br/>
     Quantity : {quantity}
     <br/><br/>

<select onChange={handlePay}> 
  <option>select you option</option>
  <option>Visa</option>
  <option>Mastercard</option>
  <option>Giftcard</option>
</select><br/>
payment : {payment}
<br/><br/>

    <textarea value={comment} onChange={handleCom} rows="4" placeholder="add delivery instructions"/><br/>
    comment : {comment}
    <br/><br/>

<label >
<input type="radio"value="fast delivery" onChange={handleDel} checked={delivery==="fast delivery"}/>fast delivery
</label>
<label >
<input type="radio" value="Normal" onChange={handleDel} checked={delivery==="Normal"}/>Normal
</label>
<br/>
delivery : {delivery}
    </>

  )
}

export default App
