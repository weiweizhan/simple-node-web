'use strict';

require('rootpath')();
const testservice = require('service/testservice');

function* action(next) {
    let name = yield testservice.loadTest();

    this.body = name;
}

module.exports = {
    url: '/test.:suffix',
    action,
    description: '测试API'
};