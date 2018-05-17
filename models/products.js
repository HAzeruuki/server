var mongoose = require("mongoose");

var Product = mongoose.Schema({
	
	name:{
		type:String,
		default:"",
		required:true
	},
	barcode: {
		type:Number,
		default:0,
		required:true
	},
	price: {
		type:Number,
		default:0,
		required:true
	}

});

module.exports = mongoose.model("Product", Product);