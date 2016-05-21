'use strict';

require('rootpath')();
const db = require('middleware/mysql');

function loadUser(userId) {
    let loadUserSql = "SELECT * FROM WeiXinUser WHERE ID = ? ORDER BY ID DESC;";
    return db.load(loadUserSql, [userId]);
}

function addUser(name, phoneNo) {
    let user = {
        Name: name,
        PhoneNo: phoneNo,
        AddTime: new Date()
    };
    let addUserSql = "INSERT INTO WeiXinUser SET ?";
    return db.insertWithId(addUserSql, user);
}

function updateUserName(id, name) {
    let updateUserNameSql = 'UPDATE WeiXinUser SET Name = ? WHERE ID = ?';
    return db.update(updateUserNameSql, [name, id])
}

module.exports = {
    loadUser,
    addUser,
    updateUserName
};