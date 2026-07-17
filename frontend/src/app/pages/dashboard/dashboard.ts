import { Component } from '@angular/core';
import  {HeaderComponent} from '../../shared/components/header/header'
import { SidebarComponent } from '../../shared/components/sidebar/sidebar'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {}
