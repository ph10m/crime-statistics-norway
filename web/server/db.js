var sqlite3 = require('sqlite3').verbose()
, db = new sqlite3.Database('server/db.db');


//returns the db connection
module.exports = {
    getConnection: function() {
        return db;
    }
}