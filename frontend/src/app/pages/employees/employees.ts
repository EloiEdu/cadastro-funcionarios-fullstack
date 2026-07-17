import { EmployeeService } from '../../core/services/employee.service';
import { Employee } from '../../shared/interfaces/employee.interface';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class EmployeesComponent implements OnInit{
  
  employees: Employee[] =[]
  
  constructor(private employeeService: EmployeeService){}
  
  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next:(employees)=>{
        console.log(employees)
        this.employees = employees
      }, 
      error:(err)=>{
        console.error('erro ao carregar funcionários',err)
      }
    })
}
 
  ngOnInit(): void{
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
