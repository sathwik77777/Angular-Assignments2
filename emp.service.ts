import { Injectable } from '@angular/core';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  employees: Emp[] = [];

  constructor() {
    this.employees = [
      { Eid: 1, Ename: 'Sai', JoinDate: new Date('2022-01-09'), Designation: 'Manager', Salary: 50000 },
      { Eid: 2, Ename: 'Sathwik', JoinDate: new Date('2022-02-06'), Designation: 'Developer', Salary: 40000 },
      { Eid: 3, Ename: 'Kiran', JoinDate: new Date('2022-07-20'), Designation: 'Designer', Salary: 45000 },
      
    ];
  }

  getAllEmployees(): Emp[] {
    return this.employees;
  }

  getEmployeeById(id: number): Emp | any {
    return this.employees.find(employee => employee.Eid === id);
  }

  addEmployee(employee: Emp): void {
    this.employees.push(employee);
  }

  
}
