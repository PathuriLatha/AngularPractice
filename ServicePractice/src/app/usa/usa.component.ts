import { Component, OnInit, Inject } from '@angular/core';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  /* styleUrls: ['./usa.component.css'] */
  styles: [`
    .Usa{
      border : 2px solid red;
      padding : 20px;
      margin : 10px;
    }
  `]
})
export class UsaComponent implements OnInit {

  indiapopulation: number = 1;

  constructor(@Inject(PopulationService)private ps : PopulationService) {
    this.indiapopulation = this.ps.IndiaPopulation;
  }

  ngOnInit() {
  }

}
