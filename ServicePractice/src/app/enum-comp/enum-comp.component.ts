import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../color.enum';

@Component({
  selector: 'app-enum-comp',
  templateUrl: './enum-comp.component.html',
  /* styleUrls: ['./enum-comp.component.css'] */
  styles: [`
    .text-red {
      color: red;
    }

    .text-green {
      color: green;
    }

    .text-blue {
      color: blue;
    }
  `]
})
export class EnumCompComponent implements OnInit {
  @Input() enumName: string;
  @Input() color: Color;
  colors = Color;

  constructor() { }

  ngOnInit() {
  }

}
