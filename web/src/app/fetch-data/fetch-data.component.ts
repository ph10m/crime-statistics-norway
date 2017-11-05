import { NgModule } from '@angular/core';
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
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Municipality } from './municipality';
import { MunicService } from './data.service';
import { MunicipalityDetailComponent } from './munic-detail.component';

@Component({
    selector: 'app-home',
    templateUrl: './fetch-data.component.html',
    styleUrls: ['./fetch-data.component.css'],
    providers: [MunicService]
  })

export class FetchDataComponent {
  title = 'Crime statistics';
  munics: Municipality[];
  selectedMunic: Municipality;

  constructor(private municService: MunicService) { }

  getMunics(): void {
    this.municService.getMunics().then(munics => this.munics = munics);
  }

  ngOnInit(): void {
    this.getMunics();
    this.getKrimData();

  }
  
  getKrimData(): void {
    console.log("getting krimdata")
    
    for (var i = 0; i < 10; i++) {
      const word = (<any>krimData[i]).place;
      const word2 = (<any>krimData[i]).allAbs;
      console.log(word); // output 'testing
      console.log(word2)
    }
  
    console.log("slutt")
  }

  onSelect(municipality: Municipality): void {
    this.selectedMunic = municipality;
  }
}


//https://angular.io/guide/http
 /*
interface MunicInfo {
  id: number;
  name: string;
  all_1000: number;
  all_abs: number;
  property_1000: number;
  property_abs: number;
  violence_1000: number;
  violence_abs: number;
  drugs_1000: number;
  drugs_abs: number;
  order_1000: number;
  order_abs: number;
  traffic_1000: number;
  traffic_abs: number;
  other_1000: number;
  other_abs: number;
} */