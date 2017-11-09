import { NgModule, Component, OnInit, Injectable  } from '@angular/core';
import * as jQuery from 'jquery';
//mock data from JSON file
import * as krimData from './krimdata.json';
/*
The purpose of a NgModule is to declare each thing you create in Angular. 
There is two kind of main structures :

    “declarations” is for things you’ll use in your templates : mainly components 
    (~ views : the classes displaying data), but also directives and pipes ;
    “providers” is for services 
    (~ models : the classes getting and handling data).
*/

import { Municipality } from './municipality';
import { MunicService } from './data.service';
import { MunicipalityDetailComponent } from './munic-detail.component';
//scrolling directive
import { WindowScrollDirective } from './window-scroll.directive';

@Component({
    selector: 'app-home',
    templateUrl: './fetch-data.component.html',
    styleUrls: ['./fetch-data.component.css'],
    providers: [MunicService]
  })
/**
 * 
    imports makes the exported declarations of other modules available in the current module
    declarations are to make directives (including components and pipes) from the current module available to other directives in the current module. Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.
    providers are to make services and values known to DI. They are added to the root scope and they are injected to other services or directives that have them as dependency.

 */

export class FetchDataComponent {
  title = 'Crime statistics';
  munics: Municipality[];
  selectedMunic: Municipality;
  municslist = [];

  constructor(private municService: MunicService) { }

  getMunics(): void {
    this.municService.getMunics().then(munics => this.munics = munics);
  }

  ngOnInit(): void {
    this.getMunics();
    this.getKrimData();
    //print the list
    console.log(this.municslist);
  }

  //reading data form json file
  getKrimData(): void {
    //List of all munics
    var municslist:Array<string[]> = new Array;
    //every munic is represented as a list of its own
    var municinfo:string[] = new Array;
    console.log("getting krimdata");
    for (var i = 1; i < 100; i++) {
      municinfo = [];
      const id = i;
      const value = (<any>krimData[i]).place;
      const value2 = (<any>krimData[i]).allAbs;
      const value3 = (<any>krimData[i]).all;
      const value4 = (<any>krimData[i]).propertyAbs
      const value5 = (<any>krimData[i]).property;
      const value6 = (<any>krimData[i]).violenceAbs;
      const value7 = (<any>krimData[i]).violence;
      const value8 = (<any>krimData[i]).drugsAbs;
      const value9 = (<any>krimData[i]).drugs;
      const value10 = (<any>krimData[i]).orderAbs;
      const value11 = (<any>krimData[i]).order;
      const value12 = (<any>krimData[i]).trafficAbs;
      const value13 = (<any>krimData[i]).traffic;
      const value14 = (<any>krimData[i]).otherAbs;
      const value15 = (<any>krimData[i]).other;
      
      //console.log(value); // output 'testing

      //adding every value to a list
      municinfo.push(id.toString(), value, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15);
      this.municslist.push(municinfo);
    }
  
    console.log("slutt")
  }

  onSelect(municipality: Municipality): void {
    this.selectedMunic = municipality;
  }
}