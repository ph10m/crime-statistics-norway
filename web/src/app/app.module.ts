import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TagCloudModule } from 'angular-tag-cloud-module';

// Main component and Routing.
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router';

// Service
import { DataService } from './data.service';
import { DatabaseConnectorService } from './database-connector.service';

// Components
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MySiteComponent } from './my-site/my-site.component';
import { TagCloudComponent } from './tag-cloud/tag-cloud.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CrimeListComponent } from './crime-list/crime-list.component';
import { HttpClient } from '@angular/common/http/src/client';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component'; 
import { BarChartComponent } from './barchart/barchart.component';

@NgModule({
  declarations: [
    ChartComponent,
    AppComponent,
    HomeComponent,
    LogInComponent,
    NewUserComponent,
    MySiteComponent,
    TagCloudComponent,
    CrimeListComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TagCloudModule,
    HttpClientModule,
    InfiniteScrollModule,
    ChartsModule,
  ],
  providers: [
    DataService,
    DatabaseConnectorService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
