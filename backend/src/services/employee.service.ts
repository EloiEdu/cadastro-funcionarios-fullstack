import { create } from 'node:domain';
import { EmployeeRepository } from "../repositories/employee.repository.js"
import { CreateEmployee } from '../interfaces/employee.interface.js';

export class EmployeeService {
    private employeeRepository = new EmployeeRepository()
    
    async getAll() {
        return this.employeeRepository.findAll()
    }

    async getById(id: number) {

        return this.employeeRepository.findById(id)

    }

    async create(employee:CreateEmployee){
        return this.employeeRepository.create(employee)
    }

    async update(id:number, employee: CreateEmployee){
        return this.employeeRepository.update(id,employee)

    }

    async delete(id:number){
        return this.employeeRepository.delete(id)
    }

}