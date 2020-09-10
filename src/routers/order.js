const R = require('express').Router();
const orderController = require('../controllers/order')

const { tryCatch } = require('../middlewares/errorHandle')

R.get('/',
  tryCatch(orderController.getAllOrder));
//R.get('/',OrderController.getAllOrder)

R.get('/:id',
  tryCatch(orderController.getOrderbyId));

R.post('/',
  tryCatch(orderController.creatOrder));

R.put('/:id',
  tryCatch(orderController.updateOrder));
  
R.delete('/:id',
  tryCatch(orderController.deleteOrder));

module.exports = R