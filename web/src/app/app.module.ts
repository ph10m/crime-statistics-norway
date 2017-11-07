import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//Main component and Routing. 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router';

//Service
import { DataService } from './data.service';
import { DatabaseConnectorService } from './database-connector.service';

//Components
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MySiteComponent } from './my-site/my-site.component';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    NewUserComponent,
    MySiteComponent,
    SearchResultComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    DataService,
    DatabaseConnectorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
