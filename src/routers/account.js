const R = require('express').Router();
const accountController = require('../controllers/account')

R.get('/', accountController.getAllAccount)

R.get('/:id', accountController.getAccountById)

R.post('/', accountController.createAccount)

R.put('/:id', accountController.updateAccountById)

R.delete('/:id', accountController.deleteAccountById)


module.exports = R