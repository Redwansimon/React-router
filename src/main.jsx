import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import Home from './component/home/Home.jsx'
import Users from './component/users/Users.jsx'
import Userdetail from './component/userdetail/Userdetail.jsx'
import Foods from './component/foods/Foods.jsx'
import FoodDetails from './component/fooddetails/FoodDetails.jsx'
import Error from './component/error/Error.jsx'
const router = createBrowserRouter ([
  {
    path:"/",
    element: <Home />,
    errorElement:<Error></Error>,
    children: [
      {
        path:"/about",
        element:<About></About>
      },
      {path:"/contact",element : <Contact></Contact>},
      {
        path:"/users",
        // loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element:<Users></Users>
      },
      {
        path:"/foods",
        loader:()=>fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element:<Foods></Foods>
      },
      {
        path:"/users/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Userdetail></Userdetail>
      },
      {
        path:"/foods/:userId",
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.userId}`),
        element:<FoodDetails></FoodDetails>
      }


    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
