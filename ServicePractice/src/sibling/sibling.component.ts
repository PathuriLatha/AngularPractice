import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/data.service';

@Component({
  selector: 'app-sibling',
  /* templateUrl: './sibling.component.html', */
  template: `
    <div class="sibling">
      <h4>Sibling Component</h4>
      <h5>{{message}}</h5>
      <button (click)="newMessage()">New Message</button>
    </div>
  `,
  /* styleUrls: ['./sibling.component.css'] */
  styles: [`
    .sibling{
      border: 2px solid aqua;
      margin : 20px;
      padding : 20px;
    }
  `]
})
export class SiblingComponent implements OnInit {

  message: string = "This is a sibling component for service";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => {
      this.message = msg;
    });
  }

  newMessage(){
    this.data.changeMessage("Hello from sibling");
  }

}
