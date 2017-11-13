import { NgModule, Component, OnInit, Injectable  } from '@angular/core';
import * as jQuery from 'jquery';

/*
The purpose of a NgModule is to declare each thing you create in Angular. 
There is two kind of main structures :

    “declarations” is for things you’ll use in your templates : mainly components 
    (~ views : the classes displaying data), but also directives and pipes ;
    “providers” is for services 
    (~ models : the classes getting and handling data).
*/

import { Municipality } from './municipality';
import { MunicipalityDetailComponent } from './munic-detail.component';

import { HttpClient, HttpParams } from '@angular/common/http';
import { CrimeListComponent } from './crimelist.component';

@Component({
    selector: 'app-home',
    templateUrl: './fetch-data.component.html',
    styleUrls: ['./fetch-data.component.css'],
    providers: [ CrimeListComponent]
  })
/**
 * 
    imports makes the exported declarations of other modules available in the current module
    declarations are to make directives (including components and pipes) from the current module available to other directives in the current module. Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.
    providers are to make services and values known to DI. They are added to the root scope and they are injected to other services or directives that have them as dependency.

 */

export class FetchDataComponent {
  title = 'Crime statistics';
  //selectedMunic: Municipality;

  constructor() {}


  ngOnInit(): void {
  }

  /*
  onSelect(municipality: Municipality): void {
    this.selectedMunic = municipality;
    console.log("selected munic")
  }
  */
}