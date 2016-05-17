'use strict';

const ApplicationError = require('./error').ApplicationError;

/**
 * 当expression表达式不为true，会抛异常对象
 *
 * @param  {Boolean} expression - 需要判断的表达式结果
 * @param  {Object} error - Error对象（@see module vcerrors）
 *
 * @throws ApplicationError
 */
function isTrue(expression, error) {
    if (expression === false) {
        throw createApplicationError(error);
    }
}

/**
 * 根据error对象生成ApplicationError对象
 *
 * @param {Object} err - error对象,如下格式
 * {
 *         errorCode : xx,
 *         message : xx
 * }
 * @return {ApplicationError}
 */
function createApplicationError(err) {
    return new ApplicationError(err.errorCode, err.message);
}

module.exports = {
    isTrue
};
