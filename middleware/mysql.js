'use strict';

require('rootpath')();
const mysql = require("mysql");
const mysqlConfig = require('config/mysql');
const pool = mysql.createPool(mysqlConfig.init()); // TODO 服务器关闭时释放连接池

function* load(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, function(err, rows) {
            if (err) {
                reject(err);
            }
            resolve(rows ? rows[0] : {});
        })
    });
}

function* query(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, function(err, rows) {
            if (err) {
                reject(err);
            }
            resolve(rows);
        })
    });
}

function* insert(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, function(err, result) {
           if (err) {
               reject(false);
           }
            resolve(true);
        });
    });
}

function* insertWithId(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, function(err, result) {
            if (err) {
                reject(-1);
            }
            resolve(result.insertId);
        });
    });
}

function* update(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, function(err, result) {
            if (err) {
                reject(false);
            }
            resolve(true);
        });
    });
}

module.exports = {
    load,
    query,
    insert,
    insertWithId,
    update
};