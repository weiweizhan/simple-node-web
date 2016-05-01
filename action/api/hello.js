'use strict';

function* action(next) {
    this.body = "this is a test api";
}

module.exports = {
    url: '/test.:suffix',
    action,
    description: '测试API'
};