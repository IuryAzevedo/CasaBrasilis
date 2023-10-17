import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { LoginUserController } from "./controllers/users/LoginUserController";
import { isAuthAtheticated } from "./middlewares/isAuthAuthenticated";
import { DetailUserController } from "./controllers/users/DetailUserController";


const router = Router();



//----- ROTAS USER ------
router.post('/users', new CreateUserController().handle);
router.post('/session', new LoginUserController().handle);
router.get('/userinfo', isAuthAtheticated, new DetailUserController().handle)

// ---- ROTAS PROPERTIES ----



export {router}