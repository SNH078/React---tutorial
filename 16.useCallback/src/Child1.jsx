//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga 

//if u r sending a function, then react.memo wont be able to save you from re-rendering

import React from 'react'
import PropTypes from "prop-types";

const Child1 = React.memo(
    (props) => {
    
        console.log("Child 1  -rendered --");
      
        return (
          <div>
            <button>
              {props.btnname}
            </button>
          </div>
        )
      }
);

Child1.propTypes = {
    btnname: PropTypes.string.isRequired, // btnname must be a string and is required
}

Child1.displayName = "Child1";
export default Child1
