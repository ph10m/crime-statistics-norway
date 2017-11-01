import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router';
import { DataService } from './data.service';


import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MySiteComponent } from './my-site/my-site.component';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MunicipalicityDetailComponent } from './fetch-data/munic-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    NewUserComponent,
    MySiteComponent,
    FetchDataComponent,
    MunicipalicityDetailComponent
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
