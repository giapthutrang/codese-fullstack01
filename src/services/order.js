const db = require('../utils/db')

const getAllOrder = async ({ limit, offset }) => {
    const sql = `
  SELECT orderId, username, productId, price, amount, note, status, created_at, updated_at
  FROM order
  WHERE isDelete = 0
  LIMIT ? 
  OFFSET ?;`
    const data = await db.queryMulti(sql, [limit, offset]);

    const countSql = `
  SELECT count(orderId) as total
  FROM order
  WHERE isDelete = 0;`;
    const { total } = await db.queryOne(countSql);

    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    }
}

const getOrderById = async (id) => {
    const sql = `
  SELECT orderId, username, productId, price, amount, note, status, created_at, updated_at
  FROM order
  WHERE isDelete = 0 AND orderId = ?;`
    const data = await db.queryOne(sql, [id]);
    return {
        data
    }
}
const createOrder = async ({ username, productId, price, amount, note, status }) => {
    const sql = `
  INSERT INTO order (orderId, username, productId, price, amount, note, status) 
  VALUES(uuid(),?,?,?,?,?,?,?,?,?,?,?);`
    await db.query(sql, [username, productId, price, amount, note, status])
}
const updateOrderById = async (
    orderId,
    { username, productId, price, amount, note, status }) => {
    const sql = `
  UPDATE order 
  SET 
  username = ?,
  productId = ?,
  price = ?, 
  amount = ?, 
  note = ?, 
  status = ?
  WHERE orderId = ? AND isDelete = 0;
  ;`;
    await db.query(sql, [username, productId, price, amount, note, status, orderId])
}
const deleteOrderById = async (id) => {
    const sql = `
  UPDATE order
  SET 
    isDelete = 1
  WHERE orderId = ?;`;
    await db.query(sql, [id]);
}

const getAllOrderById = async () => {
    const sql = `
  SELECT orderId, status
  FROM order
  WHERE isDelete = 0`
    const data = await db.queryMulti(sql);
    return {
        data,
        metadata: {
            length: data.length,
        }
    }
};

module.exports = {
    getAllOrder,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById,
    getAllOrderById
}