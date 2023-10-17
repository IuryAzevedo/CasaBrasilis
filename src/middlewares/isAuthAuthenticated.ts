import {Request, Response, NextFunction, response } from 'express'
import { verify } from 'jsonwebtoken'


export function isAuthAtheticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const authToken = req.headers.authorization
        const token = authToken.split(" ")[1]
        if (!authToken) return res.status(400).end()
        const userData = verify(token, process.env.JWT_SECRET)
        req.body = userData
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro ao verificar token" })
    }
}