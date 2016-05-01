'use strict';

const koa = require('koa');
const co = require('co');
const app = koa();


co(function* () {

    app.use(function *() {
        this.body = 'hello';
    });

    app.listen(3000);
}).catch((error) => {
    console.log(error.stack);
    //process.exit(1);
});
