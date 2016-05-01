'use strict';

function* action(next) {
    let name = this.query.name;
    if (!name) {
        name = 'user';
    }

    this.body = 'hi, ' + name;
}

module.exports = {
    url: '/param.:suffix',
    action
};