import prismaClient from "../../prisma";

class RentalTransactionService {
    async execute(userId, propertyId, transactionDate, amount, duration) {
        try {
            const transaction = await prismaClient.transaction.create({
                data: {
                    user: { connect: { id: userId } },
                    property: { connect: { id: propertyId } },
                    transactionType: 'rent',
                    transactionDate: new Date(transactionDate),
                    amount: amount,
                    duration: duration  
                }
            });
            return transaction;
        } catch (error) {
            console.error("Erro ao criar transação de aluguel:", error);
            throw new Error("Não foi possível criar a transação de aluguel.");
        }
    }
}

export { RentalTransactionService };
