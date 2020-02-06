import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  /* styleUrls: ['./employee-list.component.css'] */
  styles: [`
    .employeesList{
      border: 2px dotted blue;
      margin: 20px;
      padding : 10px;
    }
  `]
})
export class EmployeeListComponent implements OnInit {
  public employees= [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
