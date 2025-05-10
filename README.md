# Expo Ignore Battery Optimizations

<div style="display: flex; gap: 10px; align-items: center;">
  <img src="https://img.shields.io/npm/v/expo-ignore-battery-optimizations?color=orange&style=flat-square&logo=npm" alt="npm version"/>
  <img src="https://img.shields.io/npm/dt/expo-ignore-battery-optimizations?color=darkgreen&style=flat-square&logo=npm" alt="npm downloads"/>
</div>

Check and request the **`REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`** permission in Android.

## Table of Contents

- [Installation](#installation)
- [Configure for Android](#configure-for-android)
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

## Usage
```jsx
import { useEffect } from 'react';
import { View } from 'react-native';
import * as IgnoreBatteryOptimizations from 'expo-ignore-battery-optimizations';

export default function App() {
  useEffect(() => {
    const isIgnoring = IgnoreBatteryOptimizations.isIgnoringBatteryOptimizations();

    if (!isIgnoring) {
      IgnoreBatteryOptimizations.requestIgnoreBatteryOptimizations();
    }
  }, []);

  return (
    <View />
  );
}
```
```jsx
import { View, Text, Button } from 'react-native';
import { useIgnoreBatteryOptimizations } from 'expo-ignore-battery-optimizations';

export default function App() {
  const [permission, requestPermission] = useIgnoreBatteryOptimizations();

  return (
    <View>
      <Text>
        Battery Optimization Status: {permission?.granted ? "Ignored ✅" : "Restricted ❌"}
      </Text>

      <Button
        title="Request to Ignore Battery Optimizations"
        onPress={requestPermission}
        disabled={permission?.granted}
      />
    </View>
  );
}
```

## Why Use This?
Some Android device manufacturers aggressively limit background activity to save battery. To improve reliability of background services (e.g., location tracking, push messaging, etc.), your app may request the REQUEST_IGNORE_BATTERY_OPTIMIZATIONS permission.

> ⚠️ **Note:** Requesting this permission does not guarantee users will approve it, and it requires clear justification to avoid Play Store policy violations. 
>
> This intent is available only on **Android 6.0 (API level 23)** and above.

## Contributing
Pull requests are welcome! If you’d like to fix a bug or propose a feature, feel free to open an issue or PR.