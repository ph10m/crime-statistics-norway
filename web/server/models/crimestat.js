var db = require("../db.js").getConnection();

exports.getCrimes = function(fromId, cb) {
    db.all("SELECT * FROM Crimestat limit '" + fromId + "', 10", function(err, row) {
        if (row == undefined) {
            cb(false);
        }
        else {
            cb(row);
        }
    });

}