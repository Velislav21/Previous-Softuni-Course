import { Router } from "express";
import userService from "../services/userService.js";
import getError from "../utils/error.js";
const userController = Router();

userController.post('/register', async (req, res) => {

    const { email, password, rePassword } = req.body;

    try {
        const response = await userService.register(email, password, rePassword);

        res.status(200).json(response)

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})
userController.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const response = await userService.login(email, password);
        res.status(200).json(response)


    } catch (err) {
        const error = getError(err);
        res.status(401).json({ message: error })
    }

})

userController.get('/profile', async (req, res) => {
    // !TODO: as of now, the get profile functionality doesn't really work as expected.
    const user = req.user;
    try {
        console.log(user)
        res.status(200).json(user)

    } catch (err) {
        res.status(401).send({ "Data": "no user, invalid token" })
    }
})

userController.put('/profile', async (req, res) => {
    const id = req.params.id;

    const { name, email } = req.body;
    console.log(id, name, email)
})

userController.post('/logout', (req, res) => {

    try {
        res.removeHeader('X-Authorization')
        res.status(204).end();
        return
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

export default userController