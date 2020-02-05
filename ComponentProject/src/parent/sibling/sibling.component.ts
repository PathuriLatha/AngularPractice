import { Component, OnInit, ViewChild } from '@angular/core';
import { Sibling2Component } from '../sibling2/sibling2.component';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  /* styleUrls: ['./sibling.component.css'] */
  styles: [`
    .sibling{
      background-color: pink;
      padding: 20px;
    }
  `]
})
export class SiblingComponent implements OnInit {
  viewChildParentMessage: string = "data from child to parent via ViewChild";
  /* @ViewChild(Sibling2Component, {static: true}) sibling2Child; */

  @ViewChild(Sibling2Component, {static: true}) example : Sibling2Component;
  viewParentMsg: string;

  parentToChild: string = 'This is coming from Parent Component';

  text: string;
  receiveMessage(data) {
    this.text = data;
  }
  constructor() { }

  ngOnInit() {
  }

  /* ngAfterViewInit() {
    this.viewParentMsg = this.sibling2Child.viewChildMsg;
  } */

  viewChildClick(){
    console.log(this.example.testing);
    this.example.testing = "ViewChild is working without implements AfterViewInit";
  }
}
