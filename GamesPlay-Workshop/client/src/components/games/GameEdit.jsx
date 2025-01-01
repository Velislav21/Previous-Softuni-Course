import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import gamesAPI from "../../api/games-api";
import useFetch from "../../hooks/useFetch";

export default function GameEdit() {

    const navigate = useNavigate();
    const { gameId } = useParams();

    const [inputs, setInputs] = useState({
        title: '',
        category: '',
        levels: '',
        imageUrl: '',
        summary: ''
    });

    // const { data: game } = useFetch('GET', `http://localhost:3030/jsonstore/games/${gameId}`, {})
    useEffect(() => {

        (async () => {
            const game = await gamesAPI.getOne(gameId);
            console.log(game)
            setInputs(game);
        })()
    }, [])

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setInputs((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await gamesAPI.updateGame(gameId, game)
        navigate('/')
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={handleSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={inputs.title} onChange={handleInputChange} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={inputs.category} onChange={handleInputChange} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="levels" name="levels" min="1" value={inputs.levels} onChange={handleInputChange} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={inputs.imageUrl} onChange={handleInputChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={inputs.summary} onChange={handleInputChange}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )
}