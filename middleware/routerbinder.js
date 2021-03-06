'use strict';

require('rootpath')();
const os = require('os');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const router = require('koa-router')();
const fileUtils = require('util/fileutils');

const OPTION_DEFAULT = {
    actionDir: '../action',
    apilistPath: '../api.json'
};

const DEFAULT_METHODS = ['get', 'post'];

/**
 * bind api to router
 * @return {GeneratorFunction} to register by app.use
 */
function init() {
    let options = OPTION_DEFAULT;
    let actionDir = path.resolve(__dirname, options.actionDir);
    let files = fileUtils.getAllFiles(actionDir) || [];
    let fileConfig;
    let methods;
    let action;
    let api2Config = {};
    _.each(files, (file) => {
        fileConfig = require(file);
        // exports没有url属性,那么过滤掉
        if (!(fileConfig && fileConfig.url && _.isFunction(fileConfig.action))) {
            return true;
        }

        methods = fileConfig.methods || DEFAULT_METHODS;
        methods = Array.isArray(methods) ? methods : [methods];

        action = fileConfig.action;
        router.register(fileConfig.url, methods, [action]);
        // 记录请求路径与文件
        if (api2Config[fileConfig.url]) {
            throw new Error('Duplicate define router url: ' + fileConfig.url + ',please check actions');
        }
        fileConfig.filePath = file;
        api2Config[fileConfig.url] = fileConfig;
    });
    writeApiList(api2Config, options.apilistPath);
    return router.routes();
}

/**
 * save api list to file
 * @param  {Object} api2Config - map of api to config of api
 * @param  {String} relativePath - file path
 */
function writeApiList(api2Config, relativePath) {
    if (!(api2Config && relativePath)) {
        return;
    }
    let apis = _.keys(api2Config);
    let contents = ['api清单：', os.EOL, '======='.repeat(15)];
    _.each(apis, (api) => {
        let config = api2Config[api] || '';
        let contentStr = '';

        config.description = config.description || '';
        let descriptions = config.description.split('\n');

        contentStr = contentStr.concat('======='.repeat(15));
        contentStr = contentStr.concat(os.EOL).concat(os.EOL);
        contentStr = contentStr.concat('api路径：').concat(os.EOL).concat('\t' + api).concat(os.EOL);
        contentStr = contentStr.concat('文件路径：').concat(os.EOL).concat('\t' + config.filePath.replace(__dirname, '')).concat(os.EOL);
        contentStr = contentStr.concat('描述：').concat(os.EOL).concat('\t' + descriptions.join(os.EOL));
        contentStr = contentStr.concat(os.EOL);
        contents.push(contentStr);
    });

    fs.writeFileSync(relativePath, contents.join(os.EOL.repeat(3)), 'utf-8');
}

module.exports = {
    init
};
