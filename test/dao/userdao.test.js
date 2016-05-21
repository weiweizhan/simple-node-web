'use strict';

require('rootpath')();
const co = require('co');
const assert = require('assert');
const userDao = require('dao/userdao');

describe('userdao', function(){
    beforeEach(function(done){
        done();
    });

    describe('#loadUser', function () {
        it('loadUser', function (done) {
            co(function *(){
                let actual = yield userDao.loadUser(1);
                assert(actual);
                done();
            })
        });
    });
});