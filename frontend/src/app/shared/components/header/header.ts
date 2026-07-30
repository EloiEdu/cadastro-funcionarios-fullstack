import { AuthService } from '../../../core/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone : true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

    constructor(
      private authService: AuthService,
      private router: Router
    ){}

    logout(): void{
      this.authService.logout()
      this.router.navigate(['/login'])
    }
}
