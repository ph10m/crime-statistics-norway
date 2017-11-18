import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Municipality } from './../fetch-data/municipality';

//Dataservice for search. 
import { DataService } from '../data.service';

@Component({
  selector: 'crime-list-component',
  templateUrl: './crime-list.component.html',
  styleUrls: ['./../fetch-data/fetch-data.component.css']
})

export class CrimeListComponent implements OnInit {
  //list with list holding objects from db
  crimelist: Array<Array<Municipality>> = [];
  //reducing the layer once to display objects in HTML
  renderlist: Array<Municipality> = [];
  expanded: any = false;

  //setup db values
  private req: any;
  retrieved: any;
  
  //start fetching data at this integer
  int = 0;
  name = undefined;
  sort = "all_abs";
  ascDesc = true;
  
  //Dropdown title;
  sortTitle = "all";
  

  //Currentsearch


  //appending style rules to the selected munic
  selectedMunic: Municipality;

  
  constructor(private http: HttpClient, private dataService: DataService) {}

  //on initalizing the page
  ngOnInit() {
    this.dataService.currentSearch.subscribe(search => {
      this.name = search
      this.getSearch(this.int);
    })
    
  }
   
  //Onaction from dropdown
  dropdownClick(value){
    this.sort = value + "_abs";
    this.sortTitle = value;
    this.getSearch(this.int);
  }


  //On action from toggle button
  radioClick(value: string){
    console.log(value)
    if(value == 'true'){
      this.ascDesc = true;
    }else{
      this.ascDesc = undefined;
    }
    this.getSearch(this.int);
  }

  //fetching 10 objects from db starting at int
  getSearch(int) {
    console.log("SORT: " + this.sort);
    this.renderlist = [];

    if(this.name == ""){
      this.name = undefined;
    }

    let body = {
      "name": this.name,
      "sort": this.sort,
      "limit": int,
      "sortAscDesc": this.ascDesc
    }

    this.req = this.http.post('http://localhost:8084/search/search', body).subscribe(data=>{ 
      console.log("This data : " + (JSON.stringify(data)));
      // storing data
      this.retrieved = data
      this.changeData(this.retrieved);
    })
  }
  
  //changing data stored in the file
  changeData(newData){
    const changedData$: Observable<Array<Array<Municipality>>> = Observable.of(newData);
    changedData$.subscribe(res => this.crimelist = res);
    console.log("changed data")
    //iterate through updated list and update it with new data
    this.checkList();
  }
  
  //separate function to create html rendering list
  checkList() {
    for (let i in this.crimelist) {
      //console.log("in for løkke")
      //console.log(this.crimelist[i])
      for (let b in this.crimelist[i]) {
        //console.log(this.crimelist[i][b].municipacility)
        this.renderlist.push(this.crimelist[i][b])
      }
    }
  }
  
  // ngOnDestroy(){
  //   this.req.unsubscribe();
  // }

  /** Documentation for event binding in angular
   * https://coursetro.com/posts/code/59/Angular-4-Event-Binding
   */
  onLoadMore() {
    console.log("fetching more data");
    this.int += 10;
    this.getSearch(this.int);
  }

  onSelect(munic: Municipality): void {
    this.selectedMunic = munic;
  }

  // Fonction to log if list is expanded or not
  expand(event) {
    console.log('event test');
    if (this.expanded === false) {
        this.expanded = true;
    } else {
        this.expanded = false;
    }
    if (this.expanded === true) {
        console.log(this.expanded);
    } else {
        console.log(this.expanded);
    }
  }
}
