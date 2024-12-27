import './index.css'

import Header from './components/header/Header'
import UserSection from './components/user-section/UserSection'
import Footer from './components/footer/Footer'

function App() {

    return (
        <>
            < Header />
            <main className="main">
                {/* <section className='card users-container'> */}

                    <UserSection />

                {/* </section> */}
            </main>
            <Footer/>
        </>
    )
}

export default App
