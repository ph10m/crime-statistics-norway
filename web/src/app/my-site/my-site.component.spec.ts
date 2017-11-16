import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySiteComponent } from './my-site.component';
import { DatabaseConnectorService } from '../database-connector.service';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from '../data.service';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterTestingModule } from '@angular/router/testing';



describe('MysiteComponent', () => {
    let component: MySiteComponent;
    let component1: LogInComponent;
    let fixture: ComponentFixture<MySiteComponent>;
    let fixture1: ComponentFixture<LogInComponent>;
    let dbConnector: DatabaseConnectorService;
    let dataService: DataService;
    let de: DebugElement;
    let de1: DebugElement;

 //Fake db connector service. 
    let dbConnectorStub = {

    }

    
    //Behavoiur subject for dataservice stub. 
    let usersub = new BehaviorSubject<string>("");
    let subj = usersub.asObservable();
    let searchsub = new BehaviorSubject<string>("");
    let subj1 = searchsub.asObservable();
    
    //fake dataservice
    let dataServiceStub = {
        currentUser: subj,
        currentSearch: subj1,
        changeUser(user: string){
        usersub.next(user);
  }
}
    //Setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[RouterTestingModule],
        declarations: [ MySiteComponent, LogInComponent ],
        providers: [
          {provide: DatabaseConnectorService, useValue: dbConnectorStub},
          {provide: DataService, useValue: dataServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySiteComponent);
    fixture1 = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    component1 = fixture1.componentInstance;
    de = fixture.debugElement;
    de1 = fixture1.debugElement;
    dbConnector = TestBed.get(DatabaseConnectorService);
    dataService = TestBed.get(DataService);
  });

  describe('test', () => {
      it('should add 1+1', ()=>{
        expect(1+1).toEqual(2);
      })
    })
})