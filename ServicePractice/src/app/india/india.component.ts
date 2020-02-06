
import { Component, OnInit, Inject } from '@angular/core';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  /* styleUrls: ['./india.component.css'] */
  styles: [`
    .India{
      border : 2px solid red;
      padding : 20px;
      margin : 10px;
    }
  `]
})
export class IndiaComponent implements OnInit {
  population: number = 1.32;

  constructor(@Inject(PopulationService)private ps : PopulationService) {
    this.ps.IndiaPopulation = this.population;
  }

  ngOnInit() {
  }

}
