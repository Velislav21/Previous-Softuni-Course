import { Router } from "express";
import getError from "../utils/error.js";
import gamesService from "../services/gamesService.js";
const gamesController = Router();

gamesController.get('/', async (req, res) => {

    const games = await gamesService.getAll().lean();

    res.status(200).json(games);
});

gamesController.get('/:gameId/details', async (req, res) => {

    const gameId = req.params.gameId

    const game = await gamesService.getOne(gameId).lean();

    res.status(200).json(game);
})

gamesController.post('/create', async (req, res) => {
    const ownerId = req.user._id;
    const gameData = req.body;

    console.log(ownerId)
    try {
        const game = await gamesService.create(gameData, ownerId)
        res.status(200).json(game)
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

gamesController.put('/:gameId/edit', async (req, res) => {

    const gameId = req.params.gameId
    const gameData = req.body;

    try {
        const game = await gamesService.update(gameId, gameData)
        res.status(200).json(game)

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})
export default gamesController