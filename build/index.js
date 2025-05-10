import { createPermissionHook, PermissionStatus } from 'expo-modules-core';
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
export const useIgnoreBatteryOptimizations = createPermissionHook({
    getMethod: async () => {
        const isIgnoring = isIgnoringBatteryOptimizations();
        return {
            status: isIgnoring ? PermissionStatus.GRANTED : PermissionStatus.DENIED,
            granted: isIgnoring,
            canAskAgain: true,
            expires: 'never',
        };
    },
    requestMethod: async () => {
        await requestIgnoreBatteryOptimizations();
        const isIgnoring = await isIgnoringBatteryOptimizations();
        return {
            status: isIgnoring ? PermissionStatus.GRANTED : PermissionStatus.DENIED,
            granted: isIgnoring,
            canAskAgain: true,
            expires: 'never',
        };
    },
});
//# sourceMappingURL=index.js.map