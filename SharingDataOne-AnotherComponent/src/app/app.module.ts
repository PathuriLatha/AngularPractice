import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from '../test/test.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component'

@NgModule({
  declarations: [
    AppComponent, TestComponent, CompanyComponent, EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
