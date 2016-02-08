var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
var winston = require('winston');

describe('Routing', function() {
  var url = 'http://127.0.0.1:3000';
  var productId;
  var categoryId;
  // within before() you can run all the operations that are needed to setup your tests. In this case
  // I want to create a connection with the database, and when I'm done, I call done().
  before(function(done) {
    // In our tests we use the test db
    var mongoUri = 'mongodb://localhost/noderestpresentation'; 
    mongoose.connect(mongoUri);							
    done();
  });
  //Product Test 
  describe('Product', function() { 
    it('should correctly get all products', function(done){
	
	request(url)
		.get('/products/')		
		.expect(200) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}
			done();
		});
	});
    it('should correctly insert new product', function(done){
	var body = {         
		name: 'MEN’S APEX BIONIC JACKET',
		category: 4
	};
	request(url)
		.post('/products')
		.send(body)
		.expect('Content-Type', /json/)
		.expect(200) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}
			// Should.js fluent syntax applied
            assert.equal(res.body.name, 'MEN’S APEX BIONIC JACKET');		
            assert.equal(res.body.category, 4);	
            productId = res.body._id;
			done();
		});
	});
    it('should correctly update product', function(done){
	var body = {         
		name: 'MEN’S APEX BIONIC JACKET',
		category: 4
	};
	request(url)
		.put('/products/' + productId)
		.send(body)		
		.expect(202) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}
			done();
		});
	});
    it('should correctly delete product', function(done){	
	request(url)
		.delete('/products/' + productId)	
		.expect(200) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}            
			done();
		});
	});
  });
    
  //Category Test  
  describe('Category', function() {
    it('should correctly get all categories', function(done){
	
	request(url)
		.get('/categories/')		
		.expect(200) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}
			done();
		});
	}); 
    it('should correctly insert new category', function(done){
	var body = {               
        id: 9,
		name: 'Pants',
		leftTree: 15,
        rightTree: 16
	};
	request(url)
		.post('/categories')
		.send(body)
		.expect('Content-Type', /json/)
		.expect(200) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}
			// Should.js fluent syntax applied
            assert.equal(res.body.name, 'Pants');		           
            categoryId = res.body._id;
			done();
		});
	});
    it('should correctly update category', function(done){
	var body = {         
		id: 9,
		name: 'Hot Pants',
		leftTree: 15,
        rightTree: 16
	};
	request(url)
		.put('/categories/' + categoryId)
		.send(body)		
		.expect(200) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}
			done();
		});
	});
    it('should correctly delete category', function(done){	
	request(url)
		.delete('/categories/' + productId)	
		.expect(200) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}            
			done();
		});
	});
  });
});