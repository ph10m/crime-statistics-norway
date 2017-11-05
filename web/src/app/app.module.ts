import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router';
import { DataService } from './data.service';


import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MySiteComponent } from './my-site/my-site.component';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MunicipalityDetailComponent } from './fetch-data/munic-detail.component';
//import { SearchComponent } from './fetch-data/search.component';
//import { GithubAuthInterceptor } from './fetch-data/githubauth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    NewUserComponent,
    MySiteComponent,
    FetchDataComponent,
    MunicipalityDetailComponent,
    //SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
//    { //Interceptor guide https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
 //     provide: HTTP_INTERCEPTORS,
   //   useClass: GithubAuthInterceptor,
    //  multi: true
   // }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
