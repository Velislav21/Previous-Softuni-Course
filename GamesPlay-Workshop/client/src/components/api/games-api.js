import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/jsonstore/games'

const getAll = async () => {

    const result = await request.get(baseUrl)

    const games = Object.values(result);
    return games;
}

const getOne = async (gameId) => {
    return await request.get(`${baseUrl}/${gameId}`)
}

const gamesAPI = {
    getAll,
    getOne
}
export default gamesAPI;