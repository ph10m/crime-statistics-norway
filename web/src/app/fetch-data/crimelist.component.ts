import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Municipality } from './municipality';

@Component({
  selector: 'crime-list-component',
  templateUrl: './crime-list.component.html',
  styleUrls: ['./fetch-data.component.css']
})

export class CrimeListComponent implements OnInit, OnDestroy {
  //list with list holding objects from db
  crimelist: Array<Array<Municipality>> = [];
  //reducing the layer once to display objects in HTML
  renderlist: Array<Municipality> = [];
 
  //setup db values
  private req: any;
  retrieved: any;

  //start fetching data at this integer
  int = 0;

  //appending style rules to the selected munic
  selectedMunic: Municipality;

  constructor(private http: HttpClient) {}

  //on initalizing the page
  ngOnInit() {
    this.getLars(this.int);
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

  //fetching 10 objects from db starting at int
  getLars(int) {
    let body = {
      "from": int
    }
    this.req = this.http.post('http://localhost:8084/crimestat/crimes', body).subscribe(data=>{ 
     // console.log("This data : " + (JSON.stringify(data)));
      //storing data
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
  
  ngOnDestroy(){
    this.req.unsubscribe();
  }

  /** Documentation for event binding in angular
   * https://coursetro.com/posts/code/59/Angular-4-Event-Binding
   */
  onLoadMore() {
    console.log("fetching more data")
    this.int += 10
    this.getLars(this.int);
  }

  onSelect(munic: Municipality): void {
    this.selectedMunic = munic;
  }
}