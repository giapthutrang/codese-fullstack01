const productService = require('../services/product')


const getAll = async (req, res) => {
    const { data, metadata } = await productService.getAll(req.pagination)
    res.send({
        status: 1,
        metadata, data
    })
}
const getById = async (req, res) => {
    const { id } = req.params;
    const data = await productService.getById(id)
    res.send({
        status: 1, data
    })
}
const create = async (req, res) => {

    await productService.create(req.body)
    res.send({
        status: 1,

    })
}
const updateById = async (req, res) => {
    const { id } = req.params;
    await productService.updateById(id, req.body)
    res.send({
        status: 1
    })

}
const deleteById = async (req, res) => {
    const { id } = req.params;
    await productService.deletebyId(id)
    res.send({
        status: 1
    })
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}