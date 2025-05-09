"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("expo/config-plugins");
const pkg = require('../../package.json');
const BATTERY_OPT_PERMISSION = 'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS';
const withBatteryOptimizationPermission = (config) => {
    return config_plugins_1.AndroidConfig.Permissions.withPermissions(config, [
        BATTERY_OPT_PERMISSION,
    ]);
};
exports.default = (0, config_plugins_1.createRunOncePlugin)(withBatteryOptimizationPermission, pkg.name, pkg.version);
