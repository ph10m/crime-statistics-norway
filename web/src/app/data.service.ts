import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  //User
  private userSource;
  currentUser;

  //search
  private search;
  currentSearch;

  
  
  constructor() { 
    //Observable so components can listen to wich user is needed. 
    this.userSource = new BehaviorSubject<string>(""); 
    this.currentUser = this.userSource.asObservable();

    //Observable so components can listen to wich search is needed. 
    this.search = new BehaviorSubject<string>(""); 
    this.currentSearch = this.search.asObservable();

    //Localstorage for session use. 
    let user = localStorage.getItem('currentUser');
    if(user != null){
      this.changeUser(user);
    }
    
    
  }
  
    changeUser(user: string) {
      //Set observable
      this.userSource.next(user)
      //Localstorage for session use. 
      localStorage.setItem('currentUser', user);
      if(user == ""){
        localStorage.clear();  
      }
    }

    changeSearch(search: string){
      this.search.next(search);
    }


}
