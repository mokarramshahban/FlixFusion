import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './components/Login'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <Login />
  },
]);

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  )
}

export default App
