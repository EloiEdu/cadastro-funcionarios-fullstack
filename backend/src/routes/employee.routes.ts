import { EmployeeController } from '../controllers.ts/employee.controller.js';
import {FastifyInstance} from 'fastify'
import { CreateEmployee } from '../interfaces/employee.interface.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { authorize } from '../middleware/authorize.middleware.js';

export async function employeeRoutes(app: FastifyInstance){

    app.addHook('preHandler',authMiddleware)
    
    const employeeController = new EmployeeController()

    app.get('/employees', async(request,reply)=>{
        
        return employeeController.index()
    
    })

    app.get('/employees/:id',async(request,reply)=>{
        
        const {id} = request.params as {id:string}

        return employeeController.show(Number(id)) 
    })

    app.post('/employees',async (request,reply)=>{
        
        const employee = request.body as CreateEmployee
        const createdEmployee = await employeeController.store(employee)

        return reply.status(201).send(createdEmployee)
    })

    app.put('/employees/:id',async(request,reply)=>{
        
        const {id} = request.params as {id:string}
        const employee = request.body as CreateEmployee

        const updatedEmployee = await employeeController.update(Number(id),employee)

        return reply.send(updatedEmployee)
    })

    app.delete('/employees/:id',{
        preHandler:[
            authorize(['ADMIN'])
        ]
    },async(request,reply)=>{
        
        const {id} = request.params as {id:string}
        
        await employeeController.destroy(Number(id))

        return reply.status(204).send()
    })

}