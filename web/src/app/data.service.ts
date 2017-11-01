import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private userSource = new BehaviorSubject<string>("");
  currentUser = this.userSource.asObservable();
  
  constructor() { }
  
    changeUser(user: string) {
      this.userSource.next(user)
  }
}
