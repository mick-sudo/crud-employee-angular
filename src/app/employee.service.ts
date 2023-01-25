import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = `http://localhost:8080/api/v1/employee`

  constructor(private http: HttpClient) { }
  employee : Employee[] = [];

  getAllData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseURL}/allEmployee`)
 }

}
