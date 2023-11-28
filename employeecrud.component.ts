import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employeecrud',
  standalone: true,
  imports: [CommonModule,DatePipe,FormsModule],
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.css'
})
export class EmployeecrudComponent {
  employees: Emp[] = [];
  selectedEmployee: Emp | undefined;
  newEmployee: Emp = { Eid: 0, Ename: '', JoinDate: new Date(), Designation: '', Salary: 0 };
  searchEmployeeName: any;
  isAvailable: boolean = false;
  errMsg: string = '';

  constructor(
    private employeeService: EmpService,
   
  ) {}

  loadEmployees(): void {
    this.employees = this.employeeService.getAllEmployees();
  }

  selectEmployee(employee: Emp): void {
    this.selectedEmployee = { ...employee };
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.loadEmployees();
    this.newEmployee = { Eid: 0, Ename: '', JoinDate: new Date(), Designation: '', Salary: 0 };
  }

  search(): void {
    console.log(this.searchEmployeeName);
    const employee = this.employeeService
      .getAllEmployees()
      .find((emp) => emp.Ename?.toLowerCase() === this.searchEmployeeName.toLowerCase());

    if (employee) {
      this.employees = [employee];
      this.isAvailable = true;
      this.errMsg = '';
    } else {
      this.loadEmployees();
      this.isAvailable = false;
      this.errMsg = 'Employee not found';
    }
  }


}
