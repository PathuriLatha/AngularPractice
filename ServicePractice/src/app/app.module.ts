import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { PopulationService } from './population.service';
import { LoginService } from './login.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { PopcornService } from './popcorn.service';
import { SiblingComponent } from '../sibling/sibling.component';
import { ParentComponent } from '../parent/parent.component';
import { DataService } from './data.service';
import { DurationPipe } from './duration.pipe';
import { MultiplierPipe } from './multiplier.pipe';
import { EnumCompComponent } from './enum-comp/enum-comp.component';
import { SquareRootPipe } from './square-root.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    UsaComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ParentComponent,
    SiblingComponent,
    DurationPipe,
    MultiplierPipe,
    EnumCompComponent,
    SquareRootPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PopulationService,
    LoginService,
    EmployeeService,
    PopcornService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


