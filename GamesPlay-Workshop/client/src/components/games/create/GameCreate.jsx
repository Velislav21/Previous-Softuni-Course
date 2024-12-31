import { useState } from "react"
import { useNavigate } from "react-router-dom";
import gamesAPI from "../../api/games-api";


export default function GameCreate() {

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        levels: "",
        imageUrl: "",
        summary: ""
    })  

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleCreateGameHandler = async (e) => {

        e.preventDefault();
        await gamesAPI.createGame(formData);
        navigate('/')    
    }   

    return (

        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." onChange={handleChange} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." onChange={handleChange} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="levels" min="1" placeholder="1" onChange={handleChange} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." onChange={handleChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" onChange={handleChange}></textarea>
                    <input className="btn submit" type="submit" value="Create Game" onClick={handleCreateGameHandler}/>
                </div>
            </form>
        </section>

    )
}