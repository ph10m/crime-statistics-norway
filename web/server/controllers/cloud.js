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

module.exports = router;