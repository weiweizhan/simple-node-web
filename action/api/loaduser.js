'use strict';

require('rootpath')();
const userService = require('service/userservice');

function* action(next) {
    let userId = this.query.id;

    if (!userId) {
        throw 'userId should greater than 0';
    }

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