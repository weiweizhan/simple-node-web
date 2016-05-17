'use strict';

/**
 * 生成Error对象
 *
 * @param {Number} errorCode - error对象的错误码
 * @param {String} message - error对象的错误信息
 * @return {Object} error对象
 */
function createError(errorCode, message) {
    return {
        errorCode,
        message
    };
}



/**
 * 生活服务业务用户端的错误码，错误码组成部分为以下格式：（错误类型、业务、功能点）
 *
 * 错误类型：1--》参数错误；2--》业务错误
 * 业务代号：
 *    [00-10): 用户相关
 *    [10-20): 教练相关
 *
 */
const errors = {
    IL_GENERATE_SHORT_LINK_INVALID_TOKEN: createError(0, '无权操作'),
    IL_LOAD_USER_INVALID_USER_ID: createError(10000, '请输入用户ID!')
};

module.exports = {
    errors
};
