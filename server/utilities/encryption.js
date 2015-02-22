var crypto = require('crypto');

/*
 Don't send salt and hash_pwd to client in production fix it by your own
 */
exports.createSalt = function() {
    return crypto.randomBytes(128).toString('base64');
}

exports.hashPwd = function(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}