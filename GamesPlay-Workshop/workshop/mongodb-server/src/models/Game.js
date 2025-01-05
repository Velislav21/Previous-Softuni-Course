import { model, Schema, Types } from 'mongoose';

const gamesSchema = new Schema({
    title: {
        type: String,
        // required: true,
        // minLength: 2,
    },

    imageUrl: {
        type: String,
        // required: true,
        // validate: /^https?:\/\//
    },
    category: {
        type: String,
        // required: true,
        // minLength: 10,
        // maxLength: 100,
    },
    levels: {
        type: Number,
    },
    summary : {
        type: String,
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
})

const Game = model('Game', gamesSchema)

export default Game