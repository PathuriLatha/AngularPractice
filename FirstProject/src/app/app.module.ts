/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { USAComponent } from './usa/usa.component';
import { NewDelhiComponent } from './new-delhi/new-delhi.component';
import { NewMumbaiComponent } from './new-mumbai/new-mumbai.component';
import { NewYorkComponent } from './new-york/new-york.component';
import { WashingtonComponent } from './washington/washington.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    USAComponent,
    NewDelhiComponent,
    NewMumbaiComponent,
    NewYorkComponent,
    WashingtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { IndiaModuleModule } from "./india-module/india-module.module";
import { UsaModuleModule } from "./usa-module/usa-module.module";
  @NgModule({
    declarations: [
      AppComponent,
      IndiaComponent,
      UsaComponent
    ],
    imports: [
      BrowserModule, FormsModule, IndiaModuleModule, UsaModuleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
