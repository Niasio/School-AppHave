cordova.define("cordova-dns-plugin.DnsQuery", function(require, exports, module) {
var exec = require('cordova/exec');

var DnsQuery = function() {};

DnsQuery.prototype.resolve = function(hostname) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, "DnsQuery", "resolve", [hostname]);
    });
};

DnsQuery.prototype.resolveAll = function(hostname) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, "DnsQuery", "resolveAll", [hostname]);
    });
};

DnsQuery.prototype.srvLookup = function(srv, hostname) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, "DnsQuery", "srvLookup", [srv, hostname]);
    });
};

module.exports = new DnsQuery();

});
