import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  /* template: ``, */
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage : string;
  @Input() childName : string ;
  @Output() outputToParent = new EventEmitter<string>();
  public empName: string = "Rama";

  public childOutputMsg : string = "From child component using @Output";
  @Output() messageEvent = new EventEmitter<string>();

  /* @Output() messageOutputWithoutEmit : string = "sharing data from Child to parent component"; */
  constructor() { }

  sendMessage(){
    this.messageEvent.emit(this.childOutputMsg);
  }

  NotificationToParent(selected : string){
    this.outputToParent.emit(selected);
  }

  ngOnInit() {
  }

}
