cordova.define("cordova-plugin-dns.DNSPlugin", function(require, exports, module) {
var dnsPlugin = {
    resolve: function(hostname, success, error) {
        cordova.exec(success, error, "DNSPlugin", "resolve", [hostname]);
    }
};

module.exports = dnsPlugin;

});
