import { Component, Input } from '@angular/core';

@Component({
  selector : 'app-employee',
  templateUrl : './employee.component.html',
  styles: [`
    .childEmp{
      background-color: green;
      padding: 20px;
      color: white;
    }
  `]
})
export class EmployeeComponent{
    employeeName : string = "Rama";
    companyName : string = "Intellect PVT LTD";
    experience : string = "1 year";
    age : number = 23;

    childEmpName: string = "Latha";
    @Input() companyNumber: number;
    @Input() emps: any;
}
