import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserComponent } from './new-user.component';
import { DatabaseConnectorService } from '../database-connector.service';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http/src/module';
import { Subject } from 'rxjs/Subject';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewUserComponent', () => {
  let username = "test@test.no";
  let password = "1234567"; 
  let connect: DatabaseConnectorService;
  let comp: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;
  let dbConnector: DatabaseConnectorService;
  let de: DebugElement;

  //Fake DBconnectorservice. 
  let dbConnectorStub = {
    newUser (username: string, pass1: string, pass2: string){
      //Makes observable to return to method in component. 
      let subject = new Subject<any>();
      subject.next({status: true});
      return subject.asObservable();
    }
  }

  beforeEach(async(() => { 
    TestBed.configureTestingModule({ 
      imports:[RouterTestingModule],
      declarations:  [NewUserComponent],
      providers: [{provide: DatabaseConnectorService, useValue: dbConnectorStub} ] //Fake db connector
    });
  }));
  
  beforeEach(() =>{//If you have ngOnInit in component it works when you declerate in before each. 
    fixture = TestBed.createComponent(NewUserComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    dbConnector = TestBed.get(DatabaseConnectorService);
  });

  //Check that it component is created. 
  it('should create', () => {
    expect(comp).toBeTruthy();
  });
  
  //When password dont match, should return error. 
  it('Should be error password dont match', () =>{
    comp.newUserClick("test@123.no", "1234567", "123456");
    fixture.detectChanges();
    expect(comp.errorMessage.length).toBeGreaterThan(0);
    expect(comp.errorColorPass).toEqual('#FF0000');
  });

  //When email is wrong. 
  it('Should be error, inValidEmail', () =>{
    comp.newUserClick("test123.no", "1234567", "1234567");
    fixture.detectChanges();
    expect(comp.errorMessage.length).toBeGreaterThan(0);
    expect(comp.errorColorEmail).toEqual('#FF0000');
  });

  //Test email validator, true
  it('Should return true, Email', () =>{
    let check = comp.validateEmail("test@123.no");
    fixture.detectChanges();
    expect(check).toEqual(true);
  });

  //Test email validator, false
  it('Should return false, Email', () =>{
    let check = comp.validateEmail("testno");
    fixture.detectChanges();
    expect(check).toEqual(false);
  });

  // Find out how to make an http. subscribe returnable from dummy. 
  it('Errormessages length should be 0', () =>{
    comp.newUserClick("test@123.no", "1234567", "1234567");
    fixture.detectChanges();
    expect(comp.errorMessage.length).toEqual(0);
  });
});
