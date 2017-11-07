import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router';
import { DataService } from './data.service';


import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MySiteComponent } from './my-site/my-site.component';
import { RegionsComponent } from './regions/regions.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    NewUserComponent,
    MySiteComponent,
    RegionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
