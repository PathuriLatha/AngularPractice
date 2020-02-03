import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ClassBindingComponent,
    StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
