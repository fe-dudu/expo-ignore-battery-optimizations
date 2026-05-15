# Expo Ignore Battery Optimizations
[![npm version](https://badge.fury.io/js/expo-ignore-battery-optimizations.svg)](https://badge.fury.io/js/expo-ignore-battery-optimizations)
[![npm downloads](https://img.shields.io/npm/dm/expo-ignore-battery-optimizations.svg?style=flat-square)](https://www.npmjs.com/package/expo-ignore-battery-optimizations)

Check and request the **`REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`** permission in Android.

## Table of Contents

- [Installation](#installation)
- [Configure for Android](#configure-for-android)
- [Direct API](#direct-api)
- [Usage](#usage)
- [Why Use This](#why-use-this)
- [Contributing](#contributing)

## Installation
```bash
npm install expo-ignore-battery-optimizations
pnpm install expo-ignore-battery-optimizations
yarn add expo-ignore-battery-optimizations
```

## Configure for Android
#### plugin
```js
// app.json
{
  "expo": {
    "plugins": ["expo-ignore-battery-optimizations"]
  }
}
```
#### manual permissions
```js
// app.json
{
  "expo": {
    "android": {
      "permissions": ["REQUEST_IGNORE_BATTERY_OPTIMIZATIONS"]
    },
  }
}
```

## Direct API
```jsx
import {
  isIgnoringBatteryOptimizations,
  requestIgnoreBatteryOptimizations,
} from 'expo-ignore-battery-optimizations';

const ignored = isIgnoringBatteryOptimizations();

if (!ignored) {
  await requestIgnoreBatteryOptimizations();
}
```

`isIgnoringBatteryOptimizations()` returns:

- `true` when the app is already exempt from battery optimizations
- `false` on Android when the exemption is not active
- `false` on non-Android platforms

`requestIgnoreBatteryOptimizations()`:

- opens the system settings flow on Android
- is a no-op on non-Android platforms

## Usage
```jsx
import { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useIgnoreBatteryOptimizationPermission } from 'expo-ignore-battery-optimizations';

export default function App() {
  const { status, hasPermission, requestPermission } = useIgnoreBatteryOptimizationPermission();

  useEffect(() => {
    if (!hasPermission) {
      Alert.alert(
        'Battery Optimization',
        'To ensure the app works properly, please allow it to ignore battery optimizations.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Allow',
            onPress: requestPermission,
          },
        ],
      );
    }
  }, [hasPermission, requestPermission]);

  return <View />;
}
```

`useIgnoreBatteryOptimizationPermission()` returns:

- `status`: `'ignored' | 'not-ignored'`
- `hasPermission`: `true` when battery optimizations are already ignored
- `canRequestPermission`: `true` when the permission can still be requested
- `requestPermission()`: opens the system settings flow and refreshes state after it returns

## Why Use This?
Some Android device manufacturers aggressively limit background activity to save battery. To improve reliability of background services (e.g., location tracking, push messaging, etc.), your app may request the REQUEST_IGNORE_BATTERY_OPTIMIZATIONS permission.

> ⚠️ **Note:** Requesting this permission does not guarantee users will approve it, and it requires clear justification to avoid Play Store policy violations. 
>
> This intent is available only on **Android 6.0 (API level 23)** and above.

## Contributing
Pull requests are welcome! If you’d like to fix a bug or propose a feature, feel free to open an issue or PR.
