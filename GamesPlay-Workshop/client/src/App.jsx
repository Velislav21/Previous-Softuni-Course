import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './components/user/login/Login'
import Register from './components/user/register/Register'

function App() {

  return (
    <div id="box">
      <Header/>

      <Routes>

        <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'/register'} element={<Register/>}></Route>

      </Routes>
    </div>
  )
}

export default App
