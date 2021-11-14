const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  rfid:{type:String, required:true},
  disease: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: Date, required: true },
  weight: { type: Number, required:true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;