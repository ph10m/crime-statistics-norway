var db = require("../db.js").getConnection();

exports.search = function(name, cb) {
    db.all("SELECT * FROM Crimestat WHERE municipacility LIKE '%" + name + "%'", function(err, row) {
        if (row == undefined) {
            cb(false);
        }
        else {
            cb(row);
        }
    });

}