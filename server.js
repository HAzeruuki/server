var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var productController = require("./controllers/products");

mongoose.connect('mongodb://localhost:27017/nodetest');

var app = express();
app.use(bodyParser.urlencoded({
	extended:true
}));

var router = express.Router();

app.use("/api", router);

router.route("/products/").get(productController.getProducts);

router.route("/product/:taskID").get(productController.getProduct);

router.route("/addProduct").post(productController.addProduct);

router.route("/updateProduct/:taskID").post(productController.updateProduct);

router.route("/removeProduct/:taskID").get(productController.deleteProduct);


app.listen(3000);