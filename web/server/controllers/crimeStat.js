var express = require('express')
, router = express.Router()
, path = require('path')
, crimestat = require(path.normalize('../models/crimestat'));

router.post('/crimes', function(req, res) {
    crimestat.getCrimes(req.body.from, function(crimes) {
        res.json({
            crimes
        })
    })
});

module.exports = router;