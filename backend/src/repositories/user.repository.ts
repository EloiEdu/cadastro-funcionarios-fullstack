import { pool } from "../database/connection.js"
import { User } from "../interfaces/users.interface.js"

export class UserRepository {

    async findByEmail(email: string):Promise<User | null>{
        const result = await pool.query(
             `
            SELECT *
            FROM users
            WHERE email = $1
            `,
            [email]
        )
        return result.rows[0] ?? null
    }
}