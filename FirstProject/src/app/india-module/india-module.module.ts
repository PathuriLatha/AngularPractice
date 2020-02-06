/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IndiaModuleModule { }
 */

import { NgModule } from '@angular/core';
import { NewDelhiComponent } from '../new-delhi/new-delhi.component';
import { NewMumbaiComponent } from '../new-mumbai/new-mumbai.component';
  @NgModule({
    declarations: [NewDelhiComponent, NewMumbaiComponent],
    exports: [ NewDelhiComponent, NewMumbaiComponent ]
  })
export class IndiaModuleModule { }
