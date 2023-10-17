import { Response, Request } from "express";
import { LoginUserService } from "../../services/users/LoginUserService";

class LoginUserController {
    async handle(req: Request, res: Response){
        const {email, password} = req.body
        const loginUserService = new LoginUserService()
        const login = await loginUserService.execute({
            email, 
            password
        })
        return res.status(200).json(login)
    }
}


export {LoginUserController}