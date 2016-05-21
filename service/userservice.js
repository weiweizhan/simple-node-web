'use strict';

require('rootpath')();
const userDao = require('dao/userdao');

function* loadUser(userId) {
    if (!userId) {
        return undefined;
    }

    return yield userDao.loadUser(userId);
}

function* addUser(name, phoneNo) {
    return yield userDao.addUser(name, phoneNo);
}

function* updateUserName(id, name) {
    return yield userDao.updateUserName(id, name);
}

module.exports = {
    loadUser,
    addUser,
    updateUserName
};