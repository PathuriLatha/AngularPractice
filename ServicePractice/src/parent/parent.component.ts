import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/data.service';

@Component({
  selector: 'app-parent',
  /* templateUrl: './parent.component.html', */
  template: `
    <div class="parent">
      <h4>Parent Component</h4>
      <h5>{{message}}</h5>
    </div>
  `,
  /* styleUrls: ['./parent.component.css'] */
  styles: [`
    .parent{
      border: 2px solid lime;
      margin : 20px;
      padding : 20px;
    }
  `]
})
export class ParentComponent implements OnInit {

  message: string = "This is a Parent Component for service";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => {
      this.message = msg;
    })
  }

}
