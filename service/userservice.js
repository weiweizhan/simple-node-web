'use strict';

require('rootpath')();
const userDao = require('dao/userdao');

function* loadUser(userId) {
    if (!userId) {
        return undefined;
    }

    return yield userDao.loadUser(userId);
}

module.exports = {
    loadUser
};