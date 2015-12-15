cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.litekey.cordova.plugins.heartbeat/www/heartbeat.js",
        "id": "com.litekey.cordova.plugins.heartbeat.heartbeat",
        "pluginId": "com.litekey.cordova.plugins.heartbeat",
        "clobbers": [
            "heartbeat"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.litekey.cordova.plugins.heartbeat": "0.2.2",
    "cordova-plugin-whitelist": "1.2.0"
}
// BOTTOM OF METADATA
});