const R = require('express').Router();
const categoryController = require('../controllers/category')

const {tryCatch} = require('../middlewares/errorHandle')


R.get('/', tryCatch(categoryController.getAllCategory))

R.get('/:id', tryCatch(categoryController.getCategoryById))

R.post('/', tryCatch(categoryController.createCategory))

R.put('/:id', tryCatch(categoryController.updateCategoryById))

R.delete('/:id', tryCatch(categoryController.deleteCategoryById))

module.exports = R