var db = require("../db.js").getConnection();

exports.search = function(name, sort, sortAscDesc, limit, cb) {

    var sqlQuery = "SELECT * FROM Crimestat";

    var parameterList = [];

    if (name != undefined) {
        name = "%" + name + "%";
        sqlQuery += " WHERE municipacility LIKE ?";
        parameterList.push(name);
    }

    //this is not done i prepared statement style since it doesnt work with the orderby keyword in sqlite3 in node.
    if (sort != undefined && sort != undefined) {
        
        if (sortAscDesc != undefined) {
            sqlQuery += " ORDER BY " + sort + "  ASC";
        } else {
            sqlQuery += " ORDER BY " + sort + " DESC";
        }
    }

    if (limit != undefined) {
        parameterList.push(limit);
    }
    else {
        parameterList.push(0);
    }

    sqlQuery += " LIMIT ?, 10"

    console.log("sql query " + sqlQuery)
    console.log(parameterList)

    db.all(sqlQuery, parameterList, function(err, row) {
        if (row == undefined) {
            console.log("error " + err)
            cb(false);
        } else {
            cb(row);
        }
    });
}