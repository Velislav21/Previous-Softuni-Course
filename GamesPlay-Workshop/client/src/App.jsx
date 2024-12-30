import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './components/user/login/Login'
import Register from './components/user/register/Register'
import GameCreate from './components/create-edit-game/create/GameCreate'
import AllGames from './components/games/AllGames'
import Home from './components/home/Home'

function App() {

    return (
        <div id="box">

            <Header />

            <main id="main-content">
                <Routes>

                    <Route path={'/'} element={<Home />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/games'} element={<AllGames />} />
                    <Route path={'/games/create'} element={<GameCreate />} />

                </Routes>
            </main>

        </div>
    )
}

export default App
