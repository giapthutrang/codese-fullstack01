const categoryService = require('../services/category')
const db = require('../utils/db')



const getAll = async (req, res) => {
    const { data, metadata } = await categoryService.getAll(req.pagination)
    res.send({
        status: 1,
        metadata, data

    })
}
const getById = async (req, res) => {
    const { id } = req.params;
    const data = await categoryService.getyId(id);

    res.send({
        status: 200,
        data
    })


}
const create = async (req, res) => {

    await categoryService.create(req.body)
    res.send({
        status: 1
    })
}

const updateById = async (req, res) => {
    const { id } = req.params;
    await categoryService.updateById(id, req.body)
    res.send({
        status: 1
    })

}
const deleteById = async (req, res) => {
    const { id } = req.params;
    await categoryService.deleteById(id)
    res.send({
        status: 1
    })
}


module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,

}