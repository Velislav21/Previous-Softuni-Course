import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import gamesAPI from "../../api/games-api";

export default function GameEdit() {

    const [game, setGame] = useState({
        title: '',
        category: '',
        levels: '',
        imageUrl: '',
        summary: ''
    });
    const navigate = useNavigate();
    const { gameId } = useParams();

    useEffect(() => {

        (async () => {
            const game = await gamesAPI.getOne(gameId);
            setGame(game);
        })()
    }, [])

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setGame((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        await gamesAPI.updateGame(gameId, game)
        navigate('/')
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={game.title} onChange={handleInputChange} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={game.category} onChange={handleInputChange} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="levels" name="levels" min="1" value={game.levels} onChange={handleInputChange} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} onChange={handleInputChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={game.summary} onChange={handleInputChange}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" onClick={handleSubmitClick} />

                </div>
            </form>
        </section>
    )
}