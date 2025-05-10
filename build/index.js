import ExpoIgnoreBatteryOptimizations from "./ExpoIgnoreBatteryOptimizations";
/**
 * @platform android
 */
export function isIgnoringBatteryOptimizations() {
    if (!ExpoIgnoreBatteryOptimizations?.isIgnoringBatteryOptimizations) {
        return false;
    }
    return ExpoIgnoreBatteryOptimizations.isIgnoringBatteryOptimizations();
}
/**
 * @platform android
 */
export async function requestIgnoreBatteryOptimizations() {
    if (!ExpoIgnoreBatteryOptimizations?.requestIgnoreBatteryOptimizations) {
        return;
    }
    await ExpoIgnoreBatteryOptimizations.requestIgnoreBatteryOptimizations();
}
//# sourceMappingURL=index.js.map