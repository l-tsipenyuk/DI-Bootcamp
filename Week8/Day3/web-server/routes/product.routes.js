const express = require('express');
const {products} = require('../config/db.js');
const { getAllProducts, getOneProduct, searchForProduct, addProduct, deleteProduct } = require('../controllers/products.controller.js');

const router = express.Router();

// we have one router to export and so don't use {}

router.get("/", getAllProducts);

router.get("/search", searchForProduct);

router.get("/:id", getOneProduct);

router.post("/", addProduct);

router.delete("/:id", deleteProduct)

module.exports = router; 