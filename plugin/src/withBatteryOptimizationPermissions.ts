import {
 AndroidConfig,
 type ConfigPlugin,
 createRunOncePlugin,
} from 'expo/config-plugins';

const pkg = require('../../package.json');

const BATTERY_OPT_PERMISSION = 'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS';

const withBatteryOptimizationPermission: ConfigPlugin<void> = (config) => {
  return AndroidConfig.Permissions.withPermissions(config, [
    BATTERY_OPT_PERMISSION,
  ]);
};

export default createRunOncePlugin(
  withBatteryOptimizationPermission,
  pkg.name,
  pkg.version
);