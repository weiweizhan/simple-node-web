'use strict';

require('rootpath')();

const suffix2Format = {
    'json' : jsonFormat,
    'jsonp' : jsonpFormat
};

/**
 * format data to json
 */
function jsonFormat(data) {
    return JSON.stringify(data);
}

/**
 * format data to jsonp
 */
function jsonpFormat(data, app) {
    let callbackValue = app.query["callback"];
    return callbackValue + "(" + jsonFormat(data) + ")";
}

/**
 * render data by the suffix of api
 */
function response(suffix, data, app) {
    if (!suffix2Format[suffix]) {
        return jsonFormat(data);
    }
    return suffix2Format[suffix](data, app);
}

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