'use strict';

require('rootpath')();

function* action(next) {
    let body = '<html><body>测试</body></html>';


    this.body = body;
}

module.exports = {
    url: '/html.:suffix',
    action,
    description: '测试html'
};