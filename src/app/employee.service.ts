import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = `http://localhost:8080/api/v1/employee`

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  employee : Employee[] = [];

  getAllData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseURL}/allEmployee`)
 }

 addNewEmployee(formValue:{firstName: string, lastName: string, email: string, phone: string}){
    return this.http.post<Employee>(`${this.baseURL}`, formValue)
 }

 deleteEmployeeById(employeeId: number){
  return this.http.delete<void>(`${this.baseURL}/${employeeId}`)
 }

getEmployeeById(id: number): Observable<Employee>{
  return this.http.get<Employee>(`${this.baseURL}/${id}`);
}

 updateEmployeeById(id: number, employee: Employee): Observable<Object>{
  return this.http.put(`${this.baseURL}/${id}`, employee);
 }

}
