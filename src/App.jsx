import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute'
import InfoModel from './components/InfoModel'
const App = () => {
  return (
  <>
  <AuthContextProvider>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
    <Route path='/info/:id' element={<InfoModel/>}/>
   </Routes>
  </AuthContextProvider>
  
  </>
  
  )
}

export default App