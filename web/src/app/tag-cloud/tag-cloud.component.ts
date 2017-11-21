import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as $ from 'jquery';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css'],
})

/* class that that is used to create the component used for the word clouds
the way we chose to implement it has 7 different cloud objects rendered, and only showing 1 at a time,
instead of having 1 cloud object that changes its data based on what is selected. 
this was done because with the amount of data used in the clouds combined with the tag cloud library, 
the loading times were far too long (over a minute) with only 1 component,
and just about 10 seconds with 7 components. Which still is a lot, but it was the best possible working
solution we found. */
export class TagCloudComponent implements OnInit {
  private req: any;
  retrieved: any;
  type = 'all';
  url = 'http://www.google.com/search?q=';

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value  
    width: 1,
    height: 600,
    overflow: false,
  }

  // initializes all the clouds
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

  // retrieves the data from the DB and sends it to the changeData function
  ngOnInit() {
    this.req = this.http.get('/cloud/cloudData').subscribe(data => {
      this.retrieved = data;
      this.changeData(this.retrieved);
      this.req.unsubscribe();
    })

  }

  // function used onclick to change between the various word clouds, as well as style the apropriate buttons
  choose(event, type) {
    this.type = type;
    $('.selected').removeClass('selected');
    $(event.target).addClass('selected');
  }


  // retrieves new data to use in the clouds, formats the data to CloudData objects and updates the clouds
  changeData(newData) {
    let parsedData1 = [];
    let parsedData2 = [];
    let parsedData3 = [];
    let parsedData4 = [];
    let parsedData5 = [];
    let parsedData6 = [];
    let parsedData7 = [];

    for (let i = 0; i < newData.length; i++) {
      parsedData1.push({ 'text': newData[i].text, 'weight': newData[i].all, 'link': this.url +  newData[i].text});
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData2.push({ 'text': newData[i].text, 'weight': newData[i].property, 'link': this.url +  newData[i].text });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData3.push({ 'text': newData[i].text, 'weight': newData[i].violence, 'link': this.url +  newData[i].text });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData4.push({ 'text': newData[i].text, 'weight': newData[i].drugs, 'link': this.url +  newData[i].text });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData5.push({ 'text': newData[i].text, 'weight': newData[i].order, 'link': this.url +  newData[i].text });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData6.push({ 'text': newData[i].text, 'weight': newData[i].traffic, 'link': this.url +  newData[i].text });
    }
    for (let i = 0; i < newData.length; i++) {
      parsedData7.push({ 'text': newData[i].text, 'weight': newData[i].other, 'link': this.url +  newData[i].text });
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
