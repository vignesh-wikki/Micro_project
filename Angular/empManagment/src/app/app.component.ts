import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  result: string;
  flag: boolean;
  single: boolean;
  employee: Employee;
  employeearr: Employee[];

  constructor(private service: EmployeeService) {
    this.employee = new Employee();
    this.result = '';
    this.employeearr = [];
    this.flag = false;
    this.single = false;
  }

  insertEmployee(data: any) {
    this.employee.id = data.id;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    console.log(this.employee);
    this.result = this.service.insertEmployee(this.employee);
  }
  updateEmployee(data: any) {
    this.employee.id = data.id;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    console.log(this.employee);
    this.result = this.service.updateEmployee(this.employee);
  }
  deleteEmployee(id: number) {
    this.result = this.service.deleteEmployee(id);
  }

  findEmployee(id: number) {
    this.employee = this.service.findEmployee(id);
    this.single = true;
  }

  findallEmployee() {
    this.employeearr = this.service.findallEmployee();
    this.flag = true;
  }
}
