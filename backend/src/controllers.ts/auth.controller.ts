import { LoginUser } from "../interfaces/users.interface.js"
import { AuthService } from "../services/auth.service.js"
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export class AuthController {

    private readonly authService: AuthService
    constructor(app: FastifyInstance){
        this.authService = new AuthService(app)
    }

    async login(request: FastifyRequest,reply: FastifyReply){

        try{
        const loginData = request.body as LoginUser
        const user = await this.authService.login(loginData)

        return reply.send(user)
        
        }catch (error){
            return reply.status(401).send({message:'usuario ou senha invalidos'})
        }
        
    }
}