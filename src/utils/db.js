const mysql = require('mysql')
// const { query } = require('express')

const config = {
    host: 'codedidungso.me',
    port: 3306,
    user: 'root',
    password: 'Codese2020',
    database: 'shopese-thien'
}

const pool = mysql.createPool(config)

const query = (sql, params) => {
    pool.query(sql, params, (err, result) => {
        return new Promise((resolve, reject) => {
            pool.query(sql, params, (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

    });
}

const queryOne = (sql, params) => {
    pool.query(sql, params, (err, result) => {
        return new Promise((resolve, reject) => {
            pool.query(sql, params, (err, result) => {
                if (err) reject(err)
                else resolve(result[0])
            })
        })

    });

}

const queryMulti = (sql, params) => {
    
    return new Promise((resolve, reject) => {
      pool.query(sql, params, (err, result) => {
        if (err) reject(err)
        else resolve(result)
      })
    })  
  }

module.exports = {
    query,
    queryOne,
    queryMulti
}
