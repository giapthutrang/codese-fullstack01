const CategoryService = require('../services/category')
const ProductService = require('../services/product')
const AccountService = require('../services/account')
const OrderService = require('../services/order')

const getAllCategoryId = async (req, res) => {
    const { data, metadata } = await CategoryService.getAllId()
    res.send({
        status: 1,
        metadata,
        data
    })
}
const getAllProductId = async (req, res) => {
    const { data, metadata } = await ProductService.getAllId()
    res.send({
        status: 1,
        metadata,
        data
    })
}
const getAllAccountId = async (req, res) => {
    const { data, metadata } = await AccountService.getAllId()
    res.send({
        status: 1,
        metadata,
        data
    })
}
const getAllOrderId = async (req, res) => {
    const { data, metadata } = await OrderService.getAllId()
    res.send({
        status: 1,
        metadata,
        data
    })
}

module.exports = {
    getAllCategoryId,
    getAllProductId,
    getAllAccountId,
    getAllOrderId
}