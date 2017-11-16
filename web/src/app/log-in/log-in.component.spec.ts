import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import { DatabaseConnectorService } from '../database-connector.service';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http/src/module';
import { Subject } from 'rxjs/Subject';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let dbConnector: DatabaseConnectorService;
  let dataService: DataService;
  let de: DebugElement;
  
  //"Testuser"
  let testuser = "test@test.no";
  let testPass = "1234567";

  //Fake db connector service. 
  let dbConnectorStub = {
    logIn(mail: string, pass: string){
        //Makes observable to return to method in component. 
        if(mail == testuser && pass == testPass){
            let objt = JSON.parse('{"status": true}');
            let subject = new BehaviorSubject<JSON>(objt);
            subject.next(objt);
            return subject.asObservable();
        }else{
            let objf = JSON.parse('{"status": false}');
            let subjectf = new BehaviorSubject<JSON>(objf);
            subjectf.next(objf)
            return subjectf.asObservable();
        }
        
    }
  }
 
  //Behavoiur subject for dataservice stub. 
  let usersub = new BehaviorSubject<string>("");
  let subj = usersub.asObservable();
  //fake dataservice
  let dataServiceStub = {
    currentUser: subj,
    changeUser(user: string){
        usersub.next(user);
    }
}

//Setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],  
      declarations: [ LogInComponent ],
      providers: [
          {provide: DatabaseConnectorService, useValue: dbConnectorStub},
          {provide: DataService, useValue: dataServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    dbConnector = TestBed.get(DatabaseConnectorService);
    dataService = TestBed.get(DataService);
  });

  //Should be created test.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Initial user should be "". 
  it('Check initial user = ""', () => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.user).toEqual("");      
  })

  //Test false login. 
  it('Login should retrun error', () => {
      component.logInClick("NO", "NO");
      fixture.detectChanges();
      expect(component.errorMessage.length).toBeGreaterThan(0);
  })

  //Test validlogin 
  it('User should be set to test@test.no', () => {
    component.logInClick(testuser, testPass);
    fixture.detectChanges();
    expect(component.user).toEqual(testuser);
})
});


