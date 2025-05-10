import { PermissionStatus } from 'expo-modules-core';
export declare function isIgnoringBatteryOptimizations(): boolean;
export declare function requestIgnoreBatteryOptimizations(): Promise<void>;
export declare const useIgnoreBatteryOptimizations: (options?: import("expo-modules-core").PermissionHookOptions<object> | undefined) => [{
    status: PermissionStatus.GRANTED | PermissionStatus.DENIED;
    granted: boolean;
    canAskAgain: true;
    expires: "never";
} | null, () => Promise<{
    status: PermissionStatus.GRANTED | PermissionStatus.DENIED;
    granted: boolean;
    canAskAgain: true;
    expires: "never";
}>, () => Promise<{
    status: PermissionStatus.GRANTED | PermissionStatus.DENIED;
    granted: boolean;
    canAskAgain: true;
    expires: "never";
}>];
//# sourceMappingURL=index.d.ts.map