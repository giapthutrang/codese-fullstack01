const R = require('express').Router();
const productController = require('../controllers/product')

R.get('/' , productController.getAllProduct)
R.get('/:id' , productController.getProductById)
R.post('/' , productController.creatProduct)
R.put('/:id' , productController.updateProductById)
R.delete('/:id' , productController.deleteProductById)

module.exports = R