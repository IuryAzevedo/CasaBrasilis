import { Router, Request, Response } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { LoginUserController } from "./controllers/users/LoginUserController";
import { isAuthAtheticated } from "./middlewares/isAuthAuthenticated";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { CreatePropertiesController } from "./controllers/properties/CreatePropertiesController";
import uploadConfig from './config/multer'
import { transporter } from "./services/nodemailer/Transport";
import { sendEmailWelcome } from "./controllers/nodemailer/nodemailerController";
import { PurchaseTransactionController } from "./controllers/Transactions/PurchaseTransactionController";


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))


//----- ROTAS USER ------
router.post('/users', new CreateUserController().handle);
router.post('/session', new LoginUserController().handle);
router.get('/userinfo', isAuthAtheticated, new DetailUserController().handle)


// ---- ROTAS PROPERTIES ----
router.post('/addproperty', upload.array('file', 4), new CreatePropertiesController().handle)

// ---- ROTAS DE EMAILS ----
router.post('/send-welcome-email', async (req, res) => {
    try {
      await sendEmailWelcome(req, res);
    } catch (err) {
      console.error('Erro ao enviar email de boas vindas:', err);
      res.status(500).json({ error: 'Erro interno de servidor' });
    }
  });
  
// ---- ROTAS TRASAÇÕES ----
router.post('/purchasetransaction', isAuthAtheticated, new PurchaseTransactionController().handle);


export {router}