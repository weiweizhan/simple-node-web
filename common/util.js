'use strict';

const fs = require('fs');

function isArrayEmpty(arr) {
    return !(arr && arr.length && arr.length > 0);
}

/**
 * get all files under root file
 * @param  {string} root [root file string]
 * @return {array}      [filepath array]
 */
function getAllFiles(root) {
    let res = [];
    let files = fs.readdirSync(root);

    files.forEach((file) => {
        let pathname = root + '/' + file;
        let stat = fs.lstatSync(pathname);

        if (!stat.isDirectory()) {
            res.push(pathname);
        } else {
            res = res.concat(getAllFiles(pathname));
        }
    });

    return res;
}

module.exports = {
    isArrayEmpty,
    getAllFiles
};
