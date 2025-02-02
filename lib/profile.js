/**
 * Parse Profile of User
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */

var Profile = module.exports = exports = {};
Profile.parse = function parseProfile (obj) {
    if (typeof obj === 'string') {
        obj = JSON.parse(obj);
    }

    var profile = {};

    profile.id = obj['enc_id'];
    // @note Caution! This is *NOT* Realname!
    profile.displayName = obj['nickname'];
    profile.emails = [{ value: obj.email }];
    profile.mobile = obj.mobile;
    console.log("아무거나");
    console.log(profile);
    console.log(obj);
    console.log("아무거나1");

    return profile
};