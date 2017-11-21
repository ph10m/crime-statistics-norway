import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('AppComponent', () => {

    //SETUP FOR TESTS
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let dataService: DataService;
    let de: DebugElement;


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
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[RouterTestingModule],
            declarations: [AppComponent],
            providers: [
                {provide: DataService, useValue: dataServiceStub}
            ]
        }).compileComponents();
    }));

    //Setup
    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        dataService = TestBed.get(DataService);
  });
    
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    
    it('User should be logged out', () => {
        component.logOut();
        fixture.detectChanges();
        expect(component.user).toEqual("");
    })
  
});
