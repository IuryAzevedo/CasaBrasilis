import { Request, Response } from "express";
import { PurchaseTransactionService } from "../../services/Transactions/PurchaseTransactionService";


class PurchaseTransactionController {
  async handle(req: Request, res: Response) {
    try {
      const { userId, propertyId, amount, transactionDate } = req.body; // Certifique-se de que esses dados estejam disponíveis no corpo da requisição

      const purchaseTransactionService = new PurchaseTransactionService();
      const purchaseTransaction = await purchaseTransactionService.execute({
        userId,
        propertyId,
        amount,
        transactionDate,
      });

      res.status(201).json(purchaseTransaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export { PurchaseTransactionController };
