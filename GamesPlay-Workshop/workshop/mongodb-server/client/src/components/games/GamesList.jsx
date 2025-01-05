
import { useGetAllGames } from "../../hooks/useGames.js"
import GameListItem from "./GameListItem.jsx"

export default function GamesList() {

    const [games] = useGetAllGames();

    return (

        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0 ?
                games.map((game) => <GameListItem key={game._id} {...game} />) :
                <h3 className="no-articles">No articles yet</h3>}

        </section>

    )
}