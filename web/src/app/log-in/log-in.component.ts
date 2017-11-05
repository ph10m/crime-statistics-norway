import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

//ServeComponent
import { DataService } from '../data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  errorMessage = [];
  user: string;

  constructor(private router: Router, private dataService: DataService) { }

  
  ngOnInit(){
    //UserListener
    this.dataService.currentUser.subscribe(user => this.user = user);
  }
  
  //Onclick from logIn. 
  logInClick(mail: string, pass: string){
    let check = true;
    //Check this against database...
    
    if(check){
      //TODO: Check user against database, and password. 

      //Sets the new user if all errorchecking is passed. 
      this.dataService.changeUser(mail);

    }else{
      this.errorMessage = [];
      this.errorMessage.push("No connection to database sry bro");
    }
     
    //TODO: Check password against database. 
    //TODO: Do error checking like in new user component. 
    
    

    

  }
  

}
