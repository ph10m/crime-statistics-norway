import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import { NgIf } from '@angular/common';

import { Municipality } from './municipality';

//SERVICES --> BOTH MUST BE HERE. 
import { DataService } from '../data.service';
import { DatabaseConnectorService } from '../database-connector.service';

@Component({
  selector: 'crime-list-component',
  templateUrl: './crime-list.component.html',
  styleUrls: ['./crime-list.component.css']
})


export class CrimeListComponent implements OnInit {
  //list with list holding objects from db
  crimelist: Array<Array<Municipality>> = [];
  // reducing the layer once to display objects in HTML
  renderlist: Array<Municipality> = [];
  panelOpenState: boolean;
  expanded: any = false;

  //country data
  allofnorway: any = {
    all_1000: 0,
    all_abs: 0,
    drugs_1000: 0,
    drugs_abs: 0,
    id: 0,
    municipacility: "",
    order_1000: 0,
    order_abs: 0,
    other_1000: 0,
    other_abs: 0,
    property_1000: 0,
    property_abs: 0,
    traffic_1000: 0,
    traffic_abs: 0,
    violence_1000: 0,
    violence_abs: 0
  };

  // setup db values
  private req: any;
  retrieved: any;

  int = 0;
  name = undefined;
  sort = "all_abs";
  ascDesc = undefined;
  
  //Dropdown title;
  sortTitle = "all";
  errorMessage = "";

  // appending style rules to the selected munic
  selectedMunic: Municipality;

  //USER VALUE BY LARS
  user;

  constructor(private http: HttpClient, private dataService: DataService, private dbConnect: DatabaseConnectorService) {}

  // on initalizing the page
  ngOnInit() {
    //fetching all data on load
    this.req = this.http.post('/search/norway', {} ).subscribe(data=>{ 
      this.allofnorway = data;
      this.allofnorway = this.allofnorway.crimes;
    });
      
    this.dataService.currentUser.subscribe(user => {
      this.user = user;
    })
    this.dataService.currentSearchMy.subscribe(search =>{
      this.name = search; 
      this.searchClick(this.name);
    })
  }

  // SEARCHFIELD METHODS MADE BY LARS....START
  //Onaction from search-bar. 
  searchClick(value: string){
    
    this.renderlist = [];
    this.name = value;
    this.dataService.changeSearch(value);
    //Set new search.
    this.int = 0 
    this.getSearch(this.int);
    
    //Dont post to db if not logged in
    if(value.length !== 0){
      this.postSearchToDb(this.name);
    }
    
  }

  //When new search is created post to DB. 
  postSearchToDb(search: string){
    //User must be logged in to post to previous searches. 
    if(this.user != ""){
      this.dbConnect.setPreviousSearch(search, this.user); 
    }
  }

  // SEARCHFIELD METHODS MADE BY LARS ....END

  //Onaction from dropdown
  dropdownClick(value){
    this.renderlist = [];
    this.sort = value + "_abs";
    this.sortTitle = value;
    this.int = 0;
    this.getSearch(this.int);
  }

  //On action from toggle button
  radioClick(value: string){
    this.renderlist = [];
    this.int = 0;
    if(value == 'true'){
      this.ascDesc = true;
    }else {
      this.ascDesc = undefined;
    }
    this.getSearch(this.int),
  }

  //fetching 10 objects from db starting at int
  getSearch(int) {
    this.errorMessage = "";


    if (this.name === '') {
      this.name = undefined;
    }

    const body = {
      'name': this.name,
      'sort': this.sort,
      'limit': int,
      'sortAscDesc': this.ascDesc
    };

    this.req = this.http.post('http://localhost:8084/search/search', body).subscribe(data=>{ 
      // storing data
      if (data['crimes'].length === 0) {
        this.errorMessage = 'No result for this search';
      }
      this.retrieved = data;
      this.changeData(this.retrieved);
    });
  }

  // changing data stored in the file
  changeData(newData) {
    const changedData$: Observable<Array<Array<Municipality>>> = Observable.of(newData);
    changedData$.subscribe(res => this.crimelist = res);

    this.checkList();
  }

  // separate function to create html rendering list
  checkList() {
    for (let i in this.crimelist) {
      for (let b in this.crimelist[i]) {
        this.renderlist.push(this.crimelist[i][b])
      }
    }
  }

<<<<<<< HEAD
  // ngOnDestroy(){
  //   this.req.unsubscribe();
  // }


  /** Documentation for event binding in angular
   * https://coursetro.com/posts/code/59/Angular-4-Event-Binding
   */

  // Makes the list longer by 10
  // every time it's scrolled down
  onScroll() {
=======
  // Makes the list longer by 10 every time it's scrolled down
  onScrollDown() {
>>>>>>> 756503ee8612b11e24dde0f2c4a497d8847cc975
    console.log('fetching more data');
    this.int += 10;
    this.getSearch(this.int);
  }


  onSelect(munic: Municipality): void {
    this.selectedMunic = munic;
  }

<<<<<<< HEAD
  trackByCrimes(index: number, munic: Municipality):
    number { return munic.id; }
=======
  //expand list elements 
   expand(event) {
    if (event.expanded === false) {
      console.log(event.expanded);
      event.expanded = true;
    } 
    else if (event.expanded === true) {
      event.expanded = false;
      console.log(event.expanded);
    }
}
>>>>>>> 756503ee8612b11e24dde0f2c4a497d8847cc975
}
