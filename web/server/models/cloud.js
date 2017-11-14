var db = require("../db.js").getConnection();

exports.test = function(cb) {
        let result = ["hello world",10,'https://dagbladet.no']
        cb(result)
    }

exports.test2 = function(cb) {
        db.get('SELECT * FROM crimestat', function(err, row){
            console.log(row);
            cb(row)
        });
    }

    exports.all_1000 = function(cb) {
        db.all('SELECT municipacility AS text, all_1000 AS weight FROM crimestat', function(err, row){
            console.log(row);
            cb(row)
            //WHERE municipacility NOT LIKE "i alt" AND municipacility NOT LIKE "Alle fylker" AND municipacility NOT LIKE "Hele landet" AND municipacility NOT LIKE "Alle kommuner" 
        });
    }