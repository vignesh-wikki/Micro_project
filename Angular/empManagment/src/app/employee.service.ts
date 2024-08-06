import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string;
  employeearr: Employee[];
  employee: Employee;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3004/employees';
    this.employee = new Employee();
    this.employeearr = [];
  }

  insertEmployee(employee: Employee) {
    this.http.post<Employee>(this.url, employee).subscribe();
    return 'Employee Details added';
  }

  updateEmployee(employee: Employee) {
    this.http.put<Employee>(this.url + '/' + employee.id, employee).subscribe();
    return 'Employee updated added';
  }

  deleteEmployee(id: number) {
    this.http.delete<Employee>(this.url + '/' + id).subscribe();
    return 'Employee deleted added';
  }

  findEmployee(id: number) {
    this.http
      .get<Employee>(this.url + '/' + id)
      .subscribe((data) => (this.employee = data));

    return this.employee;
  }
  findallEmployee() {
    this.http
      .get<Employee[]>(this.url)
      .subscribe((data) => (this.employeearr = data));
    return this.employeearr;
  }
}
