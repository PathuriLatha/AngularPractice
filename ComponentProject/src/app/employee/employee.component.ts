import { Component } from '@angular/core';

@Component({
  selector : 'app-employee',
  templateUrl : './employee.component.html'
})
export class EmployeeComponent{
    employeeName : string = "Rama";
    companyName : string = "Intellect PVT LTD";
    experience : string = "1 year";
    age : number = 23;
}
