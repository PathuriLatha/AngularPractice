import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../parent/child/child.component'
import { SiblingComponent } from '../parent/sibling/sibling.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ClassBindingComponent,
    StructuralDirectivesComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent
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
