var Product = require("../models/products");

exports.getProducts = function(req, res){
	
	Product.find({}).then(function(foundItems){
		var firstFoundItem = JSON.stringify(foundItems[0]);
		res.send(firstFoundItem);
	});
};

exports.getProduct = function(req, res){
	
	Product.find({_id:req.params.taskID}, function(err, product){
		if(err){
			res.send(err)
		}
		
		res.json(product);
	});
	
};

exports.addProduct = function(req, res){
	
	var task = new Product();
	
	task.name = req.body.name;
	task.barcode = req.body.barcode;
	task.price = req.body.price;
	
	task.save(function(err){
		if(err){
			res.send(err)
		}
		
	res.send({message:"product was saved", data:task});
	});

};

exports.updateProduct = function(req, res){
	
	Product.update({_id:req.params.taskID}, {
		name:req.body.name,
		barcode:req.body.barcode,
		price:req.body.price,
	}, function(err, num, raw){
		if(err){
			res.send(err)
		}
		res.json(num);
	});
	
};

exports.deleteProduct = function(req, res){
	
	Product.remove({_id:req.params.taskID}, function(err){
		if(err){
			res.send(err)
		}
		res.json({message:"product was deleted"});
	});
	
};