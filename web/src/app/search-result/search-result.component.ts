import { Component, OnInit } from '@angular/core';

//ServeComponent
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  search: string;

  constructor(private dataService: DataService) { }

  ngOnInit(){
    //Search listener
    this.dataService.currentSearch.subscribe(search => this.search = search);
  }

}
