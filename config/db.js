'use strict';

const mysql = require("mysql");
const mysqlConfig = require('./mysql');

//var pool  = mysql.createPool({
//    connectionLimit: 10,
//    host: 'localhost',
//    user: 'nodejs',
//    password: 'nodejs',
//    database:'test',
//    port: 3306
//});
const pool = mysql.createPool(mysqlConfig.init());

function *load(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, function(err, rows) {
            if (err) {
                reject(err);
            }
            resolve(rows ? rows[0] : {});
        })
    });
}

function *query(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, function(err, rows) {
            if (err) {
                reject(err);
            }
            resolve(rows);
        })
    });
}

module.exports = {
    load,
    query
};