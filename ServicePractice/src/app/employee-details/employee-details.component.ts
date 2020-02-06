import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  /* styleUrls: ['./employee-details.component.css'] */
  styles: [`
    .employeesDetails{
      border: 2px dotted salmon;
      margin: 20px;
      padding : 10px;
    }
  `]
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
