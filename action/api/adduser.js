'use strict';

require('rootpath')();
const userService = require('service/userservice');

function* action(next) {
    let name = this.query.name;
    let phoneNo = this.query.phoneno;
    let addResult = yield userService.addUser(name, phoneNo);
    this.body = addResult;
}

module.exports = {
    url: '/adduser.:suffix',
    action,
    description: '测试DB API'
};