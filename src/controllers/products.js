var mongoose = require('mongoose'),
Product = mongoose.model('Product');

exports.findAll = function(req, res){
  Product.find({},function(err, results) {
    return res.send(results);
  });
};
exports.findById = function(req, res){
  var id = req.params.id;
  Product.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};
exports.add = function(req, res) {
  Product.create(req.body, function (err, product) {
    if (err) return console.log(err);
    return res.send(product);
  });
}
exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Product.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d products', numberAffected);
      res.send(202);
  });
}
exports.delete = function(req, res){
  var id = req.params.id;
  Product.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  Product.create(
    { "name": "Mens Torrential Rain 3-in-1 Jacket", "category": 4 },
    { "name": "Mens Amply 3-in-1 Jacket","category": 4 },
    { "name": "Womens Loreto Triclimate Jacket", "category": 7 },
    { "name": "Womens Samy Down Jacket", "category": 7}
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};