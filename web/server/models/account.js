var db = require("../db.js").getConnection();
var sha512 = require("js-sha512");

//registrates a user
exports.registrate = function(username, password, cb) {
    //console.log(username);
    //console.log(password);
    let result = false;
    let crypt = sha512(password);
    
    //Check if user exists.
    db.get("SELECT * FROM Users WHERE username='" + username + "'", function(err, row){
        //console.log("THIS ROW:" + row)
        if (row == undefined) {
            //If row is undefined it means that it is safe to add new user. 
            //Sets true to register user. 
            result = true;
            if(result){
                //New username and password added to database. --> Commented out for not adding stupid information to database atm. 
                db.run("INSERT INTO Users (username, password) VALUES ('" + username + "', '" + crypt + "')" );
                cb(false);
            }
        }
        else {
            //Returns true, no need to return user and password. 
            cb(true);
        }
    });
}

//DELETE USER FOR TEST PURPOSES
exports.delete = function(username, cd){
    db.get("SELECT * FROM Users WHERE username='" + username + "'", function(err, row){
        if (row == undefined) {
            //If user not exists --> Should really not happen, like ever. 
            cb(false);
        }
        else {
            //DELETE SEARCHES
            db.run("DELETE FROM Log WHERE userid ='" + row.id +"'");
            //DELETE USER
            db.run("DELETE FROM Users WHERE username ='" + username + "'");
            cd(true)    
        }
    });    
}

