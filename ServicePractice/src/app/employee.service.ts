import { Injectable } from '@angular/core';

/* @Injectable({
  providedIn: 'root'
}) */
@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1001, "name": "Latha", "age": 23},
      {"id": 1003, "name": "Rama", "age": 24},
      {"id": 1005, "name": "Bhargavi", "age": 29},
      {"id": 1007, "name": "Srivani", "age": 28}
    ];
  }
}
