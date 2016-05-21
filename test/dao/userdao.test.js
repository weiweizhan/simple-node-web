'use strict';

require('rootpath')();
const co = require('co');
const userDao = require('dao/userdao');

describe('userdao', function(){
    beforeEach(function(done){
        done();
    });

    describe('#loadUser', function () {
        it('loadUser', function (done) {
            co(function *(){
                let actual = yield userDao.loadUser(1);
                done();
            })
        });
    });

})