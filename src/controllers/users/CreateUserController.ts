import { Request, Response, response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";
import { sendEmailWelcome } from "../nodemailer/nodemailerController";

class CreateUserController {

    async handle(req: Request, res: Response) {

        const { nome, email, password } = req.body
        const createUserService = new CreateUserService()

        try{
            const user = await createUserService.execute({
                nome,
                email,
                password
            })
            // await sendEmailWelcome(req, res);
            
            return res.json(user)
        } catch(err){
            console.log(err);
            return res.status(500).json({ err: 'Erro ao criar usuário' });
        }
    }
}


export {CreateUserController}