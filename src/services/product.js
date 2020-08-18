const db = require('../utils/db')

const getAll = async ({ limit, offset }) => {
    const sql = `SELECT productId,display,provider,description,imageUrl,priceIn,priceOut,
    priceSale,shipday,isDelete,status,instock,categoryId,created_at,updated_at 
    FROM product WHERE isDelete = 0
    LIMIT ?
    OFFSET ?`
    const data = await db.queryMulti(sql, [limit, offset])
    const countSql = `SELECT count(productId) as total FROM product;`

    const total = await db.queryOne(countSql)
    return {
        metadata: {
            length: data.length,
            total,
        }, data
    }
}
const getById = async (id) => {
    const sql = `SELECT productId,display,provider,description,imageUrl,priceIn,priceOut,
    priceSale,shipday,isDelete,status,instock,categoryId,created_at,updated_at 
    FROM product WHERE isDelete = 0 AND productId = ? 
    LIMIT 1`
    const data = await db.queryOne(sql, id)
    return data

}
const create = async ({ display,
    provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, isDelete, status, instock, categoryId }) => {
    const sql = `INSERT INTO product(productId,display,provider,description,imageUrl,priceIn,priceOut,
            priceSale,shipday,isDelete,status,instock,categoryId)
            VALUES(uuid(),?,?,?,?,?,?,?,?,?,?,?,?)`;
    await db.query(sql, [display, provider, description, imageUrl, priceIn, priceOut,
        priceSale, shipday, isDelete, status, instock, categoryId])

}
const updateById = async (productId, { display,
    provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, status, instock, categoryId }) => {
    const sql = `UPDATE product 
        SET display = ?,
            provider = ? , 
            description = ?, 
            imageUrl = ?,
             priceIn = ?, 
             priceOut = ?, 
             priceSale = ?, 
             shipday = ? , 
             status = ?, 
             instock = ?, 
             categoryId =? 
             WHERE productId = ? AND isDelete = 0 ;`
        ;
    await db.query(sql, [display,
        provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, status, instock, categoryId, productId])

}
const deleteById = async (id) => {
    const sql = `UPDATE product 
    SET isDELETE = 1 
    WHERE productId = ?`
    await db.query(sql, id)

}

const getAllId = async () => {
    const sql = `SELECT productId,display 
    FROM product
    WHERE isDelete = 0 ;`
    const data = await db.queryMulti(sql)
    return {
        metadata: {
            length: data.length
        }, data
    }
}
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    getAllId
}