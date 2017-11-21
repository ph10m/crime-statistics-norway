import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

//DatabaseConnector
import { DatabaseConnectorService } from '../database-connector.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  errorMessage = [];
  sucsessMessage = "";
  error = false;
  errorColorEmail = "";
  errorColorPass = "";
  
  constructor(private databaseConnector: DatabaseConnectorService, private router: Router) { }

  ngOnInit() {
  }

//Onclick from newUser, takes in arguments, should check them against the database.  
  newUserClick(mail: string, pass1: string, pass2: string){
    this.errorMessage = [];
    this.sucsessMessage = "";
    this.error = false;
    this.errorColorEmail = ""; //Used to set border color in case of error. 
    this.errorColorPass = ""; //Used to set border color in case of error.
    
    //Check email field. 
    if(mail.length == 0){
      this.error = true
      this.errorMessage.push("Must have email");
      this.errorColorEmail = "#FF0000";
    }else{
      //Check if email adress. 
      if(this.validateEmail(mail) == false){
        this.errorMessage.push("E-mail adress is not a valid E-mail");
        this.error = true
        this.errorColorEmail = "#FF0000";
      }
    }

    //Check password fields
    if(pass1 != pass2){
      this.errorMessage.push("Passwords do not match");
      this.error = true
      this.errorColorPass = "#FF0000";
    }else{
      if(pass1.length <= 6){
        this.errorMessage.push("Password is shorter than 7 charachters");
        this.error = true
        this.errorColorPass = "#FF0000";
      }
    }
    
    //If succsess
    if(this.error == false){
      //Check on database connector who checks if user alerady exist.  
      let status = this.databaseConnector.newUser(mail, pass1);
      status.subscribe(data => {
        if(data['status'] == true){
          //If database returns true it means that user exists alerady. 
          this.errorMessage.push("User alerady exist.");
          this.error = true;
          this.errorColorEmail = "#FF0000";
        }else{
          window.alert("New user created");
          //Sucsess move to loginpage. 
          this.router.navigate(['/mySite']);
        }
      });
    }
  }
  //Regex for validating email.
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  //For test purposes
  deleteUser(username){
    this.databaseConnector.deleteUser(username);
  }
}
