import { UserRepository } from "../repositories/user.repository.js";
import { LoginUser } from "../interfaces/users.interface.js";
import bcrypt from 'bcrypt'
import { FastifyInstance } from "fastify";


export class AuthService {

    private readonly userRepository = new UserRepository()

    constructor(
        private readonly app:FastifyInstance
    ){}

    async login(loginData : LoginUser){

        const user = await this.userRepository.findByEmail(loginData.email)

        if(!user){
            throw new Error('usuario nao encontrado')
        }

        const passwordMatch = await bcrypt.compare(loginData.password,user.password)

        if(!passwordMatch){
            throw new Error('senha incorreta')
        }

        const token = this.app.jwt.sign({
            id:user.id,
            email:user.email
        })
        return {token}
    }
}