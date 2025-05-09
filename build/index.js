import ExpoIgnoreBatteryOptimizations from "./ExpoIgnoreBatteryOptimizations";
export function isIgnoringBatteryOptimizations() {
    if (!ExpoIgnoreBatteryOptimizations?.isIgnoringBatteryOptimizations) {
        return false;
    }
    return ExpoIgnoreBatteryOptimizations.isIgnoringBatteryOptimizations();
}
export async function requestIgnoreBatteryOptimizations() {
    if (!ExpoIgnoreBatteryOptimizations?.requestIgnoreBatteryOptimizations) {
        return;
    }
    await ExpoIgnoreBatteryOptimizations.requestIgnoreBatteryOptimizations();
}
//# sourceMappingURL=index.js.map