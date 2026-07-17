import { CreateEmployee } from "../interfaces/employee.interface.js"
import { EmployeeService } from "../services/employee.service.js"

export class EmployeeController {

    private employeeService = new EmployeeService()

    async index() {
        return this.employeeService.getAll()
    }

    async show(id:number){
        return this.employeeService.getById(id)
    }

    async store(employee:CreateEmployee){
        return this.employeeService.create(employee)
    }

    async update(id:number,employee:CreateEmployee){
        return this.employeeService.update(id,employee)
    }

    async destroy(id:number){
        return this.employeeService.delete(id)
    }
}