cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.litekey.cordova.plugins.heartbeat/www/heartbeat.js",
        "id": "com.litekey.cordova.plugins.heartbeat.heartbeat",
        "pluginId": "com.litekey.cordova.plugins.heartbeat",
        "clobbers": [
            "heartbeat"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "com.litekey.cordova.plugins.heartbeat": "0.2.2"
}
// BOTTOM OF METADATA
});