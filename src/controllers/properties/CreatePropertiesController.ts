import { Request, Response } from "express";
import { CreatePropertiesService } from "../../services/properties/CreatePropertiesService";

class CreatePropertiesController {
    async handle(req, res) {
       
        const createPropertiesService = new CreatePropertiesService();

        
        const {
            imagePaths, 
            city,
            state,
            street,
            neighborhood,
            zipcode,
            type,
            identifier,
            bathrooms,
            bedrooms,
            size,
            parking,
            buy_price,
            interest_rate,
            finance_options,
            rental_price
        } = req.body;

        
        if (!req.files) {
            throw new Error("Erro ao fazer upload de arquivos");
        } else {
          
            const imagePaths = req.files.map((file) => file.path);

            
            const property = await createPropertiesService.execute({
                imagePaths, 
                city,
                state,
                street,
                neighborhood,
                zipcode,
                type,
                identifier,
                bathrooms,
                bedrooms,
                size,
                parking,
                buy_price,
                interest_rate,
                finance_options,
                rental_price
            });

            
            return res.status(201).json(property);
        }
    }

    
}

export { CreatePropertiesController };
