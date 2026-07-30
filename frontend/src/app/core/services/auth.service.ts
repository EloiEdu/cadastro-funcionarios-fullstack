import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Token } from "@angular/compiler";

export interface LoginRequest{
  email: string
  password: string
}

export interface LoginResponse{
  token:string
}

@Injectable({
  providedIn:'root'
})

export class AuthService{

  private readonly apiUrl = 'http://localhost:3333/login'

  constructor(
    private http: HttpClient)
    {}

  login(data: LoginRequest): Observable<LoginResponse>{
    
    return this.http.post<LoginResponse>(this.apiUrl,data) 
  }

  saveToken(token: string): void{
    localStorage.setItem('token',token)
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }

  isAuthenticated(): boolean{
    return !!this.getToken()
  }

  logout(): void{
    localStorage.removeItem('token')
  }
}