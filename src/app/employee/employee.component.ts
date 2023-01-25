import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  @Input() employee!: Employee;


  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    // this.employee$ = this.employeeService.getAllData();
  }

}
