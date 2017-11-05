var express = require('express')
, app = express()
, bodyParser = require('body-parser')
, sqlite3 = require('sqlite3').verbose()
, db = new sqlite3.Database('db.db')
, port = process.env.PORT || 8084;





app.listen(port);
console.log("Server started on port " + port);