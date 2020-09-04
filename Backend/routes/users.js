var express = require('express');
var router = express.Router();
var Level = require('../models/levelModel');

/* GET users listing. */
router.route("/fetch").get(function(req, res) {
  Level.find({}, function(err, result){
    if (err) {
      res.send(err)
    } else{
      res.send(result)
    }
  });
});

module.exports = router;
