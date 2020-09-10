const R = require('express').Router();
const productController = require('../controllers/product')
const { tryCatch } = require('../middlewares/errorHandle')

// R.get('/',
//   tryCatch(productController.getAllProduct));
R.get('/',productController.getAllproduct);

R.get('/:id',
  tryCatch(productController.getProductbyId));

R.post('/',
  tryCatch(productController.createProduct));

R.put('/:id',
  tryCatch(productController.updateProduct));
  
R.delete('/:id',
  tryCatch(productController.deleteProduct));

module.exports = R