import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  /* template: ``, */
  /* styleUrls: ['./parent.component.css'] */
  styles: [`
    table{
      color: red;
    }
  `]
})
export class ParentComponent implements OnInit {
  public parentMessage : string = "Message from Parent";
  public parentTextMessage : string = "";

  public companyName: string = "ABC Company";
  @ViewChild(ChildComponent, {static: true}) emp: ChildComponent;

  public parentOutputMsg : string = "";
  receiveMessage(data){
    this.parentOutputMsg = data;
  }

  onClickMeClicked(){
    console.log(this.emp);
    this.emp.empName = "Latha";
  }

  Name : string;
  employees = ["Latha", "Subhankari", "Akhilesh", "Gufran" ];
  childCurrentVal: string;

  setName(empp: string){
    this.Name = empp;
  }

  GetOutputVal(selected: string){
    if(selected){
      this.childCurrentVal = "value received from child :: "+selected;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
