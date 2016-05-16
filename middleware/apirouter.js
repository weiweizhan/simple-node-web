'use strict';

require('rootpath')();

const suffix2Format = {
    'json' : jsonFormat,
    'jsonp' : jsonpFormat
};

/**
 * 返回json格式数据
 * @param data
 */
function jsonFormat(data) {
    return JSON.stringify(data);
}

/**
 * 返回jsonp格式数据
 */
function jsonpFormat(data, app) {
    let callbackValue = app.query["callback"];
    return callbackValue + "(" + jsonFormat(data) + ")";
}

/**
 * 根据后缀决定渲染数据，其中：
 * 1、suffix : URL请求的后缀
 * 2、data : api的执行结果
 * 3、app : koa
 */
function response(suffix, data, app) {
    if (!suffix2Format[suffix]) {
        return jsonFormat(data);
    }
    return suffix2Format[suffix](data, app);
}

/**
 * 判断是否有后缀
 */
function hasSuffix(context){
    return (context && context.params && context.params.suffix);
}

module.exports = function *(next) {
    try {
        yield next;
        let params = this.params;
        if (!hasSuffix(this)){
            return;
        }

        let suffix = params && params.suffix;
        var body = this.body;
        this.body = response(suffix, {
            code : 200,
            msg : body
        }, this);
    } catch(e) {
        console.log(e.stack);
        //this.logger.error(e.stack);
        if (!hasSuffix(this)){
            return;
        }
        let params = this.params;
        if (!(params && params.suffix)) return;
        this.body = response(params.suffix, {
            code : 500,
            msg : e
        }, this);
    }
};