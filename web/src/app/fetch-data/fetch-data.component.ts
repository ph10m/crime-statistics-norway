import { NgModule } from '@angular/core';
/*
The purpose of a NgModule is to declare each thing you create in Angular. There is two kind of main structures :

    “declarations” is for things you’ll use in your templates : mainly components (~ views : the classes displaying data), but also directives and pipes ;
    “providers” is for services (~ models : the classes getting and handling data).
*/
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Municipalicity } from './municipalicity';
import { MunicService } from './data.service';

@Component({
    selector: 'app-home',
    templateUrl: './fetch-data.component.html',
    styleUrls: ['./fetch-data.component.css'],
    providers: [MunicService]
  })

export class FetchDataComponent {
  title = 'Crime statistics';
  munics: Municipalicity[];
  selectedMunic: Municipalicity;

  constructor(private municService: MunicService) { }

  getMunics(): void {
    this.municService.getMunics().then(munics => this.munics = munics);
  }

  ngOnInit(): void {
    this.getMunics();
  }

  onSelect(municipalicity: Municipalicity): void {
    this.selectedMunic = municipalicity;
  }
}

//https://angular.io/guide/http
