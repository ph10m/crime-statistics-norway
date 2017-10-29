import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  errorMessage = [];
  error = false;
  
  constructor() { }

  ngOnInit() {
  }

//Onclick from newUser, takes in arguments, should check them against the database.  
  newUserClick(mail: string, pass1: string, pass2: string){
    this.errorMessage = [];
    this.error = false;

    //Check email field. 
    if(mail.length == 0){
      this.error = true
      this.errorMessage.push("Must have email");
    }else{
      //Check if email adress. 
    if(this.validateEmail(mail) == false){
      this.errorMessage.push("Not an email adress");
      this.error = true
    }
    }
    //Check password fields
    if(pass1 != pass2){
      this.errorMessage.push("Passwords do not match");
      this.error = true
    }else{
      if(pass1.length <= 6){
        this.errorMessage.push("Password is shorter than 7 charachters");
        this.error = true
      }
  }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
