import { Component, OnInit } from '@angular/core';

//Services
import { DataService } from '../data.service';
import { DatabaseConnectorService } from '../database-connector.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  search: string;
  user: string;

  constructor(private dataService: DataService, private databaseConnect: DatabaseConnectorService) { }

  ngOnInit(){
    this.dataService.currentUser.subscribe(user => this.user = user);
    //Search listener
    this.dataService.currentSearch.subscribe(search => {
      this.search = search
      this.postSearchToDb(search);
    });
  }

  //When new search is created post to DB. 
  postSearchToDb(search: string){
    //User must be logged in to post to previous searches. 
    if(this.user != ""){
      console.log("User is logged in: " + search);
      this.databaseConnect.setPreviousSearch(search, this.user);
    }else{
      console.log("NOT POSTING SEARCH TO DATABASE");
    }
    
    
  }

}
