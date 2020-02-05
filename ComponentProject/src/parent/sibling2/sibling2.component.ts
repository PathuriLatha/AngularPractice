import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  /* styleUrls: ['./sibling2.component.css'] */
  styles: [`
    .sibling2{
      background-color: salmon;
      padding: 20px;
    }
  `]
})
export class Sibling2Component implements OnInit {

  viewChildMsg: string = "Sharing data from child to parent using ViewChild with AfterViewInit";
  testing: string = "Example for ViewChild";

  childToParent: string = "This is coming from Child component";

  @Output() msgEvent = new EventEmitter<string>();

  @Input() parentToChildFromChild: string;

  ChildToParent(){
    console.log(this.childToParent);
    this.msgEvent.emit(this.childToParent);
  }
  constructor() { }

  ngOnInit() {
  }

}
