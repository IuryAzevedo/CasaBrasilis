import { Request, Response } from "express";
import { CreatePropertiesService } from "../../services/properties/CreatePropertiesService";

class CreatePropertiesController {
    async handle(req: Request, res: Response) {
      const createPropertiesService = new CreatePropertiesService();
  
      const {
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
        rental_price,
      } = req.body;
  
      try {
        if (!Array.isArray(req.files)) {
          throw new Error("Erro ao fazer upload de arquivos");
        } else {
          const imagePaths = (req.files as Express.Multer.File[]).map((file) => file.path);
  
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
            rental_price,
          });
  
          return res.status(201).json(property);
        }
      } catch (error) {
        if (Array.isArray(req.files)) {
          (req.files as Express.Multer.File[]).forEach((file) => {
            // Implemente a lógica de exclusão aqui
          });
        }
  
        return res.status(500).json({ error: "Erro ao criar propriedade" });
      }
    }
  }

export { CreatePropertiesController };
