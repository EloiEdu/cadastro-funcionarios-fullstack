import Fastify from 'fastify'
import { employeeRoutes } from './routes/employee.routes.js'
import cors from '@fastify/cors'

const app = Fastify()

await app.register(cors,{
    origin: 'http://localhost:4200'
})

await app.register(employeeRoutes)

app.listen({
    port:3333
})
.then(()=>{
    console.log('server running on port 3333')
})
.catch((err)=>{
    console.error(err)
    process.exit(1)
})
