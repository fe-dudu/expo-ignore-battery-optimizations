import { useCallback, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';

import ExpoIgnoreBatteryOptimizations from './ExpoIgnoreBatteryOptimizations';

/**
 * @platform android
 */
export function isIgnoringBatteryOptimizations(): boolean {
  if (Platform.OS !== 'android') {
    return false;
  }
  return ExpoIgnoreBatteryOptimizations.isIgnoringBatteryOptimizations();
}

/**
 * @platform android
 */
export async function requestIgnoreBatteryOptimizations(): Promise<void> {
  if (Platform.OS !== 'android') {
    return;
  }
  await ExpoIgnoreBatteryOptimizations.requestIgnoreBatteryOptimizations();
}

export type IgnoreBatteryOptimizationPermissionStatus = 'ignored' | 'not-ignored';

function getPermissionStatus(): IgnoreBatteryOptimizationPermissionStatus {
  return isIgnoringBatteryOptimizations() ? 'ignored' : 'not-ignored';
}

export type IgnoreBatteryOptimizationPermissionResult = {
  status: IgnoreBatteryOptimizationPermissionStatus;
  requestPermission: () => Promise<boolean>;
  hasPermission: boolean;
  canRequestPermission: boolean;
};

function createUsePermissionFunc(
  getFunc: () => IgnoreBatteryOptimizationPermissionStatus,
  requestFunc: () => Promise<void>,
) {
  return () => {
    const [status, setStatus] = useState(getFunc);

    const requestPermission = useCallback(async () => {
      await requestFunc();
      const newStatus = getFunc();
      setStatus(newStatus);
      return newStatus === 'ignored';
    }, []);

    useEffect(() => {
      const subscription = AppState.addEventListener('change', (state) => {
        if (state === 'active') {
          setStatus(getFunc());
        }
      });

      return () => subscription.remove();
    }, []);

    return {
      status,
      requestPermission,
      hasPermission: status === 'ignored',
      canRequestPermission: status === 'not-ignored',
    };
  };
}

/**
 * Use the battery optimization permission state.
 *
 * `requestPermission()` opens the system screen and the hook re-checks the
 * permission when the app returns to the foreground. Read `status` or
 * `hasPermission` as the source of truth in render paths.
 *
 * @example
 * ```ts
 * const { hasPermission, requestPermission } =
 *   useIgnoreBatteryOptimizationPermission();
 *
 * useEffect(() => {
 *   if (!hasPermission) {
 *     requestPermission();
 *   }
 * }, [hasPermission, requestPermission]);
 * ```
 */
export const useIgnoreBatteryOptimizationPermission = createUsePermissionFunc(
  getPermissionStatus,
  requestIgnoreBatteryOptimizations,
);
