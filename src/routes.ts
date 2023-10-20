import { Router, Request, Response } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { LoginUserController } from "./controllers/users/LoginUserController";
import { isAuthAtheticated } from "./middlewares/isAuthAuthenticated";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { CreatePropertiesController } from "./controllers/properties/CreatePropertiesController";
import uploadConfig from './config/multer'


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))


//----- ROTAS USER ------
router.post('/users', new CreateUserController().handle);
router.post('/session', new LoginUserController().handle);
router.get('/userinfo', isAuthAtheticated, new DetailUserController().handle)

// ---- ROTAS PROPERTIES ----
router.post('/addproperty', upload.array('file', 4), new CreatePropertiesController().handle)


// ---- ROTAS TRASAÇÕES ----



export {router}