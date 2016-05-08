'use strict';

require('rootpath')();
const testservice = require('service/testservice');

function* action(next) {
    this.body = yield testservice.loadTest();
}

module.exports = {
    url: '/test.:suffix',
    action,
    description: '测试API'
};