import { useState, useEffect } from "react"

import GameListItem from "./GameListItem"
import * as gamesApi from "../api/games-api"

export default function GamesList() {
    const [games, setGames] = useState([]);

    useEffect(() => {

        (async () => {
            const games = await gamesApi.getAll();
            setGames(games);
        })()
    }, [])
    return (

        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map((game) => <GameListItem key={game._id} {...game}/>)}

            <h3 className="no-articles">No articles yet</h3>
        </section>

    )
}