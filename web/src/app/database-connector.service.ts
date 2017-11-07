import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';


//All connections and responses from database is put here. 
@Injectable()
export class DatabaseConnectorService {

  
  
  constructor(private http: HttpClient) {
    console.log("Databaseconnector service woorking. ");
   }

  newUser(user: String, password: String){
    //Server is on port 8084
    console.log("User: " + user);
    console.log("Password: " + password);

    // let i = this.http.get('http://localhost:8084/account/').subscribe(res => console.log(res));
  
    // console.log("I: " + i);    
  }
}
