import { Router } from "express";

// import fragranceController from "./controllers/fragranceController.js";
import userController from "./controllers/userController.js";
import gamesController from "./controllers/gamesController.js";
const routes = Router();

routes.use('/api/games', gamesController)
routes.use('/api/users', userController);

export default routes; 