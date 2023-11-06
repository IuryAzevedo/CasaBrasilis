import { Request, Response } from "express";
import { RentalTransactionService } from "../../services/Transactions/RentalTransactionService";

class RentalTransactionController {
    async handle(req: Request, res: Response) {
        try {
            const { userId, propertyId, transactionDate, amount, duration } = req.body;
            const rentalTransactionService = new RentalTransactionService();
            const rentalTransaction = await rentalTransactionService.execute(
                userId,
                propertyId,
                transactionDate,
                amount,
                duration
            );

            res.status(201).json(rentalTransaction);
            
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export {RentalTransactionController}