import { Component } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

//Service
import { DataService } from "./data.service";
import { DatabaseConnectorService } from './database-connector.service';

//Search list
import { SearchListComponent } from './search-list/search-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Main
export class AppComponent {

  title = 'App works';
  description = 'new App';
  user: string;
  search: string;
  
  constructor(private dataServe: DataService, private router: Router, private databaseConnect: DatabaseConnectorService, private searchList: SearchListComponent){

  }
  
  ngOnInit(){
    //User listener, if user is changed every other component listening is noticed. 
    this.dataServe.currentUser.subscribe(user => this.user = user);
  }

  logOut(){
    //Sets user to "", is then logged out. 
    this.dataServe.changeUser("");
    this.router.navigate(['/']);
  }

  //Onaction from search-bar. 
  searchClick(value: string){
    this.search = value;
    this.dataServe.changeSearch(value);
    this.router.navigate(['/data']);
    //Dont post to db if not logged in
    if(value.length !== 0){
      this.postSearchToDb(this.search);
      //send value to search
      //this.searchList.getSearch(value);
      // this.searchList.getKeyword(value);
      console.log("string " + value);
    }
    
  }

  //When new search is created post to DB. 
  postSearchToDb(search: string){
    //User must be logged in to post to previous searches. 
    if(this.user != ""){
      this.databaseConnect.setPreviousSearch(search, this.user); 
    }
  }
}





