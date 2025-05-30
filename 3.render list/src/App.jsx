
import './App.css'
import Listtt from './Listtt.jsx'
function List() {

  const fruits =[
    {id:1,name:"apple",calories:67},
    {id:2,name:"orange",calories:85},
    {id:3,name:"banana",calories:105},
    {id:4,name:"coconut",calories:114}
  ]; 

// fruits.sort((a,b) => a.name.localeCompare(b.name)) // alphabetcally 
// fruits.sort((a,b) => b.name.localeCompare(a.name)) // reverse
// fruits.sort((a,b) => a.calories-b.calories) // inc order of calories 
// fruits.sort((a,b) => b.calories-a.calories) // dec order of calories 

/*
const filteredFruits = fruits.filter(fruit=> fruit.calories>=100);
const listItem =filteredFruits.map(fruit=> <li key={fruit.id}> {fruit.name}:&nbsp;
  <b> {fruit.calories}</b>
</li> );
return (<ol >{listItem}</ol>);
*/


  // const listItem =fruits.map(fruit=> <li key={fruit.id}> {fruit.name}:&nbsp;
  //                                    <b> {fruit.calories}</b>
  // </li> );
    return (<>
    <Listtt items={fruits} category="Fruits"/>
    </>);
}



export default List;
    