import {Request, Response} from 'express'
import { DetailUserServices } from '../../services/users/DetailUserService'

class DetailUserController{
    async handle(req: Request, res: Response) {
      const user_id = req.body.sub
      
      const detailUserServices = new DetailUserServices()

      const user = await detailUserServices.execute(user_id)

      return res.status(200).json(user)
    }
}

export { DetailUserController }