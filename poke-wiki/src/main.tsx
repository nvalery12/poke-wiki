import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Character from './routes/Character'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/character/:characterid',
    element: <Character/>,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
