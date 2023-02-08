import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';




const routes: Routes = [
  { path: 'allEmployee', component: EmployeeListComponent },
  { path: 'create', component: NewEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
