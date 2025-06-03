
import { useState, createContext } from 'react';
import CB from './CompB';

export const myCont= createContext();
function CA(){
    const [user, setUser] = useState("bro code");

   return(
    <div className='box'>
    <h2>Comp A </h2>
        <h3>{`Hello , ${user}`}</h3> 
    <myCont.Provider value={user}>
    <CB user={user}/>
    </myCont.Provider>
    </div>
   ) 
}

export default CA;