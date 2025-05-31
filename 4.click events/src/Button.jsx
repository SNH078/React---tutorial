function Button()
{
   // const handleClick=()=> console.log("ouch !!");
   const handleClick=(name)=> console.log(`${name}, stop clicking !!`);  
   // return <button onClick={handleClick("bro")}>click me ! </button> //unwanted early function calls 

   return <button onClick={()=>handleClick("bro")}>click me ! </button>
}
export default Button;