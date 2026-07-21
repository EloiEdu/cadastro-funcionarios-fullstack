export interface User {
    id: number
    name: string
    email: string
    password: string
    created_at: Date
}

export interface CreateUser {
    name: string
    email: string
    password: string
}

export interface LoginUser {
    email: string
    password: string
}