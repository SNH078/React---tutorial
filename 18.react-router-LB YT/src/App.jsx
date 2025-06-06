// npm i react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },

    {
      path:"/dashboard", // parent route /
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'courses',      //children route 
          element: <Courses/>
        },
        {
          path:'mock-tests',
          element: <MockTest/>
        },
        {
          path:'reports',
          element: <Reports/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp />
      </div>

    },
    {
      path:'*',   //all pages other than the above mentioned 
      element:<NotFound />
    }
  ]
);


function App() {
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
