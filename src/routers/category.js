const R = require('express').Router();
const categoryController = require('../controllers/category')

R.get('/', categoryController.getAllCategory)

R.get('/:id', categoryController.getCategoryById)

R.post('/', categoryController.createCategory)

R.put('/:id', categoryController.updateCategoryById)

R.delete('/:id', categoryController.deleteCategoryById)

// giờ em chưa pull về mà code ở đây sẽ bị conflict<xung đột ý>
module.exports = R