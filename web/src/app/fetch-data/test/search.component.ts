import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
//  styleUrls: ['./app.component.css']
})
export class SearchComponent implements OnInit {
    title = 'app';
    results = '';
  
    constructor(private http: HttpClient){
  
    }
  
    ngOnInit(): void {
        //fetching data from github api and logging this in console, use interface under to read values of data
      this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
      data => {
        console.log("User Location: " + data.location);
        console.log("Bio: " + data.bio);
        console.log("Company: " + data.company);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
    
    //send data
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
      })
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");
          }
        );
    }
}

// To access the data in the fields we fetch above
interface UserResponse {
    location: string;
    bio: string;
    company: string;
  }

interface MunicInfo {
  id: number;
  name: string;
  all_1000: number;
  all_abs: number;
  property_1000: number;
  property_abs: number;
  violence_1000: number;
  violence_abs: number;
  drugs_1000: number;
  drugs_abs: number;
  order_1000: number;
  order_abs: number;
  traffic_1000: number;
  traffic_abs: number;
  other_1000: number;
  other_abs: number;
}

/*
HttpClient will use the XMLHttpRequest browser API to execute HTTP request. 
In order to execute HTTP request of a specific type you can use the following 
methods which corresponds to HTTP verbs:
    get,    post,    put,    delete,    patch,    head,    jsonp
    */