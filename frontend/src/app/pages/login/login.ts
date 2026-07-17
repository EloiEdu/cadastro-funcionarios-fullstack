import { AuthService } from '../../core/services/auth.service';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

// Inicializa o formulário
export class LoginComponent {

    loginForm : any
    isloading = false

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){

      // Campos e validações
      this.loginForm = this.fb.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(6)]],
      });
    }

       // Envia o formulário
      async submit(){

        // Impede envio com dados inválidos
        if(this.loginForm.invalid){
          this.loginForm.markAllAsTouched()
          return
        }
        this.isloading = true
        const { email, password} = this.loginForm.value
        const sucess = await this.authService.login(email,password)
        //console.log('login: ',this.loginForm.value)
        this.isloading = false

        if(sucess){
          console.log('login realizado')
          this.router.navigate(['/dashboard'])
        } else{
          console.log('email ou senha invalidos')
        }
    
      }
    
}

