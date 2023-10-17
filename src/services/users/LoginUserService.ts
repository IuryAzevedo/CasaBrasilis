import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface LoginRequest {
    email: string
    password: string
}
class LoginUserService {
    async execute({email, password}: LoginRequest){
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('Usuário ou senha incorretos')
        }


        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error('senha incorreta, tente novamente')
        }
        const token = sign({
            nome: user.nome,
            email: user.email
        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            token: token
        }

    }
}

export {LoginUserService}