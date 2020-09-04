
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  characterOn: {
    type: Boolean,
    required: true
  }
});

let Level = mongoose.model("Level", LevelSchema);

module.exports = Level;