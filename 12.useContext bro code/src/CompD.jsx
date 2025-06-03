
import  {useContext} from 'react';
import {myCont} from './CompA.jsx';

function CD(){
    const user = useContext(myCont);
    return(
    <div className='box' >
        <h2> {`Bye , ${user}`}</h2>
        <h3>comp d</h3>
    </div>
    )     
}
export default CD;