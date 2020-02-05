import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  /* styleUrls: ['./company.component.css'] */
  styles: [`
    .parentCmp{
      background-color: aqua;
      padding : 20px;
    }
  `]
})
export class CompanyComponent implements OnInit {
  parentCmpName: string = "SemanticBits";

  companyNumber: number = 9876543210;
  empObj = [
    {
      id: 1002,
      name: 'Latha'
    },
    {
      id: 1004,
      name: 'Rama'
    },
    {
      id: 1006,
      name: 'Bhargavi'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
