const orderService = require('../services/order')


const getAll = async (req, res) => {
    const { data, metadata } = await orderService.getAll(req.pagination)
    res.send({
        status: 1,
        metadata, data
    })
}
const getById = async (req, res) => {
    const { id } = req.params;
    const data = await orderService.getById(id)
    res.send({
        status: 1, data
    })
}
const create = async (req, res) => {

    await orderService.create(req.body)
    res.send({
        status: 1,

    })
}
const updateById = async (req, res) => {
    const { id } = req.params;
    await orderService.updateById(id, req.body)
    res.send({
        status: 1
    })

}
const deleteById = async (req, res) => {
    const { id } = req.params;
    await orderService.deleteById(id)
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