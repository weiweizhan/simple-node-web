'use strict';

require('rootpath')();
const userDao = require('dao/userdao');

function loadUser(userId) {
    if (!userId) {
        return undefined;
    }

    return userDao.loadUser(userId);
}

module.exports = {
    loadUser
};