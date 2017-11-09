// http://localhost:8084/crimestat/crimes

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
  crimelist: Array<Municipality>;

  private req: any;

  retrieved: any;

 /* options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value  
    width : 1,
    height : 400,
    overflow: false,
  }*/
 


  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.req = this.http.post('http://localhost:8084/crimestat/crimes', 10).subscribe(data=>{
      //console.log(this.req);
      console.log((data[1]).id);
      //console.log(data.place)
      this.retrieved = data
      this.changeData(this.retrieved);

     
    })
    //TODO sende data fra HTTP til ordskyen
    //TODO få sendt real data fra db til ordsky
    
  }
  
  changeData(newData){
    const changedData$: Observable<Array<Municipality>> = Observable.of(newData);
    changedData$.subscribe(res => this.crimelist = res);
    console.log("changed data")
  }
  
  ngOnDestroy(){
    this.req.unsubscribe();
  }

}