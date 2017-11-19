import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css'],
})


export class TagCloudComponent implements OnInit {
  private req: any;

  retrieved: any;

  type = 'all';

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value  
    width: 1,
    height: 600,
    overflow: false,
  }

  data1: Array<CloudData> = [
    { text: 'Loading...', weight: 10 },
  ]

  data2: Array<CloudData> = [
    { text: 'Loading...', weight: 10 },
  ]

  data3: Array<CloudData> = [
    { text: 'Loading...', weight: 10 },
  ]

  data4: Array<CloudData> = [
    { text: 'Loading...', weight: 10 },
  ]

  data5: Array<CloudData> = [
    { text: 'Loading...', weight: 10 },
  ]

  data6: Array<CloudData> = [
    { text: 'Loading...', weight: 10 },
  ]

  data7: Array<CloudData> = [
    { text: 'Loading...', weight: 10 },
  ]


  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.req = this.http.get('http://localhost:8084/cloud/everything').subscribe(data => {
      //console.log(data);
      this.retrieved = data
      this.changeData(this.retrieved);
      this.req.unsubscribe();
    })

  }

  choose(event, type) {
    this.type = type;
    event.target.ClassList.add('selected');
  }


  changeData(newData) {
    let parsedData1 = [];
    let parsedData2 = [];
    let parsedData3 = [];
    let parsedData4 = [];
    let parsedData5 = [];
    let parsedData6 = [];
    let parsedData7 = [];

    for (let i = 0; i < newData.length; i++) {
      parsedData1.push({ 'text': newData[i].text, 'weight': newData[i].all });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData2.push({ 'text': newData[i].text, 'weight': newData[i].property });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData3.push({ 'text': newData[i].text, 'weight': newData[i].violence });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData4.push({ 'text': newData[i].text, 'weight': newData[i].drugs });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData5.push({ 'text': newData[i].text, 'weight': newData[i].order });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData6.push({ 'text': newData[i].text, 'weight': newData[i].traffic });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData7.push({ 'text': newData[i].text, 'weight': newData[i].other });
    }

    let changedData1$: Observable<Array<CloudData>> = Observable.of(parsedData1);
    changedData1$.subscribe(res => this.data1 = res);

    let changedData2$: Observable<Array<CloudData>> = Observable.of(parsedData2);
    changedData2$.subscribe(res => this.data2 = res);

    let changedData3$: Observable<Array<CloudData>> = Observable.of(parsedData3);
    changedData3$.subscribe(res => this.data3 = res);

    let changedData4$: Observable<Array<CloudData>> = Observable.of(parsedData4);
    changedData4$.subscribe(res => this.data4 = res);

    let changedData5$: Observable<Array<CloudData>> = Observable.of(parsedData5);
    changedData5$.subscribe(res => this.data5 = res);

    let changedData6$: Observable<Array<CloudData>> = Observable.of(parsedData6);
    changedData6$.subscribe(res => this.data6 = res);

    let changedData7$: Observable<Array<CloudData>> = Observable.of(parsedData7);
    changedData7$.subscribe(res => this.data7 = res);
  }

}
