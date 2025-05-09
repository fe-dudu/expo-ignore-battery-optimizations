package expo.modules.ignorebatteryoptimizations

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.PowerManager
import android.provider.Settings
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise

class ExpoIgnoreBatteryOptimizationsModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoIgnoreBatteryOptimizations")

    AsyncFunction("requestIgnoreBatteryOptimizations") { promise: Promise ->
      requestIgnoreBatteryOptimizations(promise)
    }

    Function("isIgnoringBatteryOptimizations") {
      isIgnoringBatteryOptimizations(appContext.reactContext ?: return@Function false)
    }
  }

  private fun requestIgnoreBatteryOptimizations(promise: Promise) {
    val context = appContext.reactContext ?: run {
      promise.reject("CONTEXT_ERROR", "React context is null", null)
      return
    }

    val intent = Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS).apply {
      data = Uri.parse("package:${context.packageName}")
      flags = Intent.FLAG_ACTIVITY_NEW_TASK
    }

    try {
      context.startActivity(intent)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject("ERROR_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS", "Unable to launch settings screen.", e)
    }
  }


  private fun isIgnoringBatteryOptimizations(context: Context?): Boolean {
    if (context == null) return false
    val powerManager = context.getSystemService(Context.POWER_SERVICE) as PowerManager
    return powerManager.isIgnoringBatteryOptimizations(context.packageName)
  }
}
