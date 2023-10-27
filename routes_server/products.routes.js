const express=require("express");
const productController = require("../controllers_server/products.controllers")
const router=express.Router();

router.route("/").get(productController.getAllProducts).post(productController.addProduct);
router.route("/:id").get(productController.getProductById).delete(productController.deleteProductById).patch(productController.updateProduct);

//patch: reparer une chose
module.exports=router