import { useState, useEffect } from "react"

import GameListItem from "./GameListItem"
import gamesAPI from "../../api/games-api"

export default function GamesList() {
    const [games, setGames] = useState([]);

    useEffect(() => {

        (async () => {
            const games = await gamesAPI.getAll();
            setGames(games);
        })()
    }, [])
    return (

        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0 ?
                games.map((game) => <GameListItem key={game._id} {...game} />) :
                <h3 className="no-articles">No articles yet</h3>}

        </section>

    )
}