var express = require('express')
, router = express.Router()
, path = require('path')
, cloud = require(path.normalize('../models/cloud'));



router.get('/cloudData/', function(req, res) {
    
    cloud.cloudData(function(returnVal) {
        //console.log(returnVal)
        res.json(returnVal)
    })
})


module.exports = router;