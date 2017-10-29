import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pathcomponents
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes: Routes = [
    // Add routes here
    {
        path:"",
        component: HomeComponent,

    },
    {
        path:"logIn",
        component: LogInComponent,
    },
    {
        path:"newUser",
        component: NewUserComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}





