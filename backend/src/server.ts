import Fastify from 'fastify'
import { employeeRoutes } from './routes/employee.routes.js'

const app = Fastify()

app.register(employeeRoutes)

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
