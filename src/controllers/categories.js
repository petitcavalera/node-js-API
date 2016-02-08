var mongoose = require('mongoose'),
Category = mongoose.model('Category');

exports.findAll = function(req, res){
  Category.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Category.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Category.update({'_id':id}, updates, function (err, numberAffected, raw) {
    if (err) return console.log(err);
    console.log('Updated %d categories', numberAffected);
    return res.send(raw);
  });
}

exports.add = function(req, res) {
  Category.create(req.body, function (err, Category) {
    if (err) return console.log(err); 
    return res.send(Category);
  });
}

exports.delete = function(req, res){
  var id = req.params.id;
  Category.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  Category.create( 
    { "id":1, "name": "Clothes", "leftTree": 1, "rightTree": 18 },
    { "id":2, "name": "Man", "leftTree": 2, "rightTree": 9 },
    { "id":3, "name": "Woman", "leftTree": 10, "rightTree": 17 },
    { "id":4, "name": "Jacket", "leftTree": 3, "rightTree": 4 },
    { "id":5, "name": "Shirt", "leftTree": 5, "rightTree": 6 },
    { "id":6, "name": "T-Shirt", "leftTree": 7, "rightTree": 8 },
    { "id":7, "name": "Jacket", "leftTree": 11, "rightTree": 12 },
    { "id":8, "name": "Skirt", "leftTree": 13, "rightTree": 14 }
  , function (err) {
    if (err) return console.log(err); 
    return res.send(202);
  });
};