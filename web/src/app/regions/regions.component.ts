import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { Region } from './region';
import { RegionService} from './region.service';

// Puts together the region page
@Component({
    selector: 'app-regions',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.css'],
    providers: [RegionService]
})

// Generates the list of regions
export class RegionsComponent implements OnInit {
    regions: Region[];

    constructor( private regionService: RegionService) {}

    ngOnInit() {
        console.log('funker');
        this.getRegions();
    }

    onSelect(region: Region): void {
        console.log('Testing123');
    }

    getRegions(): void {
        this.regionService.getRegions().then(regions => this.regions = regions);
    }

}
