cordova.define("cordova-plugin-networkspeed.networkspeed", function(require, exports, module) {
var exec = require('cordova/exec');

var PLUGIN_NAME = 'networkspeed';

var networkspeed = {
    getNetworkSpeed: function(success, error) {
        exec(success, error, PLUGIN_NAME, "getNetworkSpeed", []);
    }
};

module.exports = networkspeed;

});
