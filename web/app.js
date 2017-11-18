var express = require('express')
, app = express()
, cors = require('cors')
, bodyParser = require('body-parser')
, port = process.env.PORT || 8084
, engines = require('consolidate');


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/account', require('./server/controllers/account'));
app.use('/cloud', require('./server/controllers/cloud'));
app.use('/crimestat', require('./server/controllers/crimestat'));
app.use('/search', require("./server/controllers/search"));
app.use('/', express.static('./dist'));
app.get('*', function(req, res) {
    res.sendFile(__dirname + "/dist/index.html")
})

app.listen(port, function() {
    console.log("Server started on port " + port);
});
