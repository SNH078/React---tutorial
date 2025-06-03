//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga 

//if u r sending a function, then react.memo wont be able to save you from re-rendering

import React from 'react'
import PropTypes from "prop-types";

const Child2 = React.memo(
    (props) => {
    
        console.log("Child 2  -rendered --");
      
        return (
          <div>
            <button onClick={props.handleClick}>
              {props.btnname}
            </button>
          </div>
        )
      }
);

Child2.propTypes = {
    btnname: PropTypes.string.isRequired, // btnname must be a string and is required
handleClick:PropTypes.func.isRequired 
  
}

Child2.displayName = "Child2";
export default Child2
