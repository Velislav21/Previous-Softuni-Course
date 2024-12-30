import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './components/user/login/Login'
import Register from './components/user/register/Register'
import CreateGame from './components/create-edit-game/create/CreateGame'
import AllGames from './components/games/AllGames'

function App() {

  return (
    <div id="box">
      <Header />

      <Routes>

        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/create'} element={<CreateGame />} />
        <Route path={'/games'} element={<AllGames/>}/>
      </Routes>
    </div>
  )
}

export default App
