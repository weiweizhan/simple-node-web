'use strict';

require('rootpath')();
const co = require('co');
const assert = require('assert');
const userService = require('service/userservice');

describe('userservice', function(){
    beforeEach(function(done){
        done();
    });

    describe('#loadUser', function () {
        it('loadUser', function (done) {
            co(function *(){
                let actual = yield userService.loadUser(1);
                assert(actual);
                done();
            })
        });
    });
});