exports.checkLogin = function(username, password, cb){
    //console.log(username);
    //console.log(password);
    let crypt = sha512(password);

    //Check if user exists.
    db.get("SELECT * FROM Users WHERE username='" + username + "' AND password='" + crypt + "'", function(err, row){
        //console.log("THIS ROW:" + row)
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

exports.searchPost = function(username, searchkey, date, cb){
    let type = 'search';

    db.get("SELECT * FROM Users WHERE username='" + username + "'", function(err, row){
        if (row == undefined) {
            //If user not exists --> Should really not happen, like ever. 
            cb(false);
        }
        else {
            //New username and password added to database. --> Commented out for not adding stupid information to database atm. 
            db.run("INSERT INTO Log (type, content, time, userid) VALUES ('"+ type + "', '" + searchkey + "', '" + date + "', '" + row.id + "')" );
            cb(true);
        }
    });
}


//Returns from database based on the sql sentence. 
exports.getsearch = function(username, name, date, unique, hit, cb){
    db.get("SELECT * FROM Users WHERE username='" + username + "'", function(err, row){
        if (row == undefined) {
            //If user not exists --> Should really not happen, like ever. 
            cb(false);
        }
        else {
            //console.log("ROW ID: " + row.id);
            //Sort by date, not unique
            if((date === true) && (unique === false) && (hit === false)){
                //New username and password added to database. --> Commented out for not adding stupid information to database atm. 
                db.all("SELECT * FROM Log WHERE userid = " + row.id + " ORDER BY Time", function(err, row){
                    if(row == undefined){
                        cb(false);
                    }else{
                        cb(row);
                    }
                });
                
                //Sort bt date, unique
            }else if(date === true && unique === true && hit === false){
                db.all("SELECT DISTINCT * FROM Log WHERE userid = " + row.id + " GROUP BY Content ORDER BY time", function(err, row){
                    if(row == undefined){
                        cb(false);
                    }else{
                        cb(row);
                    }
                    
                });
            //sort by contentname, not unique
            }else if(name === true && unique === false && hit === false){
                db.all("SELECT * FROM Log WHERE userid = " + row.id + " ORDER BY content", function(err, row){
                    if(row == undefined){
                        cb(false);
                    }else{
                        cb(row);
                    }
                });
            //Sort by contentname, unique
            }else if(name === true && unique === true && hit === false){
                
                db.all("SELECT DISTINCT * FROM Log WHERE userid = " + row.id + " GROUP BY Content ORDER BY content", function(err, row){
                    if(row == undefined){
                        cb(false);
                    }else{
                        cb(row);
                    }
                });
                
                //IF SUCSESS WITH CONTENT I BD.
            }else if((date === true) && (unique === false) && (hit === true)){
                //New username and password added to database. --> Commented out for not adding stupid information to database atm.
                
                let result = new Array();
                let timer = new Array();

                let check = 0
                
                db.all("SELECT * FROM Log JOIN Crimestat ON Crimestat.municipacility LIKE '%' || Log.content || '%' WHERE Log.userid = "+ row.id + " ORDER BY time", function(err, row){
                    if(row == undefined){
                        cb(false);
                    }else{
                        check = 0;
                        for(var i = 0; i < row.length; i++){
                            if(result.length == 0){
                                result.push({"id" : row[i].id, "type": "search",  "content": row[i].content, "time" : row[i].time, "userid": row[i].userid});
                            }else{
                                for(var j = 0; j < result.length; j++){
                                    if(row[i].time == result[j].time){
                                        check = check + 1;
                                    }   
                                }if(check == 0){
                                    result.push({"id" : row[i].id, "type": "search",  "content": row[i].content, "time" : row[i].time, "userid": row[i].userid});
                                }
                                check = 0;
                            }
                        }
                        cb(result);
                    }
                });
                
                //Sort by date, unique, valid
            }else if(date === true && unique === true && hit === true){

                let result = new Array();
                let timer = new Array();
                let check = 0

                db.all("SELECT DISTINCT * FROM Log JOIN Crimestat ON Crimestat.municipacility LIKE '%' || Log.content || '%' WHERE Log.userid= " + row.id + " GROUP BY Content ORDER BY time", function(err, row){
                    if(row == undefined){
                        cb(false);
                    }else{
                        check = 0;
                        for(var i = 0; i < row.length; i++){
                            if(result.length == 0){
                                result.push({"id" : row[i].id, "type": "search",  "content": row[i].content, "time" : row[i].time, "userid": row[i].userid});
                            }else{
                                for(var j = 0; j < result.length; j++){
                                    if(row[i].time == result[j].time){
                                        check = check + 1;
                                    }   
                                }if(check == 0){
                                    result.push({"id" : row[i].id, "type": "search",  "content": row[i].content, "time" : row[i].time, "userid": row[i].userid});
                                }
                                check = 0;
                            }
                        }
                        cb(result);
                    }
                    
                });
            //sort by contentname, not unique, valid
            }else if(name === true && unique === false && hit === true){
                let result = new Array();
                let timer = new Array();
                let check = 0

                db.all("SELECT * FROM Log JOIN Crimestat ON Crimestat.municipacility LIKE '%' || Log.content || '%' WHERE Log.userid = " + row.id + " ORDER BY content", function(err, row){
                    if(row == undefined){
                        cb(false);
                    }else{
                        check = 0;
                        for(var i = 0; i < row.length; i++){
                            if(result.length == 0){
                                result.push({"id" : row[i].id, "type": "search",  "content": row[i].content, "time" : row[i].time, "userid": row[i].userid});
                            }else{
                                for(var j = 0; j < result.length; j++){
                                    if(row[i].time == result[j].time){
                                        check = check + 1;
                                    }   
                                }if(check == 0){
                                    result.push({"id" : row[i].id, "type": "search",  "content": row[i].content, "time" : row[i].time, "userid": row[i].userid});
                                }
                                check = 0;
                            }
                        }
                        cb(result);
                    }
                });
            //Sort by contentname, unique, valid
            }else if(name === true && unique === true && hit === true){
                let result = new Array();
                let timer = new Array();
                let check = 0
                db.all("SELECT DISTINCT * FROM Log JOIN Crimestat ON Crimestat.municipacility LIKE '%' || Log.content || '%' WHERE Log.userid = " + row.id + " GROUP BY Content ORDER BY content", function(err, row){
                    if(row == undefined){
                        cb(false);
                    }else{
                        check = 0;
                        for(var i = 0; i < row.length; i++){
                            if(result.length == 0){
                                result.push({"id" : row[i].id, "type": "search",  "content": row[i].content, "time" : row[i].time, "userid": row[i].userid});
                            }else{
                                for(var j = 0; j < result.length; j++){
                                    if(row[i].time == result[j].time){
                                        check = check + 1;
                                    }   
                                }if(check == 0){
                                    result.push({"id" : row[i].id, "type": "search",  "content": row[i].content, "time" : row[i].time, "userid": row[i].userid});
                                }
                                check = 0;
                            }
                        }
                        cb(result);
                    }
                });
            }
        }
    });
}
