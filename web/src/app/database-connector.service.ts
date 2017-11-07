import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';


import 'rxjs/add/operator/map';


//All connections and responses from database is put here. 
@Injectable()
export class DatabaseConnectorService {
  req;
  
  constructor(private http: HttpClient) {
    console.log("Databaseconnector service woorking. ");
   }

  newUser(username: string, password: string){
    console.log("User: " + username);
    console.log("Password: " + password);
    
    //Make body for posting. 
    let body =  {
      "username" : username,
      "password" : password,
    };

    //Make post to server for making new user. 
    this.http.post('http://localhost:8084/account/registrate', body, {
      params: new HttpParams().set(username, password),
    })
    .subscribe(data => console.log("Return data: " + data));
  }
}
