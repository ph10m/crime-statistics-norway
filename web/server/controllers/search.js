var express = require('express')
, router = express.Router()
, path = require('path')
, crimestat = require(path.normalize('../models/search'));

router.post('/search', function(req, res) {
    crimestat.search(req.body.name, req.body.sort, req.body.sortAscDesc, req.body.limit, function(crimes) {
        res.json({
            crimes
        })
    })
}); 

router.post('/norway', function(req, res) {
    crimestat.norway(function(crimes) {
        res.json({
            crimes
        })
    })
}); 

module.exports = router;