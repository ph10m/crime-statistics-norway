var express = require('express')
, router = express.Router()
, path = require('path')
, cloud = require(path.normalize('../models/cloud'));


router.get('/test/', function(req, res) {
    
    cloud.test(function(returnVal) {
        console.log(returnVal)
        res.json({
            text : returnVal[0],
            weight: returnVal[1],
            url: returnVal[2]
        })
    })
})

router.get('/test2/', function(req, res) {
    
    cloud.test2(function(returnVal) {
        //console.log(returnVal)
        res.json(returnVal)
    })
})

router.get('/all_1000/', function(req, res) {
    
    cloud.all_1000(function(returnVal) {
        //console.log(returnVal)
        res.json(returnVal)
    })
})


module.exports = router;