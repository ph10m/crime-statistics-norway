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
  //TODO: Søk må også være i session storage --> Om man refresher siden søket forsvinne.  
  
  
  constructor() { 
    //Observable so components can listen to wich user is needed. 
    this.userSource = new BehaviorSubject<string>(""); 
    this.currentUser = this.userSource.asObservable();

    //Observable so components can listen to wich search is needed. 
    this.search = new BehaviorSubject<string>(""); 
    this.currentSearch = this.search.asObservable();

    //Session storage for user 
    let user = sessionStorage.getItem('currentUser');
    if(user != null){
      this.changeUser(user);
    }
  }
  
    changeUser(user: string) {
      //Set observable
      this.userSource.next(user)
      //Sessionstorage for user. 
      sessionStorage.setItem('currentUser', user);
      if(user == ""){
        localStorage.clear();  
      }
    }

    //The search object is changed. 
    changeSearch(search: string){
      this.search.next(search);
    }


}
