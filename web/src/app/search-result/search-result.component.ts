import { Component, OnInit } from '@angular/core';

//Services
import { DataService } from '../data.service';
import { DatabaseConnectorService } from '../database-connector.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  search: string;
  user: string;
  prevSearch = "";

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.currentUser.subscribe(user => this.user = user);
    //Search listener
    this.dataService.currentSearch.subscribe(search => {
      this.search = search
    });
  }
}
