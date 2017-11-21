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
    return this.http.post('/account/registrate', body)
  }

  //Checks if right username and password is added, returns a object to the component. 
  logIn(username: string, password: string){
    let body =  {
      "username" : username,
      "password" : password,
    };
    return this.http.post('/account/login', body);
  }

  //Post to current user previous search. 
  setPreviousSearch(searchkey: string, username: string){
    let body =  {
      "username" : username,
      "searchkey" : searchkey,
      "date": new Date().toLocaleString(),
    };
    this.http.post('/account/searchpost', body).subscribe(res => console.log("Response: " + JSON.stringify(res)))
  }

  //Returns object from database with the current users previous searches. 
  getPreviousSearches(username: string, name: boolean, date: boolean, unique: boolean, hit: boolean){
    let body =  {
      "username" : username,
      "name" : name,
      "date" : date,
      "unique" : unique,
      "hit": hit,
    };
    return this.http.post('/account/getsearch', body);
  }


  //Delete user for testPurposes. 
  deleteUser(testuser: string){
    let body = {
      "username ": testuser,
    }
    return this.http.post('http://localhost:8084/account/deleteuser', body);
  }
}
