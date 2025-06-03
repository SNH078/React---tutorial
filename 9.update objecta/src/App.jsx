import { useState } from 'react'

// import './App.css'

function App() {
  const [car, setCar] = useState({
                           year:2024,
                           make:"Ford" , 
                           model:"Mustang"
  })

  function handleYear(){
    setCar(c=>({...c,year:event.target.value}));
  }
  function handleMake(){
    setCar(c=>({...c,make:event.target.value}));
  }
  function handleModel(){
    setCar(c=>({...c,model:event.target.value}));
  }

  return (
    <>
    <p>you favourite car is : {car.year} {car.make} {car.model}</p>
      year:&nbsp;<input onChange={handleYear} type='number' value={car.year}></input>
      <br/>
     make :&nbsp;<input onChange={handleMake} value={car.make}></input>
     <br/>
     model:&nbsp;<input onChange={handleModel} value={car.model}></input>
    </>
  )
}

export default App
