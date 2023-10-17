import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'


interface UserRequest {
    nome: string
    email: string
    password: string
}

class CreateUserService {
    async execute({nome, email, password}: UserRequest){
        if (!email) {
            throw new Error("email incorreto, tente novamente!")

        }
        const userExistent = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userExistent) {
            throw new Error('Esse email já existe, tente outro!')
        }
        const passwordHash = await hash(password, 8)
        const user = await prismaClient.user.create({
            data:{
                nome: nome,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                nome: true,
                email: true,

            }
        })

        return user
    }
}

export {CreateUserService }