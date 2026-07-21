import { pool } from "../database/connection.js"
import { CreateEmployee } from "../interfaces/employee.interface.js"

export class EmployeeRepository {

    async findAll(){
        const result = await pool.query('SELECT * FROM employees')
        return result.rows
    }

    async findById(id: number) {

        const result = await pool.query(
            'SELECT * FROM employees WHERE id = $1',
            [id]
        )

        return result.rows[0]

    }

    async create(employee: CreateEmployee){

        const result = await pool.query(
            'INSERT INTO employees (name,email,role,salary) values ($1,$2,$3,$4) RETURNING *',
            [employee.name,employee.email,employee.role,employee.salary] 

        )
        return result.rows[0]
    }

    async update(id:number,employee: CreateEmployee){

        const result = await pool.query(
            'UPDATE employees SET name = $1,email = $2, role = $3, salary = $4 where id = $5 returning * ',
            [employee.name,employee.email,employee.role,employee.salary,id]
        )
        return result.rows[0]
    }

    async delete(id:number){
        const result = await pool.query(
            'DELETE FROM employees WHERE id = $1',
            [id]
        )
    }

}