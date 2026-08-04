import { FastifyReply,FastifyRequest } from "fastify";

export function authorize(roles: string[]){

    return async function (
        request:FastifyRequest,
        reply: FastifyReply){


        const userRole = request.user.role.toUpperCase()
        
        if(!roles.map(r=>r.toUpperCase()).includes(userRole)){
            return reply.status(403).send({
                message: 'Acesso negado'
            })
        }
    }
       
}