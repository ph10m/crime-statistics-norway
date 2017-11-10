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
  unique = false;
  name = false;
  date = true;

  constructor(private dataService: DataService, private databaseConnect: DatabaseConnectorService) { }

  //Listens to both user and, searches. 
  ngOnInit() {
    this.dataService.currentUser.subscribe(user => {
      this.user = user
      this.previousSearches();
    });
    this.dataService.currentSearch.subscribe(search => this.search = search);
    
  }

  setLogInStatus(status: boolean){
    this.loggedIn = status;
  }

  //Make a list of previous searches. 
  previousSearches(){
    if(this.user != ""){
      this.searches = []
      let prevSearches = this.databaseConnect.getPreviousSearches(this.user, this.name, this.date, this.unique);
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

  //On action from search restriction. 
  onRadioClick(){
    //Set variables for getting preivoius search
    if(this.name == false){
      this.name = true;
      this.date = false;
      
    }else{
      this.name = false;
      this.date = true;
      
    }
    this.previousSearches();
  }

  //Set variable for previous search;
  onCheckClicked(){
    if(this.unique == false){
      this.unique = true;
      this.previousSearches();
    }else{
      this.unique = false;
      this.previousSearches();
    }
  }
}
