import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeListComponent } from './crime-list.component';
import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';

/**
 * Why does it crash
 * https://stackoverflow.com/questions/40003575/angular-2-error-no-provider-for-http-in-karma-jasmine-test
 */

 describe('CrimeListComponent', () => {
   let component: CrimeListComponent;
   let fixture: ComponentFixture<CrimeListComponent>;
   let de: DebugElement;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ CrimeListComponent ],
       providers: [HttpClient]
     })
     .compileComponents();
    }));

   beforeEach(() => {
     fixture = TestBed.createComponent(CrimeListComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });
});
