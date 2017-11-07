var db = require("../db.js").getConnection();

exports.test = function(cb) {
        var result = ["hello world",10,'https://dagbladet.no']
        cb(result)
    }