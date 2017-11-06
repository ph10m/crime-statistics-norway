import { Component } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

//Dataservice. 
import { DataService } from "./data.service";



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
  
  constructor(private dataServe: DataService, private router: Router){

  }
  
  ngOnInit(){
    //User listener, if user is changed every other component listening is noticed. 
    this.dataServe.currentUser.subscribe(user => this.user = user)
  }

  logOut(){
    //Sets user to "", is then logged out. 
    this.dataServe.changeUser("");
    this.router.navigate(['/']);
  }

  //Onaction from search-bar. 
  searchClick(value: string){
    if(value.length != 0){
      this.search = value;
      this.dataServe.changeSearch(value);
      this.router.navigate(['/search']);
    }
    
  }
  
}





