import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


//Service components. 
import { DataService } from '../data.service';
import { DatabaseConnectorService } from '../database-connector.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  errorMessage = [];
  user: string;
  currentUser: string;

  constructor(private router: Router, private dataService: DataService, private databaseConnector: DatabaseConnectorService) {
    
  }

  ngOnInit(){
    //UserListener
    this.dataService.currentUser.subscribe(user => this.user = user);
  }

  //Onclick from logIn. 
  logInClick(mail: string, pass: string){
    let check = true;
    this.errorMessage = [];
    
    if(check){
      //Check if user in database. 
      let status = this.databaseConnector.logIn(mail, pass);
      status.subscribe(data => {
        if(data['status'] == true){
          console.log("IM IN");
          this.dataService.changeUser(mail);
        }else{
          this.errorMessage.push("Wrong username or password");
        }
      })
    }else{
      this.errorMessage = [];
      this.errorMessage.push("No connection to database sry bro");
    }
  }
}
