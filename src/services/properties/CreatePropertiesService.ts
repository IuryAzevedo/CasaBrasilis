import prismaClient from "../../prisma";

interface PropertiesRequest {
    imagePaths: string,
    city: string
    state: string
    street: string
    neighborhood: string // bairro
    zipcode:    string
    type:       string //casa ou apto
    identifier: string // identificar exclusivamente o imovel (ex: numero da casa, andar do apartamento)
    bathrooms:   number
    bedrooms:    number
    size:       number
    parking:    number
    buy_price:  number
    interest_rate: number // taxa de juros 
    finance_options: number // opcoes de financeamento
    rental_price: number // preco de alugue
}


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
        rental_price }){

            if(identifier === " "){
                throw new Error('Você não cadastrou nenhuma propiedade')
            }
            // let banner = " "

            const addProperties = await prismaClient.property.create({
                data: {
                    imagePaths,
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
                    rental_price: Number(rental_price)
                    
                },

                select: {
                    id: true,
                    imagePaths: true,
                    city: true,
                    state: true,
                    street: true,
                    neighborhood: true,
                    zipcode: true,
                    type: true,
                    identifier: true,
                    bathrooms: true,
                    bedrooms: true,
                    size: true,
                    parking: true,
                    buy_price: true,
                    interest_rate: true,
                    finance_options: true,
                    rental_price: true
                }
            })

            return addProperties;
    }
}



export { CreatePropertiesService}