var express = require('express')
, app = express()
, bodyParser = require('body-parser')
, port = process.env.PORT || 8084;


app.use(express.static(__dirname + 'dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/account', require('./server/controllers/account'));



app.listen(port, function() {
    console.log("Server started on port " + port);
});
