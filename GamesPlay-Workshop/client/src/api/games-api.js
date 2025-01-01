import * as request from './requester.js';
import { useNavigate } from 'react-router-dom';
const baseUrl = 'http://localhost:3030/jsonstore/games';


const getAll = async () => {

    const result = await request.get(baseUrl);

    const games = Object.values(result);
    return games;
};

const getOne = async (gameId) => {
    return await request.get(`${baseUrl}/${gameId}`);
};

const createGame = async (gameData) => {
    const response = await request.post(`${baseUrl}`, gameData);
    console.log(response)
    return response;
};

const deleteGame = async (gameId) => {
    return await request.del(`${baseUrl}/${gameId}`)
}

const updateGame = async (gameId, gameData) => {
    return await request.put(`${baseUrl}/${gameId}`, gameData);
}

const gamesAPI = {
    getAll,
    getOne,
    createGame,
    deleteGame,
    updateGame
}

export default gamesAPI;