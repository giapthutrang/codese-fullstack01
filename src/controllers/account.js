const accountService = require('../services/account')

const getAll = async (req, res) => {
    const { data, metadata } = await accountService.getAll(req.pagination)
    res.send({
        status: 1,
        metadata, data
    })
}
const getById = async (req, res) => {
    const { id } = req.params;
    const data = await accountService.getById(id)
    res.send({
        status: 1, data
    })
}
const create = async (req, res) => {

    await accountService.create(req.body)
    res.send({
        status: 1,

    })
}
const updateById = async (req, res) => {
    const { id } = req.params;
    await accountService.updateById(id, req.body)
    res.send({
        status: 1
    })

}
const deleteById = async (req, res) => {
    const { id } = req.params;
    await accountService.deleteById(id)
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