
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  question1: {
    type: String,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  title1: {
    type: String,
    required: true
  }, 
  title2: {
    type: String,
    required: true
  },
  text1: {
    type: String,
    required: true
  },
  text2: {
    type: String,
    required: true
  },
});

let Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;