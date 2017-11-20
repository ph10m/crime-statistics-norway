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
//    let el: HTMLElement;

  

   //it('List should be empty t start', () => expect(component.renderlist).toEqual(component.checkList()));


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

   //    it('true is true', () => expect(true).toBe(true));
 
//    it('checks if list are empty at start', () =>
//     expect(list).toEqual(this.component.renderlist)
//     );
   

//    it('should create', () => {
//      expect(component).toBeTruthy();
//    });
});