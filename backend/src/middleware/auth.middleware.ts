import { FastifyReply,FastifyRequest } from "fastify";

export async function authMiddleware(request:FastifyRequest,reply:FastifyReply){

    if (request.method ==='OPTIONS'){
        return
    }
    try{
        await request.jwtVerify()

    }catch(error){
        return reply.status(401).send({
            message:'Nao autorizado'
        })
    }
}