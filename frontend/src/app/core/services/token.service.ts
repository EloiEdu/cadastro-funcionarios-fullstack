import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

        private readonly TOKEN_KEY = 'token'

    saveToken(token: string): void{
        localStorage.setItem(this.TOKEN_KEY,token)
    }

    getToken(): string | null{
        return localStorage.getItem(this.TOKEN_KEY)
    }

    getPayLoad(): any{
        const token = this.getToken()

        if(!token){
            return null
        }

        const payload = token.split('.')[1]

        return JSON.parse(atob(payload))
    }

    getRole(): string | null {
        const payload = this.getPayLoad()
        
        return payload?.role ?? null
    }

    getUserId(): number | null {
        const payload = this.getPayLoad()

        return payload?.id ?? null
    }

    getEmail(): string | null {
        const payload = this.getPayLoad()

        return payload?.email ?? null
    }

    isAdmin(): boolean{

        return this.getRole() === 'ADMIN'
    }

    isAuthenticated(): boolean {

        return this.getToken() !== null
    }

    removeToken(): void{
        localStorage.removeItem(this.TOKEN_KEY)
    }
}