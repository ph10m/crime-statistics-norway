var db = require("../db.js")
// .getConnection();
var sha512 = require("js-sha512");

exports.testuser = function(cb) {

    var username = "test";
    var password = sha512("test");

    console.log(db.run("SELECT * FROM sqlite_master"));
    console.log(db.run("INSERT INTO Users (username, password) VALUES ('" + username + "', '" + password + "')" ));

    cb(true)
}


exports.registrate = function(username, password, cb) {
    console.log(username);
    console.log(password);
    let result = false;
    let crypt = sha512(password);
    
    //Check if user exists.
    db.getConnection().get("SELECT * FROM Users WHERE username='" + username + "'", function(err, row){
        console.log("THIS ROW:" + row)
        if (row == undefined) {
            //If row is undefined it means that it is safe to add new user. 
            //Sets true to register user. 
            result = true;
            if(result){
                //New username and password added to database. --> Commented out for not adding stupid information to database atm. 
                db.getConnection().run("INSERT INTO Users (username, password) VALUES ('" + username + "', '" + crypt + "')" );
                cb(false);
            }
        }
        else {
            //Returns true, no need to return user and password. 
            cb(true);
        }
    });
}

exports.checkLogin = function(username, password, cb){
    console.log(username);
    console.log(password);
    let crypt = sha512(password);

    //Check if user exists.
    db.getConnection().get("SELECT * FROM Users WHERE username='" + username + "' AND password='" + crypt + "'", function(err, row){
        console.log("THIS ROW:" + row)
        if (row == undefined) {
            //If undefined there is noe user with this credentials.  
            cb(false);
        }
        else {
            //Returns true, no need to return user and password, user has alereay put in the right username.  
            cb(true);
        }
    });
}