import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import gamesAPI from "../api/games-api";

export default function GameEdit() {

    const [game, setGame] = useState({});
    const { gameId } = useParams();

    useEffect(() => {

        (async () => {
            const game = await gamesAPI.getOne(gameId);
            setGame(game);
        })()
    }, [])

    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.levels} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={game.summary}></textarea>
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />

                </div>
            </form>
        </section>
    )
}