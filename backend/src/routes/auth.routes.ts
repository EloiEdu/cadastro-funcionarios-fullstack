
import { FastifyInstance } from "fastify";
import { AuthController } from "../controllers.ts/auth.controller.js";

export async function authRoutes(app:FastifyInstance) {
    
    const authController = new AuthController(app)

    app.post('/login', async(request,reply)=>{
        return authController.login(request,reply)
    })
}