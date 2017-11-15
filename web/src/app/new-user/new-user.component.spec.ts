import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserComponent } from './new-user.component';
import { DatabaseConnectorService } from '../database-connector.service';

// describe('NewUserComponent', () => {
//   let component: NewUserComponent;
//   let fixture: ComponentFixture<NewUserComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ NewUserComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NewUserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('NewUserComponent', () => {
  let username = "test@test.no";
  let password = "1234567"; 
  let connect: DatabaseConnectorService;
  let comp: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(() => { 
    //Deklarerer komponentens som skal testes. 
    //deklareres i en before each, slik at kan resete tilstanden før hver test kjører. 
    TestBed.configureTestingModule({ //Kalles senere med mer metadata som definerer tilleggsimport. 
      declarations:  [NewUserComponent],
      providers :[
        {provide: DatabaseConnectorService}
      ]
    })
  })

  //Lager en instans av komponenten under test
  //returnerer en komponentliga. 
  //lager aksess til komponentinstansen i seg selv, og til debugelementet som er et håndtak til komponentens DOM element. 
  fixture = TestBed.createComponent(NewUserComponent);

  comp = fixture.componentInstance;

  it('yo', () => {
    comp.yot = true;
    fixture.detectChanges();
    expect(comp.yo).toBe(true);
  })

})
