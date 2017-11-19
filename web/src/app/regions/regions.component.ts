import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Region } from './region';
import { RegionService} from './region.service';

// Puts together the region page
@Component({
    selector: 'app-regions',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.css'],
    providers: [RegionService],
})

// Generates the list of regions
export class RegionsComponent implements OnInit {
    selectedRegion: Region;
    regions: Region[];
    panelOpenState: boolean;
    expanded: any = false;

    constructor( private regionService: RegionService) {}

    // Initialisation of the page
    ngOnInit() {
        console.log('funker');
        this.getRegions();
    }

    // Make an action when clicked on a region
    onSelect(region: Region): void {
        this.selectedRegion = region;
        console.log('Testing 123');
    }

    // Gets the regions that are listed up
    getRegions(): void {
        this.regionService.getRegions().then(regions => this.regions = regions);
    }

    // Fonction to log if list is expanded or not
    expand(event) {
        console.log('event');
        if (this.expanded === false) {
            this.expanded = true;
        } else {
            this.expanded = false;
        }
        if (this.expanded === true) {
            console.log(this.expanded);
            console.log('true');
        } else {
            console.log(this.expanded);
            console.log('false');
        }
    }

}

