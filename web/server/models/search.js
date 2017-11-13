var db = require("../db.js").getConnection();

exports.search = function(name, cb) {
    db.all("SELECT * FROM Crimestat WHERE municipacility LIKE '%" + name + "%' limit 10", function(err, row) {
        if (row == undefined) {
            cb(false);
        }
        else {
            cb(row);
        }
    });

}