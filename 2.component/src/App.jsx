import Student from "./Student.jsx"

function App() {
   return(
    <>
  <Student name="ansh" age={34} isStudent={false}/>
  {/* <Student name="ansh" age="67" isStudent={false}/> */} 
  {/* prop types gives error on console ...inspect window  */}
  <Student name="rishi" age={6} isStudent={true}/>
  <Student />
  {/* deault props  */}
  <Student name="vishi" age={8} isStudent={true}/>
  </>
   )
}

export default App
