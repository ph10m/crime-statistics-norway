var express = require('express')
, router = express.Router()
, path = require('path')
, account = require(path.normalize('../models/account'));


//lets the user login
router.post('/login', function(req, res) {
    console.log("LOGIN");
    account.checkLogin(req.body.username, req.body.password, function(returnVal){
        console.log(returnVal)
        res.json({
            status : returnVal
        })
    })
})

//lets the user logout
router.post('/logout', function(req, res) {

})

router.get('/deleteuser', function(req, res) {
    account.delete(req.body.username, function(returnVal){
        res.json({
            status : returnVal
        });
    })
    
})

//create a new user
router.post('/registrate/', function(req, res) {
    account.registrate(req.body.username, req.body.password, function(returnVal) {
        res.json({
            status : returnVal
        })
    })
})

//Post users previous searches.
router.post('/searchpost', function(req, res){
    account.searchPost(req.body.username, req.body.searchkey, req.body.date, function(returnVal){
        res.json({
            status : returnVal
        })
    })
})

//Get users previous searches. 
router.post('/getsearch', function(req, res){
    account.getsearch(req.body.username, req.body.name, req.body.date, req.body.unique, req.body.hit, function(returnVal){
        res.json({
            returnVal
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