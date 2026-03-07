import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import Login from './components/Login'

function App() {

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
]);





  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
