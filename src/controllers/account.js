const accountService = require('../services/account')

const getAllAccount = async (req, res) => {
    const { data, metadata } = await accountService.getAll(req.pagination)
    res.send({
        status: 1,
        metadata, data
    })
}
const getAccountById = async (req, res) => {
    const { id } = req.params;
    const data = await accountService.getById(id)
    res.send({
        status: 1, data
    })
}
const createAccount = async (req, res) => {

    await accountService.create(req.body)
    res.send({
        status: 1,

    })
}
const updateAccountById = async (req, res) => {
    const { id } = req.params;
    await accountService.updateById(id, req.body)
    res.send({
        status: 1
    })

}
const deleteAccountById = async (req, res) => {
    const { id } = req.params;
    await accountService.deleteById(id)
    res.send({
        status: 1
    })
}
module.exports = {
    getAllAccount,
    getAccountById,
    createAccount,
    updateAccountById,
    deleteAccountById
}