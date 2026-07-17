import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeFormComponent implements OnInit {
  
  employeeForm : FormGroup
  editingEmployeeId: number | null = null

  constructor(
    private fb: FormBuilder, 
    private employeeService: EmployeeService, 
    private router: Router, 
    private route: ActivatedRoute
  ){
    this.employeeForm = this.fb.group({

        name:['',[Validators.required,Validators.minLength(3)]],
        email:['',[Validators.required,Validators.email]],
        role:['',[Validators.required]],
        salary:['',[Validators.required]]

    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {

    const employeeId = Number(id);

    this.employeeService
      .getEmployeeById(employeeId)
      .subscribe(employee => {

        this.employeeForm.patchValue({

          name: employee.name,
          email: employee.email,
          role: employee.role,
          salary: employee.salary

        });

        this.editingEmployeeId = employeeId;

      });

    }
    
  }
  submit(){
    
    if(this.employeeForm.invalid){
      this.employeeForm.markAllAsTouched()

      return
    }

    const employee = this.employeeForm.value

    if (this.editingEmployeeId !== null){
      this.employeeService.updateEmployee(this.editingEmployeeId,employee).subscribe(()=>{
        this.router.navigate(['/employees'])

      })
    } else {
      this.employeeService.addEmployee(employee).subscribe(()=>{
        this.router.navigate(['/employees'])
      })
    }

  }
}
