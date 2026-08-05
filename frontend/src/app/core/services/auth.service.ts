import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Token } from "@angular/compiler";
import { TokenService } from "./token.service";
import { environment } from "../../../environments/environment";
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

  private readonly apiUrl = `${environment.apiUrl}/login`

  constructor(
    private http: HttpClient,
    private tokenService: TokenService)
    {}

  login(data: LoginRequest): Observable<LoginResponse>{
    
    return this.http.post<LoginResponse>(this.apiUrl,data) 
  }

  
}