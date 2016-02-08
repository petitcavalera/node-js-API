var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CategorySchema = new Schema({
  id: Number,
  name: String,
  leftTree: String,
  rightTree: String
});

mongoose.model('Category', CategorySchema);
