import 'dotenv/config'

import Fastify from 'fastify'
import { employeeRoutes } from './routes/employee.routes.js'
import { authRoutes } from './routes/auth.routes.js'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

const app = Fastify()

const allowedOrigins = [
  'https://cadastro-funcionarios-fullstack.vercel.app/',
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean) as string[]

await app.register(cors, {
  origin: allowedOrigins, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
})

await app.register(jwt,{
    secret:process.env.JWT_SECRET as string
})

await app.register(authRoutes)
await app.register(employeeRoutes)

app.listen({
    port:Number(process.env.PORT) || 3333,
    host: '0.0.0.0'
})
.then(()=>{
    console.log('server running on port 3333')
})
.catch((err)=>{
    console.error(err)
    process.exit(1)
})
