const db = require('../utils/db')

const getAllAccount = async ({ limit, offset }) => {
    const sql = `
  SELECT username, password, role, display, email, phone, address, birthday, avatar, status, created_at, updated_at
  FROM account
  WHERE isDelete = 0
  LIMIT ? 
  OFFSET ?;`
    const data = await db.queryMulti(sql, [limit, offset]);

    const countSql = `
  SELECT count(username) as total
  FROM account
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

const getAccountById = async (id) => {
    const sql = `
  SELECT username, password, role, display, email, phone, address, birthday, avatar, status, created_at, updated_at
  FROM account
  WHERE isDelete = 0 AND productId = ?;`
    const data = await db.queryOne(sql, [id]);
    return {
        data
    }
}
const createAccount = async ({ username, password, role, display, email, phone, address, birthday, avatar, status }) => {
    const sql = `
  INSERT INTO account (username, password, role, display, email, phone, address, birthday, avatar, status) 
  VALUES(uuid(),?,?,?,?,?,?,?,?,?,?,?);`
    await db.query(sql, [username, password, role, display, email, phone, address, birthday, avatar, status])
}
const updateAccountById = async (
    username,
    { password, role, display, email, phone, address, birthday, avatar, status }) => {
    const sql = `
  UPDATE account 
  SET 
  password = ?, 
  role = ?, 
  display = ?, 
  email = ?, 
  phone = ?, 
  address = ?, 
  birthday = ?, 
  avatar = ?, 
  status = ?
  WHERE username = ? AND isDelete = 0;
  ;`;
    await db.query(sql, [password, role, display, email, phone, address, birthday, avatar, status, username])
}
const deleteAccountById = async (id) => {
    const sql = `
  UPDATE account
  SET 
    isDelete = 1
  WHERE productId = ?;`;
    await db.query(sql, [id]);
}

const getAllAccountById = async () => {
    const sql = `
  SELECT username, display
  FROM account
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
    getAllAccount,
    getAccountById,
    createAccount,
    updateAccountById,
    deleteAccountById,
    getAllAccountById
}