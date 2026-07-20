import { EmployeeService } from '../../core/services/employee.service';
import { Employee } from '../../shared/interfaces/employee.interface';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core'
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class EmployeesComponent implements OnInit{
  
  employees: Employee[] =[]
  
  constructor(private employeeService: EmployeeService, private cdr: ChangeDetectorRef){}
  
  loadEmployees(): void {
    console.log('loadEmployees chamado')

    this.employeeService.getEmployees().subscribe({
      next:(employees)=>{
        this.employees = employees
        this.cdr.detectChanges()
        console.log(this.employees)
        //console.log('mesmo array?', this.employees)
        //console.log('length:',this.employees.length)

        setTimeout(()=>{
          console.log('depois de 2 segundos:', this.employees.length)
        },2000)
      }, 
      error:(err)=>{
        console.error('erro ao carregar funcionários',err)
      }
    })
}
 
  ngOnInit(): void{
    console.log('EmployeesComponent iniciado')
    this.loadEmployees()
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe({next: ()=>{
      this.loadEmployees()
    },error: err =>{
      console.error(err)
    }
    })
  }
  
}
