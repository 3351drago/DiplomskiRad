var express = require('express');
var router = express.Router();
var Question = require('../models/questionModel');

/* GET users listing. */
router.route("/fetch").get(function(req, res) {
  Question.find({}, function(err, result){
    if (err) {
      res.send(err)
    } else{
      res.send(result)
    }
  });

//   var ques= new Question({
//       _id: "2",
//       question1: "Question",
//       questionText:"what is 10 plus 9",
//       answer:"21",
//       title1:"hej",
//       title2:"hej,hej",
//       text1:"ajde dalje",
//       text2:"jos dalje"
//   });

//   ques.save(function(err){
//       if (err) throw err;

//       console.log("Question saved");
//   });
});

module.exports = router;
