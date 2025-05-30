import './App.css'
// import PropTypes from 'prop-types'
function Listtt(props){
 const category= props.category;
 const itemlist= props.items;

 
 const listItem = itemlist.map(item=> <li key={item.id}>
                                      {item.name}: &nbsp;
                                      <b>{item.calories}</b>
                                      </li>)

return(<>
         <h3 className='list-category'>{category}</h3>
         <ol className='list-item'>{listItem}</ol>
</>);
}
Listtt.defaultProps={
    category:"Category",
    items:[],
  }
// Listtt.propType={
//     category:PropTypes.string,
//     items:PropTypes.string
//   }

export default Listtt;