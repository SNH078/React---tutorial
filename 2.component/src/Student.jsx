// prop types -- type checking of props  (ensures correct data is entered ) 
//default props -- default types of props in case they are not pased from the parent components 
import PropTypes from 'prop-types'
import  "./App.css"
function Student(props){
  return(
    <div className='student'>
        <p>Name: {props.name}</p>
        <p>age: {props.age}</p>
        <p>isStudent: {props.isStudent ?"Yes":"No"}</p>
    </div>
  )
}

Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
isStudent:PropTypes.bool, 
}
Student.defaultProps={
  name:"Guest",
  age: 10,
  isStudent:true,
}
export default Student;