'use strict';

require('rootpath')();
const assert = require('middleware/error/assert');
const errors = require('errors').errors;
const userService = require('service/userservice');

function* action(next) {
    let userId = this.query.id;

    assert.isTrue(userId > 0, errors.IL_LOAD_USER_INVALID_USER_ID);

    let user = yield userService.loadUser(userId);
    if (!user) {
        this.body = 'user not exist';
        return;
    }

    this.body = user;
}

module.exports = {
    url: '/loaduser.:suffix',
    action,
    description: '测试DB API'
};