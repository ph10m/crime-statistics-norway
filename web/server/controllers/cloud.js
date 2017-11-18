var express = require('express')
, router = express.Router()
, path = require('path')
, cloud = require(path.normalize('../models/cloud'));


router.get('/all_1000/', function(req, res) {
    
    cloud.all_1000(function(returnVal) {
        //console.log(returnVal)
        res.json(returnVal)
    })
})

router.get('/property_1000/', function(req, res) {
    
    cloud.property_1000(function(returnVal) {
        //console.log(returnVal)
        res.json(returnVal)
    })
})

router.get('/violence_1000/', function(req, res) {
    
    cloud.violence_1000(function(returnVal) {
        //console.log(returnVal)
        res.json(returnVal)
    })
})

router.get('/everything/', function(req, res) {
    
    cloud.everything(function(returnVal) {
        //console.log(returnVal)
        res.json(returnVal)
    })
})


module.exports = router;