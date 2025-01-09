import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthContextProvider } from './contexts/authContext'
import Header from './components/header/Header'
import Login from './components/user/login/Login'
import Register from './components/user/register/Register'
import Home from './components/home/Home'
import GameCreate from './components/games/create/GameCreate'
import GamesList from './components/games/GamesList'
import GameDetails from './components/games/GameDetails'
import GameEdit from './components/games/GameEdit'
import Logout from './components/user/logout/Logout'

function App() {
    return (
        <AuthContextProvider>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path={'/'} element={<Home />} />
                        <Route path={'/login'} element={<Login />} />
                        <Route path={'/register'} element={<Register />} />
                        <Route path={'/logout'} element={<Logout />} />
                        <Route path={'/games'} element={<GamesList />} />
                        <Route path={'/games/create'} element={<GameCreate />} />
                        <Route path={'/games/:gameId/details'} element={<GameDetails />} />
                        <Route path={'/games/:gameId/edit'} element={<GameEdit />} />
                    </Routes>
                </main>
            </div>
        </AuthContextProvider>
    )
}
export default App
