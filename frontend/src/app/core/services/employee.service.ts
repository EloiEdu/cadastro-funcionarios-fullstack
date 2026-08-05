import { Injectable } from '@angular/core';
import { Employee } from '../../shared/interfaces/employee.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient){}
  private apiUrl = `${environment.apiUrl}/employees`

  getEmployees(){

    return this.http.get<Employee[]>(this.apiUrl)

  }

  addEmployee(employee: Omit<Employee,'id'>){

    return this.http.post<Employee>(
      this.apiUrl,employee
    )
    
  }

  getEmployeeById(id: number){
    return this.http.get<Employee>(
      `${this.apiUrl}/${id}`
    )
  }

  updateEmployee(id:number, employee: Omit<Employee,'id'>){
    return this.http.put<Employee>(
      `${this.apiUrl}/${id}`,employee
    )
    
  }

  deleteEmployee(id: number){

  return this.http.delete(`${this.apiUrl}/${id}`)

  }

}
