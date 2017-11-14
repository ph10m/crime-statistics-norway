var express = require('express')
, router = express.Router()
, path = require('path')
, account = require(path.normalize('../models/account'));


// router.get('/', (req, res) => {
//     res.json("Working..."); 
//   });

// router.get('/stuff', (req, res) =>{
//     res.json("yo");
// })

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

router.get('/meme', function(req, res) {
    res.json({
        status : 'hello world'
    });
})

//create a new user
router.post('/registrate/', function(req, res) {
    // console.log("ONE: "+ req.body.username + " " + "TWO: "+ req.body.password)
    // console.log(req.body)
    // console.log(req.params);
    account.registrate(req.body.username, req.body.password, function(returnVal) {
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