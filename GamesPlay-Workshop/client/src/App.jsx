import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './components/user/login/Login'
import Register from './components/user/register/Register'
import GameCreate from './components/games/create/GameCreate'
import GamesList from './components/games/GamesList'
import Home from './components/home/Home'
import GameDetails from './components/games/GameDetails'
import GameEdit from './components/games/GameEdit'

function App() {

    return (
        <div id="box">

            <Header />

            <main id="main-content">
                <Routes>

                    <Route path={'/'} element={<Home />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/games'} element={<GamesList />} />
                    <Route path={'/games/create'} element={<GameCreate />} />
                    <Route path={'/games/:gameId/details'} element={<GameDetails/>}/>
                    {/* <Route path={'/games/:gameId/edit'} element={<GameEdit/>}/> */}
                </Routes>
            </main>

        </div>
    )
}

export default App
