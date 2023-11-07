import prismaClient from "../../prisma";

class ListPropertiesService {
    async execute(userId) {
        const userTransactions = await prismaClient.transaction.findMany({
            where: {
                userId: userId
            }
        });

        const propertyIds = userTransactions.map(transaction => transaction.propertyId);

        const userProperties = await prismaClient.property.findMany({
            where: {
                id: {
                    in: propertyIds
                }
            }
        });

        return userProperties;
    }
}

export { ListPropertiesService };
