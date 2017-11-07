var express = require('express')
, router = express.Router()
, path = require('path')
, account = require(path.normalize('../models/account'));

//lets the user login
router.post('/login/:username:password', function(req, res) {

})

//lets the user logout
router.post('/logout', function(req, res) {

})

//create a new user
router.post('/registrate/', function(req, res) {
    console.log(req.body.username + " " + req.body.password)
    console.log(req.body)
    account.registrate(req.params.username, req.params.password, function(returnVal) {
        console.log(returnVal)
        res.json({
            status : returnVal
        })
    })

})

//get user details
router.get('/account', function(req, res) {

})


//todo. fjern denne. brukes kun for å lage en testbruker
router.post('/testuser', function(req, res) {

    account.testuser(function(status) {
        res.json({
            status : status
        })
    })

    

})

module.exports = router;