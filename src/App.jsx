import React from 'react'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Outlet/>
      </AuthContextProvider>
    </>
  )
}

export default App