import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(){
    // this.employeeService.getAllData().subscribe(data => {
    //   console.log(data);
      
    // })
  }
}
