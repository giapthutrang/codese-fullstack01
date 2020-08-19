const R = require('express').Router();
const orderController = require('../controllers/order')

R.get('/', orderController.getAllOrder)

R.get('/:id', orderController.getOrderById)

R.post('/', orderController.createOrder)

R.put('/:id', orderController.updateOrderById)

R.delete('/:id', orderController.deleteOrderById)

module.exports = R