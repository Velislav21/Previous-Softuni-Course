import './index.css'

import Header from './components/header/Header'
import SearchBar from './components/search-bar/SearchBar'
import UserListContainer from './components/user-list/UserListContainer'
import Footer from './components/footer/Footer'

function App() {

    return (
        <>
            < Header />
            <main className="main">
                <section className='card users-container'>

                    <SearchBar />
                    <UserListContainer />

                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
