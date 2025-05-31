import { useState } from "react";
 
function Name(){
    const [name, setName]=useState("my name");
     
    const updateName=()=>{
        setName("SpongeBob");
    }
    const resetName=()=>{
        setName("my name");
    }
    return(
        <>
        <p>Name : {name}</p>
        <button onClick={updateName} onDoubleClick={resetName}>click me !</button>
        </>
    );
}
export default Name