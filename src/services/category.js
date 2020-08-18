const db = require('../utils/db')

const getAll = async ({ limit, offset }) => {
    const sql = `SELECT display,description,imageUrl,categoryId
     FROM category
     WHERE isDelete = 0
     LIMIT ?
     OFFSET ?`
    const countSql = `SELECT count(categoryId) as total FROM category;`
    const data = await db.queryMulti(sql, [limit, offset]);
    const { total } = await db.queryOne(countSql);
    return {
        metadata: {
            length: data.length,
            total
        }, data
    }
}
const getAllId = async () => {
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

const getById = async (id) => {
    const sql = `SELECT  display,description,imageUrl,categoryId
     FROM category WHERE categoryId = ?
     LIMIT 1 ;`;
    const result = await db.queryOne(sql, [id]);
    return result;
}
const create = async ({ display, description, imageUrl }) => {
    const sql = `INSERT INTO category (categoryId,display,description,imageUrl)
    VALUES(uuid(),?,?,?);`;
    await db.query(sql, [display, description, imageUrl])
}

const updateById = async (id) => {
    const sql = `UPDATE category
    SET
        display = ?
        description = ?
        imageUrl = ?
    WHERE categoryId = ?;`;
    await db.query(sql, [display, description, imageUrl, id])
}

const deleteById = async (id) => {
    const sql = `UPDATE category
    SET
       isDelete=1
    WHERE categoryId = ?;`;
    await db.query(sql, id)
}
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    getAllId
}