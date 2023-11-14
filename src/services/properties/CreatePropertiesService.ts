import prismaClient from "../../prisma";
class CreatePropertiesService {
    async execute({
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
    }) {
      if (identifier.trim() === "") {
        throw new Error("Você não cadastrou nenhuma propriedade");
      }
  
      const property = await prismaClient.property.create({
        data: {
          city,
          state,
          street,
          neighborhood,
          zipcode,
          type,
          identifier,
          bathrooms: Number(bathrooms),
          bedrooms: Number(bedrooms),
          size: Number(size),
          parking: Number(parking),
          buy_price: Number(buy_price),
          interest_rate: Number(interest_rate),
          finance_options: Number(finance_options),
          rental_price: Number(rental_price),
          images: {
            create: imagePaths.map((imagePath) => ({ imagePath })),
          },
        },
        // Omita cláusula select neste exemplo, mas você pode ajustar conforme necessário
      });
  
      return property;
    }
  }


export { CreatePropertiesService}