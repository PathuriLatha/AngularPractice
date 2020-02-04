import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  public displayName : boolean = true;
  public name : string = "ngIf Directive";
  public color : string = "blue";
  public colors: string[] = ["Green", "Red", "Blue", "pink"];

  people: any[] = [
    {
      "name": "Latha",
      "age": 23,
      "country" : "India"
    },
    {
      "name": "Srivani",
      "age": 27,
      "country" : "USA"
    },
    {
      "name": "Bhargavi Jillela",
      "age": 28,
      "country" : "UK"
    },
    {
      "name": "Shirisha Muthyala",
      "age": 30,
      "country" : "Dubai"
    },
    {
      "name": "Lasya",
      "age": 11,
      "country" : "Australia"
    }
  ];

  students: any[] = [
    {
      name: "Latha",
      school: "ZPHS"
    },
    {
      name: "Rama",
      school: "Vignan"
    },
    {
      name: "Lasya",
      school: "DR.KVR"
    },
    {
      name: "Loukhya",
      school: "Chaithanya Bharathi"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
