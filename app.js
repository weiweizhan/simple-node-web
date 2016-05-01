'use strict';

const koa = require('koa');
const co = require('co');
const app = koa();
const routerbinder = require('./routerbinder');


co(function* () {

    app.use(routerbinder.init())

    app.listen(3000);
}).catch((error) => {
    console.log(error.stack);
    process.exit(1);
});
