import { useParams, useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm";
import { useGetOneGame } from "../../hooks/useGames";
import gamesAPI from "../../api/games-api";

export default function GameEdit() {

    const navigate = useNavigate();
    const { gameId } = useParams();

    const [game] = useGetOneGame(gameId)

    const editGameHandler = async (values) => {

        await gamesAPI.updateGame(gameId, values)
        navigate(`/games/${gameId}/details`)
    }
    const { values, changeHandler, submitHandler} = useForm(game, editGameHandler)



    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={changeHandler} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="levels" name="levels" min="1" value={values.levels} onChange={changeHandler} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )
}