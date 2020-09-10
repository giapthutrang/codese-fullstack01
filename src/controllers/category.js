const categoryServices = require('../services/category')

const getAllCategory = async (req, res) => {
    try {
        const {data, metadata} = await categoryServices.getAllCategory(req.pagination)
        res.send({
            status: 1,
            data,
            metadata
        });
    } catch (err) {
        console.log(err)
    }
}
const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await categoryServices.getCategorybyId(id)
        res.send({
            status: 1,
            data: data
        })
    } catch (err) {
        console.log(err);
    }
}
const createCategory = async (req, res) => {
    try {
        const { data } = await categoryServices.createCategory(req.body);
        res.send(' Category new ');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const updateCategoryById = async (req, res) => {
    try {
        const { data } = await categoryServices.updateCategoryById(parseInt(req.params.id), req.body)
        res.send('Update Category');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const deleteCategoryById = async (req, res) => {
    try {
        const { data } = await categoryServices.deleteCategoryById(parseInt(req.params.id));
        res.send('delete');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const getAllCategoryId = async (req, res)=>{
    console.log(req.pagination);
    const { data, metadata} = await categoryServices.getAllCategoryId()
    res.send({
        status: 1,
        data,
        metadata,
    })
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById,
    getAllCategoryId
}