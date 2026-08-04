import 'dotenv/config'

import Fastify from 'fastify'
import { employeeRoutes } from './routes/employee.routes.js'
import { authRoutes } from './routes/auth.routes.js'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

const app = Fastify()

await app.register(cors,{
    origin: 'http://localhost:4200',
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type', 'Authorization']
})

await app.register(jwt,{
    secret:'chave-secreta'
})

await app.register(authRoutes)
await app.register(employeeRoutes)

app.listen({
    port:3333,
    host: '0.0.0.0'
})
.then(()=>{
    console.log('server running on port 3333')
})
.catch((err)=>{
    console.error(err)
    process.exit(1)
})
