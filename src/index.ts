import ExpoIgnoreBatteryOptimizations from "./ExpoIgnoreBatteryOptimizations";

export function isIgnoringBatteryOptimizations(): boolean {
 if (!ExpoIgnoreBatteryOptimizations?.isIgnoringBatteryOptimizations) {
  return false;
 }

 return ExpoIgnoreBatteryOptimizations.isIgnoringBatteryOptimizations();
}

export async function requestIgnoreBatteryOptimizations(): Promise<void> {
 if (!ExpoIgnoreBatteryOptimizations?.requestIgnoreBatteryOptimizations) {
  return;
 }

 await ExpoIgnoreBatteryOptimizations.requestIgnoreBatteryOptimizations();
}
