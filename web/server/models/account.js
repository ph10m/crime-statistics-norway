var db = require("../db.js").getConnection();
var sha512 = require("js-sha512");

exports.testuser = function(cb) {

    var username = "test";
    var password = sha512("test");

    console.log(db.run("SELECT * FROM sqlite_master"));
    console.log(db.run("INSERT INTO Users (username, password) VALUES ('" + username + "', '" + password + "')" ));

    cb(true)
}

exports.registrate = function(username, password, cb) {
    //check if user exists. if so, cancel
    var result = db.run("SELECT * FROM Users WHERE username='" + username + "'");
    console.log(result)
    cb(result);

    //else, registrate user
}