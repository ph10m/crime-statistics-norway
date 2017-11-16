import { Component, OnInit, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Municipality } from './../fetch-data/municipality';

import { DataService } from '../data.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./../fetch-data/fetch-data.component.css']
})

@Injectable()
export class SearchListComponent implements OnInit {
  //list with list holding objects from db
  crimelist: Array<Array<Municipality>> = [];
  //reducing the layer once to display objects in HTML
  renderlist: Array<Municipality> = [];

  keyword: any;

  //setup db values
  private req: any;
  retrieved: any;

  //This search
  search: string;

  //appending style rules to the selected munic
  selectedMunic: Municipality;
  constructor(private http: HttpClient, private dataService: DataService) { }



  ngOnInit() {
    // this.getSearch(this.keyword);
    //console.log(this.renderlist);
    //this.checkList();
    this.dataService.currentSearch.subscribe(search => {
      this.search = search
      this.getSearch(search);
    });
  }

  //trying to fetch search key into a local variable
  getKeyword(string) {
    this.keyword = string;
    console.log("keyword " + string);
  }
  
  //fetching objects that matches string from db
  getSearch(string) {
    this.renderlist = []
    console.log("søker");
    //console.log(string);
    let body = {
      "name": string
    }
    this.req = this.http.post('http://localhost:8084/search/search', body).subscribe(data=>{ 
      // console.log("This data : " + (JSON.stringify(data['crimes'])));
      //storing data
      
      this.retrieved = data
      this.changeData(this.retrieved);
    })
  }
  
  //changing data stored in the file
  changeData(newData){
    const changedData$: Observable<Array<Array<Municipality>>> = Observable.of(newData);
    changedData$.subscribe(res => this.crimelist = res);
    // console.log("changed data")
    //console.log(newData);
    //iterate through updated list and update it with new data
    this.checkList();
  }
  
  //separate function to create html rendering list
  checkList() {
    for (let i in this.crimelist) {
      // console.log("in for løkke")
      //console.log(this.crimelist)
      //console.log(this.crimelist[i])
      for (let b in this.crimelist[i]) {
        //console.log(this.crimelist[i][b].municipacility)
        //console.log(this.crimelist[i][b])
        this.renderlist.push(this.crimelist[i][b])
        // console.log(this.renderlist[0])  
      }
    }
  }
  /*
  ngOnDestroy(){
    this.req.unsubscribe();
  }
*/
  
  onSelect(munic: Municipality): void {
    this.selectedMunic = munic;
  }
}
    
