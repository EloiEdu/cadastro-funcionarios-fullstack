import 'dotenv/config'

import Fastify from 'fastify'
import { employeeRoutes } from './routes/employee.routes.js'
import { authRoutes } from './routes/auth.routes.js'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

const app = Fastify()

const allowedOrigins = [
  'https://cadastro-funcionarios-fullstack.vercel.app/',
  'http://localhost:4200',
]

await app.register(cors, {
  origin: (origin, cb) => {
    if (!origin) {
      cb(null, true)
      return
    }

    const cleanOrigin = origin.replace(/\/$/, '')

    if (allowedOrigins.includes(cleanOrigin) || cleanOrigin.endsWith('.vercel.app')) {
      cb(null, true)
      return
    }

    cb(new Error("Bloqueado pelo CORS"), false)
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  strictPreflight: false
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
