'use strict';

require('rootpath')();
const userService = require('service/userservice');

function* action(next) {
    let id = this.query.id;
    let name = this.query.name;
    let addResult = yield userService.updateUserName(id, name);
    this.body = addResult;
}

module.exports = {
    url: '/user/updatename.:suffix',
    action,
    description: '测试DB API'
};