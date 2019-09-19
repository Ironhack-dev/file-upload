const mongoose = require('mongoose');

const { Schema } = mongoose;

const pictureSchema = new Schema({
  name: { type: String },
  originalName: { type: String },
  path: { type: String },
}, {
  timestamps: true,
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
