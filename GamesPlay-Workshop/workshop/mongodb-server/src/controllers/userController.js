import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_TOKEN_NAME } from "../constants.js";
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
        console.log(req.user)


    } catch (err) {
        const error = getError(err);
        res.status(401).json({ message: error })
    }

})

userController.get('/profile', async (req, res) => {
    
    const user = req.user;
    // const token = req.cookies[AUTH_COOKIE_NAME];
    const token = req.headers
    try {
        if (token) {
            user.accessToken = token;
        }
        res.status(200).json(user)

    } catch (err) {
        res.status(401).json({ "Data": "no user, invalid token" })
    }
})

userController.put('/profile', async (req, res) => {
    const id = req.params.id;

    const { name, email } = req.body;
    console.log(id, name, email)
    // try {
    //     await userService.updateProfile(id, name, email)
    //     console.log('worked')
    // } catch (err) {
    //     res.status(400).send({ "message": "something is wrong" })
    // }
})

userController.post('/logout', (req, res) => {
    try {
        res.clearCookie(AUTH_TOKEN_NAME).status(204).send({ message: 'Cookie cleared' })

    } catch (err) {
        console.log('error')
        console.log(err)
    }
})

export default userController