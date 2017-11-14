var express = require('express')
, app = express()
, cors = require('cors')
, bodyParser = require('body-parser')
, port = process.env.PORT || 8084;


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/account', require('./server/controllers/account'));
app.use('/crimestat', require('./server/controllers/crimestat'));
app.use('/search', require("./server/controllers/search"));
app.use('/', express.static('./dist'));  



app.listen(port, function() {
    console.log("Server started on port " + port);
});
