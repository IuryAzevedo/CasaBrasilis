import prismaClient from "../../prisma";

class PurchaseTransactionService {
  async execute({
    userId, 
    propertyId, 
    amount, 
    transactionDate,
    duration 
  }) {
    try {
      
      const purchaseTransaction = await prismaClient.transaction.create({
        data: {
          user: {
            connect: { id: userId },
          },
          property: {
            connect: { id: propertyId },
          },
          transactionType: "purchase", 
          amount,
          transactionDate,
          duration
        },
      });

      return purchaseTransaction;


    } catch (error) {
      throw new Error("Erro ao criar a transação de compra: " + error.message);
    }
  }
}

export { PurchaseTransactionService };
