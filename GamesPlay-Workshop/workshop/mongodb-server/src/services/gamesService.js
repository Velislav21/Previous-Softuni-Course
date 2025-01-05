import Game from "../models/Game.js";

const gamesService = {

    getAll(filter = {}) {
        const query = Game.find();

        if (filter.name) {
            query.find({ name: { $regex: filter.name, $options: 'i' } })
        }
        return query
    },
    getOne(gameId) {
        return Game.findById(gameId);
    },
    create(gameData) {
        return Game.create({ ...gameData });
    },
    // create(gameData, ownerId) {
    //     return Game.create({ ...gameData, owner: ownerId });
    // },

    remove(gameId) {
        return Game.findByIdAndDelete(gameId);
    },
    update(gameId, gameData) {
        return Game.findByIdAndUpdate(gameId, gameData, { runValidators: true });
    },
    like(gameId, userId) {
        return Game.findByIdAndUpdate(gameId, { $push: { likedList: userId } })
    }
}

export default gamesService;