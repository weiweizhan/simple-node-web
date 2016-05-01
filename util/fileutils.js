'use strict';

const fs = require('fs');

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
    getAllFiles
};
