'use strict';

const koa = require('koa');
const co = require('co');
const app = koa();

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000);

//co(function* () {
//
//    this.body = 'hello';
//
//
//    app.listen();
//}).catch((e) => {
//    console.log(e.stack);
//    app.context.logger.error(e.stack);
//    process.exit(1);
//});
