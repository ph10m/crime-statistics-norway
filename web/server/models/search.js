var db = require("../db.js").getConnection();

exports.search = function(name, sort, sortAscDesc, cb) {

    var sqlQuery = "SELECT * FROM Crimestat";

    if (name != undefined) {
        name = "%" + name + "%";
        sqlQuery += " WHERE municipacility LIKE ?";
    }

    if (sort != undefined) {
        if (sortAscDesc != undefined) {
            sqlQuery += " ORDER BY ? ASC";
        } else {
            sqlQuery += " ORDER BY ? DESC";
        }
    }

    console.log("sql query " + sqlQuery)

    db.all(sqlQuery, name, sort, sortAscDesc, function(err, row) {
        if (row == undefined) {
            console.log("error " + err)
            cb(false);
        } else {
            cb(row);
        }
    });






    /* if (sort != undefined) {
         db.all("SELECT * FROM Crimestat WHERE municipacility LIKE '%" + name + "%' limit 10", function(err, row) {
             if (row == undefined) {
                 cb(false);
             } else {
                 cb(row);
             }
         });
     } else {
         db.all("SELECT * FROM Crimestat WHERE municipacility LIKE '%" + name + "%' limit 10", function(err, row) {
             if (row == undefined) {
                 cb(false);
             } else {
                 cb(row);
             }
         });
     }*/
}