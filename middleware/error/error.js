'use strict';

function ApplicationError(errorCode, msg) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.errorCode = errorCode;
    this.message = msg;
}

exports.ApplicationError = ApplicationError;
