// child gets rendered each tym ++ is pressed 

import PropTypes from "prop-types";
const Child = (props)=>{
    console.log("child 0---got rendered ! ");
    return(
<div>
 <button >{props.btnname}</button>
  
</div>
    );

}

Child.propTypes = {
    btnname: PropTypes.string.isRequired, // btnname must be a string and is required
};


Child.displayName = "Child";
export default Child;