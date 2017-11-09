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
  searches = []; //Previous searches. 

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

  //Make a list of previous searches. 
  previousSearches(){
    if(this.user != ""){
      console.log("jupp");
      let prevSearches = this.databaseConnect.getPreviousSearches(this.user);
      prevSearches.subscribe(data => {
        //Pushes data to local list. 
        for (var i = 0; i < data['returnVal'].length; i++){
          this.searches.push(data['returnVal'][i]);
       }
      });
    }
  }

  clickPreviousSearch(search :string){
    this.dataService.changeSearch(search);
  }
}
