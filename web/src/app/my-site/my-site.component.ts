import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//ServeComponents
import { DataService } from '../data.service';
import { DatabaseConnectorService } from '../database-connector.service';


@Component({
  selector: 'app-my-site',
  templateUrl: './my-site.component.html',
  styleUrls: ['./my-site.component.css']
})
export class MySiteComponent implements OnInit {

  loggedIn = false;
  user: string; //User
  search : string; //Searches
  searches; //Previous searches. 

  constructor(private dataService: DataService, private databaseConnect: DatabaseConnectorService) { }

  //Listens to both user and, searches. 
  ngOnInit() {
    this.dataService.currentUser.subscribe(user => this.user = user);
    this.dataService.currentSearch.subscribe(search => this.search = search);
    this.previousSearches();
  }

  setLogInStatus(status: boolean){
    this.loggedIn = status;
  }
  
  //Skal få en liste ac tidligere søk. 
  previousSearches(){
    
    console.log("LOAD PREVIOS SEARCHES. ")

    if(this.user != ""){
      let prevSearches = this.databaseConnect.getPreviousSearches(this.user);
      prevSearches.subscribe(data => {
        console.log(JSON.stringify(data))
        console.log(data['returnVal'].length);
        this.searches = JSON.stringify(data['returnVal']);
        // this.searches = JSON.stringify(data['returnVal'][0]['content']);
        
        
      });
    }
    
  }

  

}
