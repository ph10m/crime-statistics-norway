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

  //mysitesearch
  private searchMy;
  currentSearchMy;

  prevSearch = "";
  
  //sessionstorage. 
  storage = ["", ""];
  
  
  constructor() { 
    //Observable so components can listen to wich user is needed. 
    this.userSource = new BehaviorSubject<string>(""); 
    this.currentUser = this.userSource.asObservable();

    //Observable so components can listen to wich search is needed. 
    this.search = new BehaviorSubject<string>(""); 
    this.currentSearch = this.search.asObservable();

    //Observable so components can listen to wich search is needed. 
    this.searchMy = new BehaviorSubject<string>(""); 
    this.currentSearchMy = this.searchMy.asObservable();

    //Observable for myserach click

    //Sessionstorage
    this.storage = JSON.parse(sessionStorage.getItem('currentStorage'));
    if(this.storage != null){
      this.changeUser(this.storage[0]);
      this.changeSearch(this.storage[1]);
    }else{
      this.storage = ["",""];
    }
  }
  
    changeUser(user: string) {
      //Set observable
      this.userSource.next(user)
      
      //Sessionstorage for user. 
      this.storage[0] = user;
      sessionStorage.setItem('currentStorage', JSON.stringify(this.storage));
      if(user === ""){
        sessionStorage.clear();  
      }
    }

    mySiteSearchClick(search: string){
      this.searchMy.null;
      this.searchMy.next(search);
    }

    //The search object is changed. 
    changeSearch(search: string){
      //Sessionstorage
      if(search !== this.prevSearch){
        // this.storage[1] = search;
        
        // sessionStorage.setItem('currentStorage', JSON.stringify(this.storage));
        
        //Set observable. 
        this.search.null;
        this.search.next(search);
        this.prevSearch = search;
      }  
    }
}
