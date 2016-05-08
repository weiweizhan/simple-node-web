'use strict';

const db = require('config/db');

function loadUser(userId) {
    let loadUserSql = "SELECT * FROM WeiXinUser WHERE ID =" + userId
        + " ORDER BY ID DESC;";
    return db.load(loadUserSql);
}

module.exports = {
    loadUser
};