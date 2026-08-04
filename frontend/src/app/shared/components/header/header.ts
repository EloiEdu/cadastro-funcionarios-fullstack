import { AuthService } from '../../../core/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../core/services/token.service';
@Component({
  selector: 'app-header',
  standalone : true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

    constructor(
      private tokenService: TokenService,
      private router: Router
    ){}

    logout(): void{
      this.tokenService.removeToken()
      this.router.navigate(['/login'])
    }
}
