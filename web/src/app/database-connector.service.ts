import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

//All connections and responses from database is put here. 
@Injectable()
export class DatabaseConnectorService {
  
  constructor(private http: HttpClient) {}

  //Returns true if new user is created false otherwise. 
  newUser(username: string, password: string){
    let body =  {
      "username" : username,
      "password" : password,
    }; 
    return this.http.post('http://localhost:8084/account/registrate', body)
  }

  //Checks if right username and password is added, returns a object to the component. 
  logIn(username: string, password: string){
    let body =  {
      "username" : username,
      "password" : password,
    };
    return this.http.post('http://localhost:8084/account/login', body);
  }

  //Post to current user previous search. 
  setPreviousSearch(searchkey: string, username: string){
    let body =  {
      "username" : username,
      "searchkey" : searchkey,
      "date": new Date().toLocaleString(),
    };
    this.http.post('http://localhost:8084/account/searchpost', body).subscribe(res => console.log("Response: " + res))
  }

  //Returns object from database with the current users previous searches. 
  getPreviousSearches(username: string){
    let body =  {
      "username" : username,
    };
    return this.http.post('http://localhost:8084/account/getsearch', body);
  }
}
