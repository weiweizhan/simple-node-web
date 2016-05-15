'use strict';
const fs = require('fs');
const ENV_FILE_PATH = '/data/env/appenv';
const ENV_PRODUCT = 'product';

const QA_OPTIONS = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'test',
    port: 3306
};

const PRODUCT_OPTIONS = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'test',
    port: 3306
};

function init() {
    try {
        let envString = fs.readFileSync(ENV_FILE_PATH, 'utf-8');
        let env = JSON.parse(envString);
        if (env.appenv != ENV_PRODUCT) {
            console.log('[set up mysql env]: qa, host=', QA_OPTIONS.host, ', port=', QA_OPTIONS.port);
            return QA_OPTIONS;
        }
        console.log('[set up mysql env]: product, host=', PRODUCT_OPTIONS.host, ', port=', PRODUCT_OPTIONS.port);
        return PRODUCT_OPTIONS;
    } catch (e) {
        console.log('[read env file error]:', e);
        return QA_OPTIONS;
    }
}

module.exports = {
    init
};