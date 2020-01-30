/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsaModuleModule { }
 */
import { NgModule } from '@angular/core';
import { NewYorkComponent } from "../new-york/new-york.component";
import { WashingtonComponent } from "../washington/washington.component";

@NgModule({
  declarations: [ NewYorkComponent, WashingtonComponent ],
  exports: [ NewYorkComponent, WashingtonComponent ]
})
export class UsaModuleModule { }
