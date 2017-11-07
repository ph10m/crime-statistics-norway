import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//ServeComponent
import { DataService } from '../data.service';


@Component({
  selector: 'app-my-site',
  templateUrl: './my-site.component.html',
  styleUrls: ['./my-site.component.css']
})
export class MySiteComponent implements OnInit {

  loggedIn = false;
  user: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user => this.user = user);
  }

  setLogInStatus(status: boolean){
    this.loggedIn = status;
    console.log("Status changed");
    
  }
  

  

}
