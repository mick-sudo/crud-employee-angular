import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  employeePreview$!: Observable<Employee>

  constructor(private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstName:[null],
      lastName:[null],
      email:[null],
      phone:[null]
    });

    this.employeePreview$ = this.employeeForm.valueChanges.pipe(map
      (formValue => ({
        ...formValue,
        id:0
      }))
    );
  }

  onSubmitForm(): void {
    console.log(this.employeeForm.value);
    this.employeeService.addNewEmployee(this.employeeForm.value).subscribe(()=> {
      this.router.navigate(['/allEmployee']);
    });
  }

}
