import { Component, OnInit, OnDestroy } from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css']
})

export class TagCloudComponent implements OnInit, OnDestroy {
  private req: any;

  retrieved: any;

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value  
    width : 1,
    height : 400,
    overflow: false,
  }
 
  data: Array<CloudData> = [
    {text: 'Loading...', weight: 10, link: 'https://google.com'},
  ]


  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.req = this.http.get('http://localhost:8084/cloud/test3').subscribe(data=>{
      console.log(data);
      this.retrieved = data
      this.changeData(this.retrieved);
     
    })
    //TODO sende data fra HTTP til ordskyen
    //TODO få sendt real data fra db til ordsky
    
  }
  
  changeData(newData){
    const changedData$: Observable<Array<CloudData>> = Observable.of(newData);
    changedData$.subscribe(res => this.data = res);
    console.log("changed data")
  }
  
  ngOnDestroy(){
    this.req.unsubscribe();
  }

}
