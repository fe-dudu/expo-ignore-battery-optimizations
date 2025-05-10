import ExpoIgnoreBatteryOptimizations from "./ExpoIgnoreBatteryOptimizations";

/**
 * @platform android
 */
export function isIgnoringBatteryOptimizations(): boolean {
  if (!ExpoIgnoreBatteryOptimizations?.isIgnoringBatteryOptimizations) {
    return false;
  }

  return ExpoIgnoreBatteryOptimizations.isIgnoringBatteryOptimizations();
}

/**
 * @platform android
 */
export async function requestIgnoreBatteryOptimizations(): Promise<void> {
  if (!ExpoIgnoreBatteryOptimizations?.requestIgnoreBatteryOptimizations) {
    return;
  }

  await ExpoIgnoreBatteryOptimizations.requestIgnoreBatteryOptimizations();
}
