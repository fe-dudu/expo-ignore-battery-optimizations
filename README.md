# Expo Ignore Battery Optimizations

<div style="display: flex; gap: 10px; align-items: center;">
  <img src="https://img.shields.io/npm/v/expo-ignore-battery-optimizations?color=orange&style=flat-square&logo=npm" alt="npm version"/>
  <img src="https://img.shields.io/npm/dt/expo-ignore-battery-optimizations?color=darkgreen&style=flat-square&logo=npm" alt="npm downloads"/>
</div>

A **config plugin** for Expo that requests the `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` permission on Android.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Automatic Configuration](#automatic-configuration)
- [Why Use This?](#why-use-this)
- [Contributing](#contributing)

---

## Installation

Install the plugin with:

```bash
npm install expo-ignore-battery-optimizations
yarn add expo-ignore-battery-optimizations
```

## Usage
Automatic Configuration
If you are using Expo prebuild, you can automatically apply the required permission by adding the plugin to your app.json or app.config.js:
```js
{
  "expo": {
    "plugins": [
      "expo-ignore-battery-optimizations"
    ]
  }
}
```

## Why Use This?
Some Android device manufacturers aggressively limit background activity to save battery. To improve reliability of background services (e.g., location tracking, push messaging, etc.), your app may request the REQUEST_IGNORE_BATTERY_OPTIMIZATIONS permission.

⚠️ Note: Requesting this permission does not guarantee users will approve it, and it requires clear justification to avoid Play Store policy violations.

## Contributing
Pull requests are welcome! If you’d like to fix a bug or propose a feature, feel free to open an issue or PR.