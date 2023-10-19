import { Request, Response } from "express";
import { CreatePropertiesService } from "../../services/properties/CreatePropertiesService";

class CreatePropertiesController {
    async handle(req: Request, res: Response){
        const createPropertiesService = new CreatePropertiesService()
        const property = await createPropertiesService.execute({
            
        })
    }
}

export {CreatePropertiesController}