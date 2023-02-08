import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();
  employeeUpdateForm!: FormGroup;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeUpdateForm = this.formBuilder.group({
      firstName:[null],
      lastName:[null],
      email:[null],
      phone:[null]
    });

    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: data => {
        this.employee = data;
        console.log(data);
        
        },
        error: error =>{
          console.log(error)
        },
        complete: () => {
          console.log('request complete');
          
        }
    });
  }

  onSubmit(){
    this.employeeService.updateEmployeeById(this.id, this.employeeUpdateForm.value).subscribe(data =>{
      this.router.navigate(['/allEmployee'])
    }) 

  
  }

}
