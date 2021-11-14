const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bufferSchema = new Schema({
  rfid: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  Temperature: { type: Number, required: true },
  HeartRate: { type: String, required: true },
  OxygenLevels: { type: Number, required: true },
  
  emergencyStatus:{type: Number,required:true},
  _class:{type:String,required:true},
}, {
  timestamps: false,
});

const Buffer = mongoose.model('Buffer', bufferSchema);

module.exports = Buffer;