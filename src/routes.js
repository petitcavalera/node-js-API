module.exports = function(app){

	var categories = require('./controllers/categories');
    var products = require('./controllers/products');

	app.get('/categories', categories.findAll); 
	app.get('/categories/:id', categories.findById); 
    app.put('/categories/:id', categories.update);
    app.post('/categories', categories.add);
    app.delete('/categories/:id', categories.delete);
	app.get('/import', categories.import);  

    app.get('/products', products.findAll); 
	app.get('/products/:id', products.findById); 
    app.put('/products/:id', products.update);
    app.post('/products', products.add);
    app.delete('/products/:id', products.delete);
	app.get('/import_products', products.import);
    
	app.get('/hello', function(req, res) {
	    res.send('Hello New York\n');
	});

};
