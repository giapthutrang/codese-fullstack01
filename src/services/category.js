const db = require('../utils/db')

const getAllCategory = async ({ limit, offset }) => {
    const sql = `
    SELECT display, description, imageUrl, categoryId
    FROM category
    WHERE isDelete = 0
    LIMIT ?
    OFFSET ?`
    const data = await db.queryMulti(sql, [limit, offset]);
    const countSql = `
    SELECT count(categoryId) as total 
    FROM category;`;
    const  total  = await db.queryOne(countSql);
    console.log(total);
    return {
        metadata: {
            length: data.length,
            total
        }, data
    }
}
const getAllCategoryById = async () => {
    const sql = `SELECT categoryId,display
     FROM category
     WHERE isDelete =0
   `
    const data = await db.queryMulti(sql);
    return {
        status: 1,
        metadata: {
            length: data.length,
        }, data
    }
}

const getCategoryById = async (id) => {
    const sql = `
    SELECT  display, description, imageUrl, categoryId
    FROM category WHERE categoryId = ?
    LIMIT 1 ;`;
    const result = await db.queryOne(sql, [id]);
    return result;
}
const createCategory = async ({ display, description, imageUrl }) => {
    const sql = `INSERT INTO category (categoryId, display, description, imageUrl)
    VALUES(uuid(),?,?,?);`;
    await db.query(sql, [display, description, imageUrl])
}

const updateCategoryById = async (id) => {
    const sql = `UPDATE category
    SET
        display = ?
        description = ?
        imageUrl = ?
    WHERE categoryId = ?;`;
    await db.query(sql, [display, description, imageUrl, id])
}

const deleteCategoryById = async (id) => {
    const sql = `UPDATE category
    SET
       isDelete=1
    WHERE categoryId = ?;`;
    await db.query(sql, id)
}
module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById,
    getAllCategoryById
}