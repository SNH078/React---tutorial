
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      Dashboard page
      <Outlet />    
      {/* parent route */}
    </div>
  )
}

export default Dashboard
