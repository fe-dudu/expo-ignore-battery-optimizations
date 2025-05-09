import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoIgnoreBatteryOptimizationsModule extends NativeModule {
  isIgnoringBatteryOptimizations(): boolean;
  requestIgnoreBatteryOptimizations(): Promise<void>;
}

export default requireNativeModule<ExpoIgnoreBatteryOptimizationsModule>('ExpoIgnoreBatteryOptimizations');
