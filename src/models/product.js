var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  desciption: String,
  category: Number
  
});

mongoose.model('Product', ProductSchema);
