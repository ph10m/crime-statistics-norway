import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySiteComponent } from './my-site.component';
import { DatabaseConnectorService } from '../database-connector.service';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from '../data.service';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterTestingModule } from '@angular/router/testing';



describe('MysiteComponent', () => {
  // SETUP FOR TESTS.
    let component: MySiteComponent;
    let component1: LogInComponent;
    let fixture: ComponentFixture<MySiteComponent>;
    let fixture1: ComponentFixture<LogInComponent>;
    let dbConnector: DatabaseConnectorService;
    let dataService: DataService;
    let de: DebugElement;
    let de1: DebugElement;

    let testuser = "test@test.no";
    let testPass = "1234567";

    //Fake db connector service. 
    let dbConnectorStub = {

      //TODO make equal dbObject. 
      getPreviousSearches(user, date, name, unique){
        let obj = JSON.parse('{"returnVal": {"Id": 3, "searchname": "dritogdra"}}');
        let subject = new BehaviorSubject<JSON>(obj);
        subject.next(obj);
        return subject.asObservable();
      },

      //Login to switch user, same as in userLogin. 
      logIn(mail: string, pass: string){
        //Makes observable to return to method in component. 
        if(mail === testuser && pass === testPass){
            let objt = JSON.parse('{"status": true}');
            let subject = new BehaviorSubject<JSON>(objt);
            subject.next(objt);
            return subject.asObservable();
        }else{
            let objf = JSON.parse('{"status": false}');
            let subjectf = new BehaviorSubject<JSON>(objf);
            subjectf.next(objf);
            return subjectf.asObservable();
        }
      }
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
        imports: [RouterTestingModule],
        declarations: [ MySiteComponent, LogInComponent ],
        providers: [
          {provide: DatabaseConnectorService, useValue: dbConnectorStub},
          {provide: DataService, useValue: dataServiceStub}]
    })
    .compileComponents();
  }));

  //Setup
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

  //TESTS

  //Check that user is not logged in initially
  it('Should be no user', ()=>{
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.user).toEqual("");
  });

  it('User should be logged in', () => {
    component1.logInClick(testuser, testPass);
    fixture1.detectChanges();
    fixture.detectChanges();
    expect(component.user).toEqual("test@test.no");
  });

  //Checks that unique changes value
  it('Test unique to be true and false', () => {
    component1.logInClick(testuser, testPass);
    fixture1.detectChanges();
    fixture.detectChanges();
    expect(component.unique).toEqual(false);
    component.onCheckClicked();
    expect(component.unique).toEqual(true);
  });

   //Checks radiobuttons change. 
   it('Test radiobuttons date and name', () => {
    component1.logInClick(testuser, testPass);
    fixture1.detectChanges();
    fixture.detectChanges();
    expect(component.name).toEqual(false);
    expect(component.date).toEqual(true);
    component.onRadioClick("name");
    expect(component.name).toEqual(true);
    expect(component.date).toEqual(false);
  });
});
