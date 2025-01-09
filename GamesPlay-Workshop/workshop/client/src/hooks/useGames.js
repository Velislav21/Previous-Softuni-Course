import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import gamesAPI from "../api/games-api";



export function useGetAllGames() {

    const [games, setGames] = useState([]);

    useEffect(() => {

        (async () => {
            const games = await gamesAPI.getAll()
            setGames(games)
        })()
    }, [])

    return [games, setGames];
}

export function useGetOneGame(gameId) {

    const [game, setGame] = useState({
        title: '',
        summary: '',
        levels: '',
        imageUrl: '',
        category: ''
    });

    useEffect(() => {

        (async () => {
            const game = await gamesAPI.getOne(gameId)
            setGame(game)
        })()
    }, [gameId])

    return [game, setGame];
}

export function useCreateGame() {

    const createGame = (values) => gamesAPI.createGame(values);

    return createGame;
}

export function useEditGame() {
    const editGame = (values) => gamesAPI.updateGame(values);

    return editGame;
}